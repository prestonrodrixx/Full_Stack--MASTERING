const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('index');
});

router.post('/add', (req, res) => {
  res.render('index');
});
module.exports = router;
