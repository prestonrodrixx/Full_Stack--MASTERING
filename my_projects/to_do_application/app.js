const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, (err) => {
  if (err) console.log('Error in server setup');
  console.log('Server Up and running');
});
