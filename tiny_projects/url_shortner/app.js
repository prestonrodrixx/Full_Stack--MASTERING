import express from 'express';
import ejs from 'ejs';
import bodyParser from 'body-parser';
import yeast from 'yeast';
import knex from 'knex';

const app = express();

const db = knex({
  client: 'mysql',
  connection: {
    user: 'root',
    password: 'mysqlpreston',
    database: 'url_shortner',
    host: 'localhost',
  },
});

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

app.get('/:alias', (req, res, next) => {
  const alias = req.params.alias;
  if (alias) {
    db.select('url')
      .from('urls')
      .from('urls')
      .where({ id: yeast.decode(alias) })
      .first()
      .then((urlRow) => {
        res.redirect(urlRow.url);
      });
  } else {
    next();
  }
});

app.get('/', (req, res) => {
  const alias = req.query.alias;
  ejs.renderFile(
    'index.ejs',
    {
      alias,
    },
    function (err, html) {
      res.send(html);
    }
  );
});

app.post('/', (req, res) => {
  const url = req.body.url;
  db('urls')
    .insert({
      url,
    })
    .then((ids) => {
      const alias = yeast.encode(ids[0]);
      res.redirect('/?alias=' + alias);
    })
    .catch(console.log);
});

app.listen(3001);
