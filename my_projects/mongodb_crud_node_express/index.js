const express = require('express');
const routes = require('./controllers/routes');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const app = express();

dotenv.config();

app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', 'views');

// Connection to DB
// DB_CONNECT credentials from .env file.
mongoose.connect(
  process.env.DB_CONNECT,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
  () => {
    console.log('Connected to DB!');
  }
);

app.use(routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('Started on PORT :', PORT);
});
