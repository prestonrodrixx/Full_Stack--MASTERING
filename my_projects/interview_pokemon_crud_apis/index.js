const express = require('express');
const app = express();
const routes = require('./controllers/routes');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const PORT = process.env.PORT;

app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static('public'));

// DB_CONNECT credentials from .env file.
mongoose.connect(
  process.env.DB_CONNECT,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
  (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log('Connected to DB!');
  }
);

app.use(routes);

app.listen(PORT, () => {
  console.log('Server Started on PORT:', PORT);
});
