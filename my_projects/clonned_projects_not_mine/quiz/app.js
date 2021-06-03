const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('./quiz'));

app.get('/test', (req, res) => {
  res.send('Home Route');
});

app.use((req, res) => {
	res.status(404).send('404 Page Not Found');
  });

app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log('Server listening on PORT', PORT);
});
