var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/',function (req,res,next) {
  console.log(req.body);
  if (req.body.input === 'cm'){
    res.send({
      cm: 100
    })
  }
})

module.exports = router;
