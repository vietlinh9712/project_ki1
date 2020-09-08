let conversionRateFromDatabase = [];
let url = document.location.pathname;
let key = url.replace('/','');
$.ajax({
    url: '/api/getRate',
    method: 'post',
    data: {
        key: key
    },
    success: function (result){
        calculationUsingRateFromServer(result);
    }
})

function calculationUsingRateFromServer(result) {
    conversionRateFromDatabase = result;
    console.log(result);
}

let allInputFlied = $('.conversion-unit');
allInputFlied.bind('input',async function() {
    let UserInput = $(this);
    let userInputRate = {};
    await conversionRateFromDatabase.forEach(e => {
        if (e.DonViQuyDoi === Number(UserInput.attr('name'))){
            userInputRate = e;
            console.log(userInputRate);
        }
    });
    for (let conversionRate of conversionRateFromDatabase){
        for(let inputField of allInputFlied) {
            if (Number($(inputField).attr('name')) !== userInputRate.DonViQuyDoi){
                if (Number($(inputField).attr('name')) === conversionRate.DonViQuyDoi){
                    let rateOfThisElement = Number(conversionRate.TiLe);
                    let resultOfConversion = (Number(UserInput.val())*Number(userInputRate.TiLe)) / rateOfThisElement;
                    console.log(resultOfConversion);
                    if (UserInput.val() === '' || isNaN(UserInput.val()) || resultOfConversion == 'Infinity'){
                        $(inputField).val('');
                    }else {
                        $(inputField).val(Number(resultOfConversion.toPrecision(12)));
                    }
                }
            }
        }
    }
})

allInputFlied.bind('focusin',function () {
    $(this).css({
        'background-color' : 'rgb(255,231,0)',
        'border': '2px solid black'});
})
allInputFlied.bind('focusout',function () {
    $(this).css({
        'background-color' : 'white',
        'border':'1px solid #ced4da'
    });
})

