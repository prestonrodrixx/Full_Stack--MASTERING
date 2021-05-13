const express = require('express');
const path = require('path');

const bodyParser = require('body-parser');

const app = express();

const rootDir = require('./util/path');

app.set('view engine', 'ejs');
app.set('views', 'views'); // By Default

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  // console.log(JSON.stringify(req.query))
  let qname = req.query.qname;
  let myName = qname != null ? req.query.qname : null;
  res.render('ganeshji', {
    personName: myName,
    strName: myName != null ? myName : null
  });
});

app.post('/', (req, res) => {
  let myName = req.body.name != null ? req.body.name : null;
  res.render('ganeshji', {
    personName: myName,
    strName: myName != null ? myName : null
  });
});

app.listen(3000);
