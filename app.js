'use strict';
var express = require('express');
var settings = require('./lib/settings');

// Pass --dev for non-minified development mode.
var devel = process.argv.indexOf('--dev') > -1;

// Initialize express. Serves static files & gzips.
var app = express();
app.use(express.compress());
var staticPath = devel ? '/app' : '/dist';
app.use(express.static(__dirname + staticPath));

// Start
app.listen(settings.port);
if (devel) console.log('Running in development mode. Files will be served without minification.');
console.log('Healthcare.gov Marketplace Emulation Server running on port', settings.port);

// Init routes.
require('./lib/routes')(app);