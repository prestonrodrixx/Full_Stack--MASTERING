const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', 'views');

app.get('/', (req, res, next) => {
  console.log('Hello');
});

app.listen(PORT, () => {
  console.log('Server Started');
});
