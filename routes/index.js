var express = require('express');
var router = express.Router();

const controller = require('../controller/index.controller')

/* GET home page. */
router.get('/',controller.getIndex);

router.get('/:unit',controller.displayPageConversion);

router.post('/api/getRate',controller.getConversionRate);

router.get('/api/getTopCurrency',controller.getTopCurrency);

router.post('/get',controller.getAboutUs)

module.exports = router;

