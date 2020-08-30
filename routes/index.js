var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/*GET lenghth page. */
router.get('/length', function(req, res, next) {
  res.render('length');
});

module.exports = router;

