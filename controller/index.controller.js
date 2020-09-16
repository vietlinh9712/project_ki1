let models = require('../models/index.models')

module.exports.getIndex =async function(req,res){
    let topCurrency = await models.getTopCurrency();
    res.render('index',{
        topCurrency: topCurrency
    })
}

module.exports.displayPageConversion =async function (req,res,next) {
    let key = req.params.unit;
    if (key.toLowerCase() === 'currency' ){
        let currencyData = await models.getCurrency();
        res.render('currency',{
            data : currencyData,
            unitFrom: 34,
            unitTo: 36
        })
    }else {
        let dataTopUnit = await models.getTopUnit_1(key);
        let dataFromDatabase = await models.getMeasureByType(key);
        res.render('conversion',{
            data: dataFromDatabase,
            dataunit: dataTopUnit
        })
    }
}

module.exports.getConversionRate = async function(req,res,next){
    let key = req.body.key;
    let conversionRate = await models.getConversionRate(key);
    res.send(conversionRate);
}

module.exports.getTopCurrency = function (req,res) {

}

module.exports.getAboutUs = function (req,res) {
    res.render('aboutus')
}