const router = require('express').Router();
const tasks = require('../models/taskModel');

// Get data from MongoDB
router.get('/', (req, res) => {
  var myTasks;
  tasks.find({}, (err, data) => {
    if (err) {
      console.log(err);
    }
    if (data) {
      myTasks = data;
    }
    res.render('index', { data: myTasks });
  });
});

// To Add data to MongoDB
router.post('/add', (req, res) => {
  const task = req.body.task;
  tasks({ task: task }).save(function (err, doc) {
    if (err) {
      console.log(err);
    }
    res.redirect('/');
  });
});

module.exports = router;
