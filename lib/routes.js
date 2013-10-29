'use strict';
var settings = require('./settings');
var https = require('https');
var url = require('url');
var request = require('request');
var _ = require('lodash');
/**
 * Routes
 */

var devel = process.env.NODE_ENV === 'development';
var staticRoot = __dirname + '/../' + (devel ? 'app/' : 'dist/');

module.exports = function(app) {

  // separation of concerns
  require('./loginRoutes')(app);

  // Proxy /marketplace to the actual healthcare.gov server
  app.all('/marketplace/*', proxyToHealthcareGov);
  app.all('/ee-rest/*', proxyToHealthcareGov);

  app.get('/myProfile', function(req, res){
    res.sendfile('myProfile.html', {root: staticRoot});
  });
  app.get('/*', getStaticPage.bind(null, 'individual.html'));

  // Redirect to individual.html for now.
  // Proxy any request underneath that has fallen through the static handlers. These are going
  // to go to backbone.
  function getStaticPage(page, req, res){
    // Get JSESSIONID
    var cookieJar = request.jar();
    var options = {
      url: 'https://www.healthcare.gov/marketplace/global/en_US/registration',
      jar: cookieJar
    };
    request.get(options, function(error, response, body){
      // Set cookies
      _.each(cookieJar.cookies, function(cookie){
        res.cookie(cookie.name, cookie.value, {maxAge: 1000 * 60 * 60 * 24});
      });
      res.sendfile(page, {root: staticRoot});
    });
  }

  function proxyToHealthcareGov(req, res) {
    // get request URL to pass onto API server
    var api = settings.healthcareGovProxy;

    // send request to API server
    var options = {
      host: api.host,
      port: api.port,
      method: req.method,
      path: req.path,
      headers: req.headers,
      rejectUnauthorized: false
    };

    // Spoof normal host & origin headers. Without this 'security', the APIs will 400.
    var originalRefererPath = url.parse(req.headers.referer || '').pathname;
    options.headers.host = 'www.healthcare.gov';
    options.headers.origin = 'https://www.healthcare.gov';
    options.headers.referer = 'https://www.healthcare.gov/marketplace/global/en_US' + originalRefererPath;

    // pipe it right through
    var request = https.request(options, function(response){
      if (response.statusCode >= 300 && response.statusCode < 400){
        rewriteRedirect(response);
      }
      res.status(response.statusCode).set(response.headers);
      response.pipe(res);
    });

    // Errors are ignored.
    request.on('error', function(e) {
      console.error('Error during request', e);
      request.abort();
    });

    // pipe POST/PUT data to request body, if it exists
    req.pipe(request);
  }

  /**
   * Sometimes we get redirects, endpoints move, etc., we don't want to get shunted to healthcare.gov.
   */
  function rewriteRedirect(response){
    if (!response.headers || !response.headers.location) return;
    response.headers.location = response.headers.location.replace('http://www.healthcare.gov', '');
  }
};