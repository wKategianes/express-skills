var express = require('express');
var router = express.Router();

// GET /skills
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Dev Skills' });
});

module.exports = router;
