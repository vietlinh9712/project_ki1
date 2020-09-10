let models = require('../models/index.models')

module.exports.getIndex =async function(req,res){
    let topCurrency = await models.getTopCurrency();
    res.render('index',{
        topCurrency: topCurrency
    })
}

module.exports.displayPageConversion =async function (req,res,next) {
    let key = req.params.unit;
    let dataFromDatabase = await models.getMeasureByType(key);
    res.render('conversion',{
        data: dataFromDatabase
    })
}

module.exports.getConversionRate = async function(req,res,next){
    let key = req.body.key;
    let conversionRate = await models.getConversionRate(key);
    res.send(conversionRate);
}

module.exports.getTopCurrency = function (req,res) {

}