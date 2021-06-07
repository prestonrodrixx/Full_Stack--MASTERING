const express = require('express');
const app = express();

app.use('/static', express.static('public'));

app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('todo.ejs');
});

app.listen(3000, (err) => {
  if (err) console.log('Error in server setup');
  console.log('Server Up and running');
});
