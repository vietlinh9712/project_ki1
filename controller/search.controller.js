const models = require('../models/search.models')

module.exports.getSearch = function (req,res) {
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