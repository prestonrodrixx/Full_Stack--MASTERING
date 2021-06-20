const express = require('express');
const app = express();
const routes = require('./controllers/routes');
const mongoose = require('mongoose');

const dotenv = require('dotenv');
dotenv.config();

// process.env.PORT from .env file.
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
    // If errors in connecting to Database.
    if (err) {
      console.log(err);
      return;
    }
    console.log('Connected to DB!');
  }
);

// All CRUD operation here...
app.use(routes);

app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log('Server listening on PORT', PORT);
});
