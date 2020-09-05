let models = require('../models/index.models')

module.exports.getLength =async function (req,res,next) {
    let key = 'Length';
    let dataFromDatabase = await models.getMeasureByType(key);
    res.render('length',{
        data: dataFromDatabase
    })
}

module.exports.postLength = async function(req,res,next){
    let key = req.body.key;
    let conversionRate = await models.getConversionRate(key);
    res.send(conversionRate);
}

module.exports.getArea =async function (req,res,next) {
    let key = 'Area';
    let dataFromDatabase = await models.getData(key);
    res.render('length',{
        data: dataFromDatabase
    })
}

module.exports.getVolume =async function (req,res,next) {
    let key = 'Volume';
    let dataFromDatabase = await models.getData(key);
    res.render('length',{
        data: dataFromDatabase
    })
}

module.exports.getTemperature =async function (req,res,next) {
    let key = 'Temperature';
    let dataFromDatabase = await models.getData(key);
    res.render('length',{
        data: dataFromDatabase
    })
}