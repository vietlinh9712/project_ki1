let btnToggle = $('#toggle-event');
let dataCurrency;
let rowCurrency = [];
let colCurrency = []

$.ajax({
    url: '/api/getCurrency',
    method: 'get',
    data: {},
    success : function (rel) {
        dataCurrency = rel;
        getInfoOfCurrencyCol(dataCurrency);
    }
})
function getInfoOfCurrencyCol (dataCurrency){
    let headTableCompareCurrency = $('#head-table');
    let unitHeadTable = $(headTableCompareCurrency).children();
    for (let i = 0; i < dataCurrency.length;i++){
        if ($($(unitHeadTable[1]).children()[1]).text().replace('1','') === dataCurrency[i].KiHieu) rowCurrency[0] = dataCurrency[i];
        if ($($(unitHeadTable[2]).children()[1]).text().replace('1','') === dataCurrency[i].KiHieu) rowCurrency[1] = dataCurrency[i];
        if ($($(unitHeadTable[3]).children()[1]).text().replace('1','') === dataCurrency[i].KiHieu) rowCurrency[2] = dataCurrency[i];
        if ($($(unitHeadTable[4]).children()[1]).text().replace('1','') === dataCurrency[i].KiHieu) rowCurrency[3] = dataCurrency[i];
        if ($($(unitHeadTable[5]).children()[1]).text().replace('1','') === dataCurrency[i].KiHieu) rowCurrency[4] = dataCurrency[i];
        if ($($(unitHeadTable[6]).children()[1]).text().replace('1','') === dataCurrency[i].KiHieu) rowCurrency[5] = dataCurrency[i];
    }
}

$(btnToggle).bind('change',async function () {
    let headTableCompareCurrency = $('#head-table');
    let bodyTableCompareCurrency = $('.body-table');
    let unitHeadTable = $(headTableCompareCurrency).children();
    let unitBodyTable = $(bodyTableCompareCurrency).children();
    let titleCol = $('.col-table-title')
    console.log(rowCurrency);
    if ($('#toggle-event').prop('checked')){
        for (let i =1 ;i < unitHeadTable.length ; i++){
            let unitSymbol = $($(unitHeadTable[i]).children()[1]).text();
            let unitSymbol1 = unitSymbol.replace('1','');
            $($(unitHeadTable[i]).children()[1]).text(unitSymbol1);
        }
        for(let i =1 ;i < titleCol.length ; i++){
            let unitSymbol = $($(titleCol[i]).children()[2]);
            let unitSymbol1 = '1 ' + unitSymbol.text();
            unitSymbol.text(unitSymbol1);
            for (let j =1 ; j < unitHeadTable.length ; j++){
                let rowsUnit = $('.body-table').children()[i];
                colCurrency[j-1] = rowCurrency[j-1];
                $($($(rowsUnit).children()[j]).children()[0]).text((rowCurrency[i-1].TiLe / colCurrency[j-1].TiLe).toPrecision(5))
            }
        }
    }else {
        for (let i =1 ;i < unitHeadTable.length ; i++){
            let unitSymbol = $($(unitHeadTable[i]).children()[1]).text();
            let unitSymbol1 = '1 ' + unitSymbol;
            $($(unitHeadTable[i]).children()[1]).text(unitSymbol1);
        }
        for(let i =1 ;i < titleCol.length ; i++){
            let unitSymbol = $($(titleCol[i]).children()[2]);
            let unitSymbol1 = unitSymbol.text().replace('1','');
            unitSymbol.text(unitSymbol1);
            for (let j =1 ; j < unitHeadTable.length ; j++){
                let rowsUnit = $('.body-table').children()[i];
                colCurrency[j-1] = rowCurrency[j-1]
                $($($(rowsUnit).children()[j]).children()[0]).text((colCurrency[j-1].TiLe/rowCurrency[i-1].TiLe).toPrecision(8))
            }
        }
    }
})
