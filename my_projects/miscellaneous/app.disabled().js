var express = require('express');
var app = express();

console.log(app.disabled('trust proxy')); // true

app.enable('trust proxy');

console.log(app.disabled('trust proxy')); // false
