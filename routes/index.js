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
/*GET length-convert page */
/*GET lenghth page. */
router.get('/length-convert', function(req, res, next) {
  res.render('length-convert');
});
router.get('/search',function (req,res, next) {
  res.render('search_index');
})
module.exports = router;

