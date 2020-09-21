let btnToggle = $('#toggle-event');
let dataCurrency;
let rowCurrency = [];
let colCurrency = [];

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
        if ($(unitHeadTable[1]).attr('id') === dataCurrency[i].KiHieu) colCurrency[0] = dataCurrency[i];
        if ($(unitHeadTable[2]).attr('id') === dataCurrency[i].KiHieu) colCurrency[1] = dataCurrency[i];
        if ($(unitHeadTable[3]).attr('id') === dataCurrency[i].KiHieu) colCurrency[2] = dataCurrency[i];
        if ($(unitHeadTable[4]).attr('id') === dataCurrency[i].KiHieu) colCurrency[3] = dataCurrency[i];
        if ($(unitHeadTable[5]).attr('id') === dataCurrency[i].KiHieu) colCurrency[4] = dataCurrency[i];
        if ($(unitHeadTable[6]).attr('id') === dataCurrency[i].KiHieu) colCurrency[5] = dataCurrency[i];
    }
}

$(btnToggle).bind('change',async function () {
    getInfoOfCurrencyCol(dataCurrency);
    let headTableCompareCurrency = $('#head-table');
    let bodyTableCompareCurrency = $('.body-table');
    let unitHeadTable = $(headTableCompareCurrency).children();
    let unitBodyTable = $(bodyTableCompareCurrency).children();
    let titleCol = $('.col-table-title')
    if ($('#toggle-event').prop('checked')){
        for (let i =1 ;i < unitHeadTable.length ; i++){
            let unitSymbol = $($(unitHeadTable[i]).children()[1]);//when on change symbol of unit col
            let unitSymbol1 = $(unitHeadTable[i]).attr('id');
            $(unitSymbol).text(unitSymbol1);
        }
        for(let i =1 ;i < titleCol.length; i++){
            let unitSymbol = $($($(titleCol[i]).children()[2])).children()[0];
            let unitSymbol1 = '1 ' + $(unitSymbol).text();
            $(unitSymbol).text(unitSymbol1);
            for (let j =1 ; j < unitHeadTable.length  ; j++){
                let rowsUnit = $('.body-table').children()[i];
                $($($(rowsUnit).children()[j]).children()[0]).text((colCurrency[i-1].TiLe / colCurrency[j-1].TiLe).toPrecision(5))
            }
        }
    }else {
        for (let i =1 ;i < unitHeadTable.length ; i++){//when off change symbol of unit col
            let unitSymbol = $($(unitHeadTable[i]).children()[1]).text();
            let unitSymbol1 = '1 ' + unitSymbol;
            $($(unitHeadTable[i]).children()[1]).text(unitSymbol1);
        }
        for(let i =1 ;i < titleCol.length -1; i++){//change symbol 1 unit row
            let unitSymbol = $($($(titleCol[i]).children()[2])).children()[0];
            let unitSymbol1 = $(titleCol[i]).attr('id');
            $(unitSymbol).text(unitSymbol1);
            for (let j =1 ; j < unitHeadTable.length ; j++){
                let rowsUnit = $('.body-table').children()[i];
                $($($(rowsUnit).children()[j]).children()[0]).text((colCurrency[j-1].TiLe/colCurrency[i-1].TiLe).toPrecision(6))
            }
        }
    }
})
