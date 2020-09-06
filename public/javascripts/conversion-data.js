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
}

let allInputFlied = $('.conversion-unit');
allInputFlied.bind('input',async function() {
    console.log(conversionRateFromDatabase);
    let UserInput = $(this);
    let userInputRate = {};
    await conversionRateFromDatabase.forEach(e => {
        if (e.DonViQuyDoi === Number(UserInput.attr('name'))){
            userInputRate = e;
        }
    });
    for (let conversionRate of conversionRateFromDatabase){
        for(let inputField of allInputFlied) {
            if (Number($(inputField).attr('name')) !== userInputRate.DonViQuyDoi){
                if (Number($(inputField).attr('name')) === conversionRate.DonViQuyDoi){
                    let rateOfThisElement = Number(conversionRate.TiLe);
                    let resultOfConversion = (Number(UserInput.val())*Number(userInputRate.TiLe)) / rateOfThisElement;
                    console.log(Number.parseFloat(UserInput.val()));
                    console.log(Number.parseFloat(userInputRate.TiLe));
                    console.log(rateOfThisElement);
                    if (UserInput.val() === '' || isNaN(UserInput.val())){
                        $(inputField).val('');
                    }else {
                        $(inputField).val(Number(resultOfConversion.toPrecision(12)));
                    }
                }
            }
        }
    }
})