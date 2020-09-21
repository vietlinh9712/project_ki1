let dataCurrency2;
let btnAdd = $('#btn-add-remove');
let dropdownAdd = $('#dropdown-add-remove');
let inputAdd = $('#input-add-remove');
let unitSelectRow = [];
let numberSelect = 0;
let unitSelectCol = [];
let unitDefault;
let unitCheck = [];

$.ajax({
    url: '/api/getCurrency',
    method: 'get',
    data: {},
    success : function (rel) {
        dataCurrency2 = rel;
        getCurrencyCurrent();
    }
})

function getCurrencyCurrent(){
    let headTable = $('#head-table');
    let unit1 = $($(headTable).children()[2]).attr('id');
    let unit2 = $($(headTable).children()[3]).attr('id');
    let unit3 = $($(headTable).children()[4]).attr('id');
    let unit4 = $($(headTable).children()[5]).attr('id');
    let unit5 = $($(headTable).children()[6]).attr('id');
    let unit6 = $($(headTable).children()[1]).attr('id');
    let unit = [unit1,unit2,unit3,unit4,unit5];
    unitCheck = [unit1,unit2,unit3,unit4,unit5];
    dataCurrency2.map((e) => {
        for (let i = 0 ; i < 5; i++){
            if (unit[i] === e.KiHieu) unit[i] = e;
        }
        if (unit6 === e.KiHieu) unitDefault = e;
    })
    unitSelectCol = unit;// get currency default
}

$(btnAdd).bind('click',function () {
    $(dropdownAdd).addClass('display-block');
    $(inputAdd).removeClass('display-none');
    $(inputAdd).select();
    $(this).addClass('display-none');
})

function resetJs(){// function reset js driven event
    $('#dropdown-add-remove > .dropdown-item').bind('click',function () {
        getCurrencyCurrent();
        $(btnAdd).removeClass('display-none');
        $(inputAdd).addClass('display-none');
        $(dropdownAdd).removeClass('display-block');
        if (numberSelect >= 5) numberSelect = 0;
        console.log(unitCheck);
        if (unitCheck.includes($(this).attr('id'))){// unique array
            console.log('a');
        }else {
            unitSelectRow[numberSelect++] = $(this).attr('id');
        }
        for (let unit of dataCurrency2){
            if (unitSelectRow[numberSelect - 1] === unit.KiHieu){
                unitSelectRow[numberSelect-1] = unit;
                unitSelectCol[numberSelect-1] = unit;
            }
        }
        processDropDownAfterSelect(unitSelectRow,dataCurrency2);
        addCurrencyRow(unitSelectRow,unitSelectCol);
    })
}
resetJs();

function processDropDownAfterSelect(unitSelect,dataCurrency) {
    $(dropdownAdd).empty();
    for (let unit of unitSelect){
        dataCurrency.map((e) => {
            if (e.KiHieu === unit.KiHieu) {
                $(dropdownAdd).append('<li id="'+ e.KiHieu + '" class="dropdown-item">\n' +
                    '                                <a href="javascript:void(0)" class="dropdown-item-1">\n' +
                    '                                    <div class="name-option-1" style="top:5%; left: 6%">\n' +
                    '                                        <div class="text-name-option" >\n' +
                    '                                            <div class="current-code">'+e.KiHieu+' </div> - <div class="current-name">'+e.TenDonVi+'</div><div class="icon-remove"><i class="fas fa-minus-circle" style="width: 40px!important;height: 40px!important;color: red"></i></div>\n' +
                    '                                        </div>\n' +
                    '                                    </div>\n' +
                    '                                </a>\n' +
                    '                            </li>')
            }
        })
    };
    dataCurrency.map((e) => {
        let compareUnit = true;
        for (let unit of unitSelect) {
            if (unit.KiHieu === e.KiHieu) compareUnit = false;
        }
        if (compareUnit) {
            $(dropdownAdd).append('<li id="' + e.KiHieu + '" class="dropdown-item">\n' +
                '                                <a href="javascript:void(0)" class="dropdown-item-1">\n' +
                '                                    <div class="name-option-1" style="top:5%; left: 6%">\n' +
                '                                        <div class="text-name-option" >\n' +
                '                                            <div class="current-code">'+e.KiHieu+' </div> - <div class="current-name"> '+e.TenDonVi+'</div><div class="icon-remove display-none"><i class="fas fa-minus-circle" style="width: 40px!important;height: 40px!important;color: red"></i></div>\n' +
                '                                        </div>\n' +
                '                                    </div>\n' +
                '                                </a>\n' +
                '                            </li>')
        }
    });
    resetJs();
}

function addCurrencyRow(unitSelectRow,unitSelectCol) {
    let table = $('#body-table-compare');
    for (let i = 0 ; i <= unitSelectRow.length-1; i++){
        let row = $(table).children()[i+2];
        let rowFirst = $(table).children()[1];
        let rowHead = $(table).children()[0];
        $($($(rowFirst).children()[i+2]).children()[0]).text((unitDefault.TiLe/unitSelectCol[i].TiLe).toPrecision(5))
        $($(rowHead).children()[i+2]).empty();
        $($(rowHead).children()[i+2]).attr('id',unitSelectCol[i].KiHieu);
        $($(rowHead).children()[i+2]).append('<div id="'+unitSelectRow[i].KiHieu+'" class="wrap-img">\n' +
            '                                <img src="' + unitSelectRow[i].QuocKi + '">\n' +
            '                            </div>\n' +
            '                            <div class="title-currency text-center"><a href="/Currency/Convert?from=' + unitSelectRow[i].KiHieu + '">' + unitSelectRow[i].KiHieu + '</a></div>');
        $(row).empty();
        $(row).removeClass('display-none');
        $(row).append('<th scope="col" id="'+unitSelectRow[i].KiHieu+'" class="col-table-title">\n' +
            '                            <img src="../images/line/middle-line.78c3ca4692f73d84aa1cc55a36fc7aef.png">\n' +
            '                            <div class="wrap-img-row">\n' +
            '                                <img src="'+unitSelectRow[i].QuocKi+'">\n' +
            '                            </div>\n' +
            '                            <div class="title-currency text-center title-currency-row"><a href="/Currency/Convert?from='+unitSelectRow[i].KiHieu+'" >1 '+unitSelectRow[i].KiHieu+'</a></div>\n' +
            '                        </th>\n' +
            '                        <th scope="col" class="col-table-1 font-size-number text-center padding-top">\n' +
            '                            <span>'+(unitSelectRow[i].TiLe/unitDefault.TiLe).toPrecision(5)+'</span>\n' +
            '                        </th>\n' +
            '                        <th scope="col" class="col-table-1 font-size-number text-center padding-top">\n' +
            '                            <span>'+(unitSelectRow[i].TiLe/unitSelectCol[0].TiLe).toPrecision(5)+'</span>\n' +
            '                        </th>\n' +
            '                        <th  scope="col" class="col-table-1 font-size-number text-center padding-top">\n' +
            '                            <span>'+(unitSelectRow[i].TiLe/unitSelectCol[1].TiLe).toPrecision(5)+'</span>\n' +
            '                        </th>\n' +
            '                        <th  scope="col" class="col-table-1 font-size-number text-center padding-top">\n' +
            '                            <span>'+(unitSelectRow[i].TiLe/unitSelectCol[2].TiLe).toPrecision(5)+'</span>\n' +
            '                        </th>\n' +
            '                        <th  scope="col" class="col-table-1 font-size-number text-center padding-top">\n' +
            '                            <span>'+(unitSelectRow[i].TiLe/unitSelectCol[3].TiLe).toPrecision(5)+'</span>\n' +
            '                        </th>\n' +
            '                        <th  scope="col" class="col-table-1 font-size-number text-center padding-top">\n' +
            '                            <span>'+(unitSelectRow[i].TiLe/unitSelectCol[4].TiLe).toPrecision(5)+'</span>\n' +
            '                        </th>')
    }
}