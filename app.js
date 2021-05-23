import express from 'express';
import ejs from 'ejs';
import bodyParser from 'body-parser';
import yoast from 'yoast';

const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  ejs.renderFile(
    'index.ejs',
    {
      name: 'Preston',
    },
    function (err, html) {
      res.send(html);
    }
  );
});

app.post('/', (req, res) => {
  const url = req.body.url;
  res.send(url);
});

app.listen(3000);
