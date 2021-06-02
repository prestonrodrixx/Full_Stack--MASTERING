var express = require('express');
var app = express();

app.disable('/home');

console.log(app.get('/home')); // false
