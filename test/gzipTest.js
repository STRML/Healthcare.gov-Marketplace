// Really simple gzipping webserver to test payload size.
// `npm install express` before use.
var express = require('express');

var app = express();
app.use(express.compress());
app.use(express.static(__dirname + '/../dist'));
app.listen(8080);