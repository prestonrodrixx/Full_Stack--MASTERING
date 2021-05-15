const express = require('express');
const path = require('path');
const PORT = 3000;

const bodyParser = require('body-parser');

const app = express();

const rootDir = require('./util/path');

app.set('view engine', 'ejs');
app.set('views', 'views'); // By Default

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/ganeshchaturthi/', (req, res) => {
  let qname = req.query.qname;
  let qnameEncoded = null;
  let myName = qname != null ? qname : null;

  let ua = req.header('user-agent');
  // Check the user-agent string to identyfy the device.
  if (
    /mobile|iphone|ipod|android|blackberry|opera|mini|windows\sce|palm|smartphone|iemobile|ipad|android|android 3.0|xoom|sch-i800|playbook|tablet|kindle/i.test(
      ua
    )
  ) {
    res.render('ganeshjim', {
      personName: myName,
      strName: myName != null ? myName : null,
      strNameEncoded: qnameEncoded,
    });
  } else {
    res.render('ganeshji', {
      personName: myName,
      strName: myName != null ? myName : null,
      strNameEncoded: qnameEncoded,
    });
  }
  console.log(
    req.protocol + ':' + '//' + req.hostname + ':' + '3000' + req.path
  );
});

app.post('/ganeshchaturthi/', (req, res) => {
  let bname = req.body.name;
  let bnameEncoded = encodeURIComponent(bname);
  let myName = bname != null ? bname : null;

  let ua = req.header('user-agent');
  // Check the user-agent string to identyfy the device.
  if (
    /mobile|iphone|ipod|android|blackberry|opera|mini|windows\sce|palm|smartphone|iemobile|ipad|android|android 3.0|xoom|sch-i800|playbook|tablet|kindle/i.test(
      ua
    )
  ) {
    res.render('ganeshjim', {
      personName: myName,
      strName: myName != null ? myName : null,
      strNameEncoded: bnameEncoded != null ? bnameEncoded : null,
    });
  } else {
    res.render('ganeshji', {
      personName: myName,
      strName: myName != null ? myName : null,
      strNameEncoded: bnameEncoded != null ? bnameEncoded : null,
    });
  }
  console.log(
    req.protocol +
      ':' +
      '//' +
      req.hostname +
      ':' +
      PORT +
      req.path +
      '?qname=' +
      bnameEncoded
  );
});

app.use((req, res) => {
  res.redirect('/ganeshchaturthi/');
});

app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log('Server listening on PORT', PORT);
});
