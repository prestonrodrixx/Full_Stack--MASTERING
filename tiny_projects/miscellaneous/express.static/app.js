const express = require('express');
const app = express();
const PORT = 3000;

// Serving Static Files eg: favicon
app.use(express.static('./'));

app.get('/', (req, res) => {
  const img = '<img src="favicon.png" />';
  const html = '<html><head><title>Document</title></head><body><div>Home Route' + img + '</div></body></html>'
  res.send(html);
});

app.use((req, res) => {
  res.status(404).send('404 Page Not Found');
});

app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log('Server listening on PORT', PORT);
});
