let timer = 200;
function processClickSelectUnit() {
    $('.name-option').bind('click',function(){
        let currentUnitSelect = $(this)
        let wrapSelectUnit = $(this).parents()[0];
        let searchInput = $(wrapSelectUnit).children()[3];
        let wrapDropdown = $(wrapSelectUnit).children()[2];
        let Dropdown = $(wrapDropdown).children()[0];
        $(searchInput).val('');
        $(Dropdown).css('display','block');
        $(currentUnitSelect).addClass('display-none');
        $($(wrapSelectUnit).children()[3]).select();
        displaySelectUnitToInput(Dropdown,currentUnitSelect);
        searchUnitCurrency(wrapDropdown,searchInput);
    })
    $('.select-unit').bind('focusout',async function () {
        let wrapSelectUnit = $(this).parents()[0];
        let searchInput = $(this);
        let currentUnitSelect =    $(wrapSelectUnit).children()[1];
        let wrapDropdown = $(wrapSelectUnit).children()[2];
        let Dropdown = $(wrapDropdown).children()[0];
        $(Dropdown).css('display','block');
        $(currentUnitSelect).addClass('display-none');
        $($(wrapSelectUnit).children()[3]).val('');
        displaySelectUnitToInput(Dropdown,currentUnitSelect,wrapDropdown,searchInput);
        searchUnitCurrency(wrapDropdown,searchInput);
    })
}
processClickSelectUnit();
function searchUnitCurrency(dropdownElement,searchInput) {
    $(searchInput).bind('input',function () {
        clearTimeout(timer)
        timer = setTimeout(function () {
            let key = $(searchInput).val()
            $.ajax({
                url: '/search/Currency',
                data: {
                    key: key
                },
                method: 'post',
                success:  function (rel) {
                    $($(dropdownElement).children()[0]).empty();
                    if (rel.length){
                        rel.map(function (e) {
                            $($(dropdownElement).children()[0]).append('<li class="dropdown-item">\n' +
                                '                                            <a href="javascript:void(0)" class="dropdown-item-1">\n' +
                                '                                                <div class="name-option-1" style="top:5%; left: 6%">\n' +
                                '                                                    <div class="wrap-img">\n' +
                                '                                                        <img src="' + e.QuocKi + '" style="border-radius: 100%;width: 40px;height: 40px;float: left;">\n' +
                                '                                                    </div>\n' +
                                '                                                    <div class="text-name-option current-code" ><span style="font-size: 1.5em;font-weight: 600;line-height: 20%">'+e.KiHieu+'</span></div>\n' +
                                '                                                    <div class="text-name-option current-name"><span>'+e.TenDonVi+'</span></div>\n' +
                                '                                                </div>\n' +
                                '                                            </a>\n' +
                                '                                        </li>')
                        })
                    }else {
                        $($(dropdownElement).children()[0]).append('<li class="dropdown-item">\n' +
                            '                                            <div class="dropdown-item-1">\n' +
                            '                                                <div class="name-option-1" style="top:5%; left: 6%">\n' +
                            '                                                    <span>no result</span> \n'+
                            '                                                </div>\n' +
                            '                                            </div>\n' +
                            '                                        </li>')
                    }
                }
            })
        },200)
    })
}

function displaySelectUnitToInput(Dropdown,currentUnitSelect,dropdownElement,searchInput) {
    $(Dropdown).children().bind('click',function () {
        let unitSelect = $($($(this).children()[0]).children()[0]).children();
        let flagImg = $($(unitSelect).children()[0]).attr('src');
        let symbolUnit = $($(unitSelect).children()[1]).text();
        let nameUnit = $($(unitSelect).children()[2]).text();
        $($($(currentUnitSelect).children()[0]).children()[0]).attr('src',flagImg);//set src img to input box
        $($($(currentUnitSelect).children()[1]).children()[0]).text(symbolUnit);//set symbol div tag to input box
        $($($(currentUnitSelect).children()[2]).children()[0]).text(nameUnit);// set name div tag to input box
        $(searchInput).val(symbolUnit);
        $(Dropdown).css('display','none');
        $(currentUnitSelect).removeClass('display-none');
        if ($(searchInput).attr('id') === 'from') changeUnitFrom(symbolUnit);
        if ($(searchInput).attr('id') === 'to') changeUnitTo(symbolUnit);
        changeRateUnit($('#from').val(),$('#to').val());
        $.ajax({// reset dropdown unit before search
            url: '/search/Currency',
            method: 'post',
            data: {
                key: ''
            },
            success:  function (rel) {
                $($(dropdownElement).children()[0]).empty();
                rel.map(function (e) {
                    $($(dropdownElement).children()[0]).append('<li class="dropdown-item">\n' +
                        '                                            <a href="javascript:void(0)" class="dropdown-item-1">\n' +
                        '                                                <div class="name-option-1" style="top:5%; left: 6%">\n' +
                        '                                                    <div class="wrap-img">\n' +
                        '                                                        <img src="' + e.QuocKi + '" style="border-radius: 100%;width: 40px;height: 40px;float: left;">\n' +
                        '                                                    </div>\n' +
                        '                                                    <div class="text-name-option current-code" ><span style="font-size: 1.5em;font-weight: 600;line-height: 20%">'+e.KiHieu+'</span></div>\n' +
                        '                                                    <div class="text-name-option current-name"><span>'+e.TenDonVi+'</span></div>\n' +
                        '                                                </div>\n' +
                        '                                            </a>\n' +
                        '                                        </li>')
                })
            }
        })

    });
}

function clickInverseButton() {
    let btnInverse = $('#inverseButton');
    $(btnInverse).bind('click',function () {
        let input1 = $('#from');
        let input2 = $('#to');
        let selectInput1 = $($('.wrap-input')[1]).children()[1];
        let selectInput2 = $($('.wrap-input')[2]).children()[1];
        let linkImgInput1 = $($($(selectInput1).children()[0]).children()[0]).attr('src');
        let symbolInput1 = $($($(selectInput1).children()[1]).children()[0]).text();
        let nameUnitInput1 = $($($(selectInput1).children()[2]).children()[0]).text();
        let linkImgInput2 = $($($(selectInput2).children()[0]).children()[0]).attr('src');
        let symbolInput2 = $($($(selectInput2).children()[1]).children()[0]).text();
        let nameUnitInput2 = $($($(selectInput2).children()[2]).children()[0]).text();
        let valueInput1 = $(input1).val();
        let valueInput2 = $(input2).val();
        $(input1).val(valueInput2);
        $(input2).val(valueInput1);
        changeUnitFrom(valueInput2);
        changeUnitTo(valueInput1);
        changeRateUnit(valueInput2,valueInput1);
        $($($(selectInput2).children()[0]).children()[0]).attr('src',linkImgInput1);
        $($($(selectInput2).children()[1]).children()[0]).text(symbolInput1);
        $($($(selectInput2).children()[2]).children()[0]).text(nameUnitInput1);
        $($($(selectInput1).children()[0]).children()[0]).attr('src',linkImgInput2);
        $($($(selectInput1).children()[1]).children()[0]).text(symbolInput2);
        $($($(selectInput1).children()[2]).children()[0]).text(nameUnitInput2);
    })
}
clickInverseButton();

function changeUnitFrom (value) {
    let unitFrom = $('.unit-from');
    for(let unit of unitFrom){
        $(unit).text(value);
    }
}

function changeUnitTo (value) {
    let unitTo = $('.unit-to')
    for(let unit of unitTo){
        $(unit).text(value);
    }
}

function changeRateUnit(valueFrom,valueTo) {
    // let valueFrom = $('#from').val();
    // let valueTo = $('#to').val();
    let amount = $('#amount').val();
    for(let unit of dataCurrency){
        if (unit.KiHieu === valueFrom) valueFrom = unit;
        if (unit.KiHieu === valueTo) valueTo = unit;
    }
    if (isNaN(Number(amount)) || amount === ''){
        $('#user-input').text(1)
        $('#result-convert').text(((valueFrom.TiLe/valueTo.TiLe).toPrecision(12)))
    }else{
        let compareTable1= $('#compare-table-1');
        let compareTable2= $('#compare-table-2');
        $('#user-input').text(amount);
        $('#result-convert').text((Number(amount)*(Number(valueTo.TiLe)/Number(valueFrom.TiLe))).toPrecision(12));
        $('#rate-one-from').text((valueFrom.TiLe/valueTo.TiLe));
        $('#rate-one-to').text((valueTo.TiLe/valueFrom.TiLe));
        $(compareTable1).empty();
        $(compareTable2).empty();
        for(let i = 0; i <= 10 ; i++){
            let number;
            if (i === 0)  number = 1;
            if (i === 1)  number = 5;
            if (i === 2)  number = 10;
            if (i === 3)  number = 25;
            if (i === 4)  number = 50;
            if (i === 5)  number = 100;
            if (i === 6)  number = 500;
            if (i === 7)  number = 1000;
            if (i === 8)  number = 5000;
            if (i === 9)  number = 10000;
            if (i === 10)  number = 50000;
            $(compareTable2).append('<tr><th class="text-left col-left set-text ">'+ number + '<span class="unit-to"> '+valueTo.KiHieu+'</span></th>\n' +
                '                    <th class="text-left col-right set-text"> ' + ((valueFrom.TiLe / valueTo.TiLe)*number).toPrecision(12) +' <span class="unit-from">'+valueFrom.KiHieu+'</span></th></tr>')
            $(compareTable1).append('<tr><th class="text-left col-left set-text ">'+ number + '<span class="unit-to"> '+valueFrom.KiHieu+'</span></th>\n' +
                '                    <th class="text-left col-right set-text"> ' + ((valueTo.TiLe / valueFrom.TiLe)*number).toPrecision(12) +' <span class="unit-from">' +valueTo.KiHieu+'</span></th></tr>')
        }
    }
}