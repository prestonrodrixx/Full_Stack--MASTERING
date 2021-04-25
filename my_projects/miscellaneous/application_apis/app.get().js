const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('GET request to homepage');
});

app.listen(3000);
