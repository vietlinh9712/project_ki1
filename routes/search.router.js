var express = require('express');
var router = express.Router();

const controller = require('../controller/search.controller')

router.get('/',controller.getSearch);

router.get('/search-index',function (req,res) {
    res.render('search_index');
})

router.post('/',controller.postSearch);

module.exports = router;