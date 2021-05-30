var express = require('express');
var app = express();
var PORT = 3000;

app
  .route('/user')
  .get((req, res, next) => {
    res.send('GET request called');
  })
  .post((req, res, next) => {
    res.send('POST request called');
  })
  .put((req, res, next) => {
    res.send('Put request called');
  })
  .delete((req, res, next) => {
    res.send('Delete request called');
  })
  .all((req, res, next) => {
    res.send('Other requests called');
  });

app.listen(PORT, function (err) {
  if (err) console.log(err);
  console.log('Server listening on PORT', PORT);
});
