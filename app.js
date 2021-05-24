import express from 'express';
import ejs from 'ejs';
import bodyParser from 'body-parser';
import yeast from 'yeast';
import knex from 'knex';

const app = express();

const db = knex({
  client: 'mysql',
  connection: {
    user:'root',
    password:'mysqlpreston',
    database:'url_shortner',
    host:'localhost'
  }
});

app.use(express.urlencoded({ extended: true }));

app.post('/', (req, res) => {
  const url = req.body.url;
  db('urls').insert({
    url,
  }).then(ids => {
    const alias = yeast.encode(ids[0]);
    res.send(alias);
  }).catch(console.log)
});

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



app.listen(3000);
