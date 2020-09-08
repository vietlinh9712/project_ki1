var express = require('express');
var router = express.Router();

const controller = require('../controller/index.controller')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/:unit',controller.displayPageConversion);

router.post('/api/getRate',controller.getConversionRate);

router.get('/api/getTopCurrency',controller.getTopCurrency)


module.exports = router;

