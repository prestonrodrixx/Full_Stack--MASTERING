var express = require('express');
var app = express();
var PORT = 3000;

// View engine setup
app.set('view engine', 'ejs');

app.render('message', function (err, html) {
  if (err) console.log(err);
  console.log(html);
});

app.listen(PORT, function (err) {
  if (err) console.log('Error in server setup');
  console.log('Server listening on Port', PORT);
});
