const router = require('express').Router();
const tasks = require('../models/taskModel');

// To Get Data from MongoDB
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

// To Add Data to MongoDB
router.post('/add', (req, res) => {
  const task = req.body.task;
  tasks({ task: task }).save(function (err, doc) {
    if (err) {
      console.log(err);
    }
    res.redirect('/');
  });
});

// To Update Data from MongoDB
router.post('/update', (req, res) => {
  const id = req.body.id;
  tasks.findOneAndUpdate({ _id: id }, { status: true }, (err, doc) => {
    res.redirect('/');
  });
});

// To Delete Data from MongoDB
router.post('/delete', (req, res) => {
  const id = req.body.id;
  tasks.findOneAndRemove({ _id: id }, (err, doc) => {
    res.redirect('/');
  });
});

module.exports = router;
