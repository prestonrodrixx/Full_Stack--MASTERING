const express = require('express');
const app = express();

app.get('/', (req, res) => {
  let age = 18;
  var voteable = age < 18 ? 'Too young' : 'Old enough';
  res.send(voteable);
});

app.listen(3001);
