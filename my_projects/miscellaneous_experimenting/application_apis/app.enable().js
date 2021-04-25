var express = require('express');
var app = express();

app.enable('trust proxy');

console.log(app.get('trust proxy')); // true
