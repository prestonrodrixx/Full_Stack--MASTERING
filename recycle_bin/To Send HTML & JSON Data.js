const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to my Home Page.');
});

app.get('/about', (req, res) => {
  res.status(200).send('Welcome to my About Page.');
});

app.get('/contact', (req, res) => {
  res.send('Welcome to ym Contact Page');
});

app.get('/temp', (req, res) => {
  // res.json will also convert non objects such as numm and undefined which are not valid json
  res.json([
    {
      id: 1,
      name: 'Preston',
    },
    {
      id: 1,
      name: 'Preston',
    },
    {
      id: 1,
      name: 'Preston',
    },
  ]);
});

app.use('/', (req, res) => {
  res.send('<h1>Error 404</h1>');
});

app.listen(3000);
