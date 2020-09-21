var express = require('express');
var router = express.Router();

const controller = require('../controller/search.controller')

router.get('/unit',controller.getSearch);

router.get('/:unit/Convert',controller.searchHasUnit)

router.post('/api/unitSameType',controller.searchInput)

router.post('/Currency',controller.searchCurrency)

router.post('/',controller.postSearch);


module.exports = router;