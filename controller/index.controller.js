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
        res.redirect('/Currency/Convert');
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

module.exports.getCurrency =async function (req,res) {
    let From = req.query.from;
    let To = req.query.to;
    let amount = req.query.amount;
    if(amount < 0) amount = amount * -1;
    if(isNaN(Number(amount)) || amount === undefined) amount = 1;
    let currencyData = await models.getCurrency();
    let unitFrom = (currencyData.findIndex(function (e) {
        return e.KiHieu === From;
    }) !== -1) ? (currencyData.findIndex(function (e) {
        return e.KiHieu === From;
    })) : 34;
    let unitTo = (currencyData.findIndex(function (e) {
        return e.KiHieu === To;
    }) !== -1) ? (currencyData.findIndex(function (e) {
        return e.KiHieu === To;
    })) :36;
    res.render('currency',{
        data : currencyData,
        unitFrom: unitFrom,
        unitTo: unitTo,
        amount: amount
    })
}

module.exports.getCurrencyAPI = async function (req,res) {
    let currencyData = await models.getCurrency();
    res.send(currencyData);
}

module.exports.getAboutUs = function (req,res) {
    res.render('aboutus')
}

module.exports.getUnitByType =async function (req,res) {
    let type = req.query.type;
    let allUnitSameType = await models.getMeasureByType(type);
    res.send(allUnitSameType);
}