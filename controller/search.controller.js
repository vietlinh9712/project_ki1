const models = require('../models/search.models');
const modelsIndex = require('../models/index.models');

module.exports.getSearch =async function (req,res) {
    let keyword = req.query.keyword;
    let resultOfSearchUnit = await models.searchHasUnit(keyword);
    if (resultOfSearchUnit.length){
        console.log(resultOfSearchUnit);
        let type = resultOfSearchUnit[0].TenDanhMuc;
        let symbol = resultOfSearchUnit[0].KiHieu
        res.redirect('/search/'+type+'/Convert?from='+symbol);
    }else {
        let resultOfSearch = await models.searchUnitByKey(keyword);
        let amoutType = await resultOfSearch.map((e) => {
            return e.TenDanhMuc;
        });
        let typeUnique = [...new Set(amoutType)];
        res.render('search/search_index',{
            data: resultOfSearch,
            keyword: keyword,
            typeUnit : typeUnique
        });
    }
}

module.exports.postSearch =async function (req,res) {
    let measureResultSearch = [];
    let keyword = req.body.keyword;
    let resultOfSearch = await models.search(keyword);
    if (resultOfSearch.length > 1){//process err map not function
        await resultOfSearch.map((e) => {
            measureResultSearch.push(
                {
                    name : e.TenDonVi,
                    type: e.TenDanhMuc,
                    symbol: e.KiHieu
                });
        })
    }else if (resultOfSearch.length === 1){// check result
        let aMeasure = await resultOfSearch[0];
        measureResultSearch.push(
            {
                name : aMeasure.TenDonVi,
                type: aMeasure.TenDanhMuc,
                symbol: aMeasure.KiHieu
            }
        )
    }
    if (measureResultSearch.length){
        res.send(measureResultSearch)
    }else {
        res.send([]);
    }
}

module.exports.searchCurrency = async function (req,res) {
    let key = req.body.key;
    let result = await models.searchCurrency(key);
    res.send(result);
}

module.exports.searchInput =async function(req,res){
    let key = req.body.key;
    let type = req.body.type;
    let result = await models.searchUnitByTypeAndKey(type,key);
    res.send(result);
}

module.exports.searchHasUnit = async function (req,res) {
    let unitFrom = req.query.from;
    let type = req.params.unit;
    if (type.toLowerCase() === 'currency'){
        res.redirect('/Currency/Convert?from='+unitFrom)
    }else {
        let allUnitSameType = await modelsIndex.getMeasureByType(type);
        let indexUnitFrom = (allUnitSameType.findIndex(function (e) {
            return e.KiHieu === unitFrom;
        }) !== -1) ? (allUnitSameType.findIndex(function (e) {
            return e.KiHieu === unitFrom;
        })) : 1;
        res.render('conversion2Unit',{
            data: allUnitSameType,
            unitFrom: indexUnitFrom,
            unitTo: 0
        })
    }
}