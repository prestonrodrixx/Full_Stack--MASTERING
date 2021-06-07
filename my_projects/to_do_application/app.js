const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

// Models
const TodoTask = require('./models/TodoTask');

dotenv.config();

app.use('/static', express.static('public'));

app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

// GET METHOD
app.get('/', (req, res) => {
  TodoTask.find({}, (err, tasks) => {
    res.render('todo.ejs', { todoTasks: tasks });
  });
});

// POST Method
app.post('/', async (req, res) => {
  const todoTask = new TodoTask({
    content: req.body.content,
  });
  try {
    await todoTask.save();
    res.redirect('/');
  } catch (err) {
    res.redirect('/');
  }
});

// Connection to db
mongoose.set('useFindAndModify', false);
// DB_CONNECT credentials from .env file
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () => {
  console.log('Connected to DB!');
  app.listen(3000, () => console.log('Server Up and running'));
});
