'use strict';
var express = require('express');
var settings = require('./lib/settings');
var https = require('https');

var app = express();
app.use(express.compress());
app.use(express.static(__dirname + '/dist'));
app.listen(settings.port);
console.log('Healthcare.gov Marketplace Emulation Server running on port', settings.port);

// Redirect to individual.html for now.
app.get('/', function(req, res){
  res.redirect('/individual.html');
});

// Proxy /marketplace to the actual healthcare.gov server
app.all('/marketplace/*', proxyToHealthcareGov);
app.all('/ee-rest/*', proxyToHealthcareGov);

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

  console.dir(options);

  options.headers.host = 'www.healthcare.gov';
  options.headers.origin = 'https://www.healthcare.gov';
  options.headers.referer = 'https://www.healthcare.gov/marketplace/global/en_US/registration';

  // options.headers['x-forwarded-for'] = req.ips;

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