const express = require('express');

const router = express.Router({caseSensitive: true, strict: true});

router.get('/', (req, res) => {
  res.send('Api Route');
});

router.get('/v2', (req, res) => {
  res.send('Api Route v2');
});

module.exports = router;
