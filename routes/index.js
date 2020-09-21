var express = require('express');
var router = express.Router();

const controller = require('../controller/index.controller')

/* GET home page. */
router.get('/',controller.getIndex);

router.get('/:unit',controller.displayPageConversion);

router.get('/Currency/Convert',controller.getCurrency)

router.post('/api/getRate',controller.getConversionRate);

router.get('/api/getTopCurrency',controller.getTopCurrency);

router.get('/api/getCurrency',controller.getCurrencyAPI);

router.get('/page/aboutus',controller.getAboutUs)

router.get('api/getData')

module.exports = router;

