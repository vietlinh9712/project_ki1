let conversionRateFromDatabase = [];
$.ajax({
    url: '/getRate',
    method: 'post',
    data: {
        key: 'length'
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
    let UserInput = $(this);
    let valueUserInput = parseFloat(UserInput.val());
    if (typeof(valueUserInput) === "number" ){
        let userInputRate = {};
        await conversionRateFromDatabase.forEach(e => {
            if (e.DonViQuyDoi === UserInput.attr('name')){
                userInputRate = e.TiLe;
            }
        });
        console.log(userInputRate);
        for (let conversionRate of conversionRateFromDatabase){
            for(let inputField of allInputFlied) {
                if ($(inputField).attr('name') !== userInputRate.DonViQuyDoi){
                    if ($(inputField).attr('name') === conversionRate.DonViQuyDoi){
                        let rateOfThisElement = conversionRate.TiLe;
                        let resultOfConversion = (UserInput.val()*userInputRate) / rateOfThisElement ;
                        $(inputField).val(resultOfConversion);
                    }
                }
            }
        }
    }
})