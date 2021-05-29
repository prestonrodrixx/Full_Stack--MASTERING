const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Root Directory');
  console.dir(req.ip);
});

app.use((req, res) => {
  res.status(404).send('404 Page Not Found');
});

app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log('Server listening on PORT', PORT);
});
