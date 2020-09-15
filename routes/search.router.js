var express = require('express');
var router = express.Router();

const controller = require('../controller/search.controller')

router.get('/',controller.getSearch);

router.get('/:key',function (req,res) {
    console.log(req.params.key);
})

router.post('/Currency',controller.searchCurrency)

router.post('/',controller.postSearch);

module.exports = router;