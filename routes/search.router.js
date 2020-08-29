var express = require('express');
var router = express.Router();

const controller = require('../controller/search.controller')

router.get('/:key',controller.getSearch);

router.post('/',controller.postSearch);

module.exports = router;