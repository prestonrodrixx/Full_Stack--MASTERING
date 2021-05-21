var express = require('express');
var app = express();
var PORT = 3000;

app.delete('/', (req, res) => {
  res.send('DELETE Request Called');
});

app.listen(PORT, function (err) {
  if (err) console.log(err);
  console.log('Server listening on PORT', PORT);
});
