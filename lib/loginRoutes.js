'use strict';
var settings = require('./settings');
var request = require('request');
var _ = require('lodash');
var util = require('util');

/**
 * Login Routes
 * 
 * Healthcare.gov uses a sort of dirty redirect where they post a form directly to 
 * https://eidm.cms.gov/oam/server/authentication?type=english
 * which 302s to
 * https://eidm.cms.gov/oam/server/obrareq.cgi (with an encquery qs)
 * which 302s to 
 * https://eidm.cms.gov/obrar.cgi (with an encreply qs)
 * which 302s to 
 * https://eidm.cms.gov/successffmeng.html
 * which contains 
 * <script>
 *   window.location="https://www.healthcare.gov/marketplace/auth/userprofile"
 * </script>
 * However, userprofile reacts differently when given these cookies, and 302s to
 * https://eidm.cms.gov/oam/server/obrareq.cgi? (with some bizarro qs)
 * which 302s to
 * https://www.healthcare.gov/obrar.cgi (with a cookie qs)
 * which sets the final ObSSOCookie which then means we're authed.
 * 
 * This route works around that, so we don't get booted over to healthcare.gov again.
 */

module.exports = function(app) {

  // Proxy /marketplace to the actual healthcare.gov server
  app.post('/login', proxyToLogin);

  function proxyToLogin(req, res) {

    // Spoof normal host & origin headers. Without this 'security', the APIs will 400.
    var overrideHeaders = {
      host: 'eidm.cms.gov',
      origin: 'https://www.healthcare.gov',
      referer: 'https://www.healthcare.gov/marketplace/global/en_US/registration',
      'accept-encoding': 'identity'
    };

    var cookieJar = request.jar();

    var options = {
      url: 'https://eidm.cms.gov/oam/server/authentication?type=english',
      headers: _.extend({}, req.headers, overrideHeaders),
      followAllRedirects: true, // follows POST redirects
      maxRedirects: 9999, // there are quite a few
      strictSSL: false,
      jar: cookieJar // set cookies
    };

    // Send statusCode & headers when we get them.
    var loginRequest = request.post(options, function(err, response, body){
      if (err) {
        console.error(err);
        return res.send(500);
      }
      // Then, redirect:
      var overridePart2Headers = {
        referer: 'https://eidm.cms.gov/successffmeng.html',
        host: 'www.healthcare.gov'
      };
      var part2Options = _.extend(options, {
        url: 'https://www.healthcare.gov/marketplace/auth/userprofile',
        headers: _.extend({}, options.headers, overridePart2Headers)
      });

      var loginPart2Request = request.get(part2Options, function(err, response, body){
        console.log('---\n---\nRESPONSE\n---\n---\n');
        console.dir(response.headers);
        console.dir(cookieJar);

        // Set any healthcare.gov cookies.
        _.each(cookieJar.cookies, function(cookie){
          if (!cookie.domain || cookie.domain.indexOf('healthcare.gov') === -1) return;
          res.cookie(cookie.name, cookie.value, {maxAge: 1000 * 60 * 60 * 24});
        });
        res.status(response.statusCode).set(response.headers);
        // Modify body to stick to this host & send. It makes some ajax requests for auth
        // and redirects using window.location.href = url.
        body = body.replace(/https:\/\/www\.healthcare\.gov/g, '');
        // Our route for 'myProfile' is different
        body = body.replace('/marketplace/auth/global/en_US/myProfile', '/myProfile');
        console.log(body);
        res.send(body);
      });

      loginPart2Request.on('redirect', function(){
        console.log(util.inspect(loginPart2Request));
      });
    });

    loginRequest.on('redirect', function(){
      console.log(util.inspect(loginRequest));
    });

    // Pipe postdata into proxied request.
    req.pipe(loginRequest);
  }
};