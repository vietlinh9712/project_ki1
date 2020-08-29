const models = require('../models/search.models')

module.exports.getSearch = function (req,res) {
}

module.exports.postSearch =async function (req,res) {
    let name_measure = [];
    let keyword = req.body.keyword;
    let resultOfSearch = await models.search(keyword);
    if (resultOfSearch.length > 1){// just send name of measure
        await resultOfSearch.map((e) => {
            name_measure.push({name : e.TenDonVi});
        })
    }else if (resultOfSearch.length === 1){// check result
        let TenDonVi = await resultOfSearch[0].TenDonVi;
        name_measure.push({name: TenDonVi})
    }
    if (name_measure.length){
        res.send(name_measure)
    }else {
        res.send([]);
    }
}