const express = require('express');
const routes = require('./controllers/routes');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', __dirname + './views');

// connect to mongoose
// Connection to DB
mongoose.set('useFindAndModify', false);

// DB_CONNECT credentials from .env file.
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () => {
  console.log('Connected to DB!');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('Started on PORT', PORT);
});
