var express = require('express');
var app = express();

app.enabled('trust proxy');
// => false

console.log(app.get('trust proxy')); // false

app.enable('trust proxy');

app.enabled('trust proxy'); // Why first false and then true?
// => true

console.log(app.get('trust proxy')); // true
