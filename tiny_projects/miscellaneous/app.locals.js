const express = require('express');
const app = express();
const PORT = 3000;

// Setting single locals variable
app.locals.email = 'demo@gmail.com';
app.locals.name = 'Preston Rodrigues';
app.locals.age = 24;

// console.log(app.locals);

app.get('/', (req, res) => {
  res.send(app.locals);
});

app.listen(PORT, (err) => {
  if (err) console.log(err);
  //   console.log('Server listening on PORT', PORT);
});
