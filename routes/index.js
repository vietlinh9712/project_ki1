var express = require('express');
var router = express.Router();

const controller = require('../controller/index.controller')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/length',controller.getLength);

router.get('/Area',controller.getArea);

router.get('/Volume',controller.getVolume);

router.get('/Temperature',controller.getTemperature);

router.get('/Currency',controller.getLength);

router.get('/search',function (req,res, next) {
  res.render('search_index');
})

router.post('/getRate',controller.postLength);


module.exports = router;

