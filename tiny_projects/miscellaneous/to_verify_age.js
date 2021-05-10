const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send(
    '<form action="/ageverify" method="POST"><input type="text" name="age"></input><button type="submit">Submit</button></form>'
  );
});

app.post('/ageverify', (req, res) => {
  console.log(req.body.age);
  const age = req.body.age;
  const voteable = age < 18 ? 'too young to vote.' : 'old enough to vote.';
  res.send('You are ' + voteable + '<br>' + '<a href="/"> Go Back</a>');
});

app.listen(3001);
