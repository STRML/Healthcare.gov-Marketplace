'use strict';
var settings = require('./settings');
var https = require('https');
/**
 * Routes
 */

var devel = process.env.NODE_ENV === 'development';
var staticRoot = __dirname + '/../' + (devel ? 'app/' : 'dist/');

module.exports = function(app) {


  // Proxy /marketplace to the actual healthcare.gov server
  app.all('/marketplace/*', proxyToHealthcareGov);
  app.all('/ee-rest/*', proxyToHealthcareGov);

  // Redirect to individual.html for now.
  // Proxy any request underneath that has fallen through the static handlers. These are going
  // to go to backbone.
  app.get('/*', function(req, res){
    res.sendfile('individual.html', {root: staticRoot});
  });

  function proxyToHealthcareGov(req, res) {
    var api = settings.proxyTo;
    // get request URL to pass onto API server

    // send request to Identify API server
    var options = {
      host: api.host,
      port: api.port,
      method: req.method,
      path: req.path,
      headers: req.headers,
      rejectUnauthorized: false
    };

    // Spoof normal host & origin headers. Without this 'security', the APIs will 400.
    options.headers.host = 'www.healthcare.gov';
    options.headers.origin = 'https://www.healthcare.gov';
    options.headers.referer = 'https://www.healthcare.gov/marketplace/global/en_US/registration';

    // pipe it right through
    var request = https.request(options, function(response){
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
};