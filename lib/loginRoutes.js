'use strict';
var settings = require('./settings');
var request = require('request');
var _ = require('lodash');
var util = require('util');

/**
 * Login Routes
 * Healthcare.gov uses a sort of dirty redirect where they post a form directly to 
 * https://eidm.cms.gov/oam/server/authentication?type=english
 * which 302s to
 * https://eidm.cms.gov/successffmeng.html
 * which contains 
 * <script>
 *   window.location="https://www.healthcare.gov/marketplace/auth/userprofile"
 * </script>
 * Yep. That's how they really do it.
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
      'content-encoding': 'identity'
    };

    var cookieJar = request.jar();

    var options = {
      url: 'https://eidm.cms.gov/oam/server/authentication?type=english',
      headers: _.extend({}, req.headers, overrideHeaders),
      followAllRedirects: true, // follows POST redirect to successffmeng.html
      strictSSL: false,
      jar: cookieJar // set cookies
    };

    // Send statusCode & headers when we get them.
    var loginRequest = request.post(options, function(err, response, body){
      if (err) {
        console.error(err);
        return res.send(500);
      }
      console.dir(cookieJar);
      res.status(response.statusCode).set(response.headers);
      console.log(body);
      res.redirect('/myProfile');
    });

    loginRequest.on('redirect', function(){
      console.log(util.inspect(loginRequest));
    });

    // Pipe postdata into proxied request.
    req.pipe(loginRequest);
  }
};