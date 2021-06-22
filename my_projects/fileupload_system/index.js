const express = require('express');
const upload = require('express-fileupload');
const path = require('path');

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(upload());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/', (req, res) => {
  // Accessing the file by the <input> File name="file"
  let targetFile = req.files.file;

  //mv(path, CB function(err))
  targetFile.mv(path.join(__dirname, 'uploads', targetFile.name), (err) => {
    if (err) return res.status(500).send(err);
    res.send('File uploaded!');
  });
});

app.listen(3000);
