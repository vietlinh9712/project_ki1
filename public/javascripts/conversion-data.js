let conversionRateFromDatabase = [];
let url = document.location.pathname;
let key = url.replace('/','');
$.ajax({
    url: '/getRate',
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
    console.log(conversionRateFromDatabase);
    let UserInput = $(this);
    let userInputRate = {};
    await conversionRateFromDatabase.forEach(e => {
        if (e.DonViChuan === Number(UserInput.attr('name'))){
            userInputRate = e;
        }
    });
    console.log(userInputRate);
    for (let conversionRate of conversionRateFromDatabase){
        for(let inputField of allInputFlied) {
            if (Number($(inputField).attr('name')) !== userInputRate.DonViQuyDoi){
                if (Number($(inputField).attr('name')) === conversionRate.DonViQuyDoi){
                    let rateOfThisElement = Number.parseFloat(conversionRate.TiLe);
                    let resultOfConversion = (Number.parseFloat(UserInput.val())*userInputRate.TiLe) / rateOfThisElement;
                    console.log(UserInput.val()+'111');
                    if (UserInput.val() === '' || isNaN(UserInput.val())){
                        $(inputField).val('');
                    }else {
                        $(inputField).val(resultOfConversion);
                    }
                }
            }
        }
    }
})