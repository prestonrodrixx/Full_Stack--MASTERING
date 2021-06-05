var express = require('express');
var app = express();
var PORT = 3000;

// Handling GET Request
app.get('/user', function (req, res) {
  res.send('Handled GET Request');
});

// Handling POST Request
app.post('/user', function (req, res) {
  res.send('Handled POST Request');
});

// Handling DELETE Request
app.delete('/remove', function (req, res) {
  res.send('Handled DELETE Request');
});

app.listen(PORT, function (err) {
  if (err) console.log('Error in server setup');
  console.log('Server listening on Port', PORT);
});
