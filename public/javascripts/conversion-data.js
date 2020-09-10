let conversionRateFromDatabase = [];
let url = document.location.pathname;
let key = url.replace('/','');
let allInputField = $('.conversion-unit');
if (key.toLowerCase() === 'temperature'){//
    allInputField.bind('input',function () {
        let userInput = $(this);
        if(userInput.attr('id') === 'celsius'){
            $("#fahrenheit").val((Number(userInput.val())*1.8 + 32).toPrecision(12));
            $("#kelvin").val((Number(userInput.val()) + 273.15).toPrecision(12))
        }
        if (userInput.attr('id') === 'fahrenheit'){
            $('#celsius').val(((Number(userInput.val())-32) / 1.8).toPrecision(12));
            $("#kelvin").val((((Number(userInput.val())-32) / 1.8) + 273.15).toPrecision(12));
        }
        if (userInput.attr('id') === 'kelvin'){
            $('#celsius').val((Number(userInput.val())-273.15).toPrecision(12));
            $("#fahrenheit").val(((Number(userInput.val())-273.15)*1.8 + 32).toPrecision(12));
        }
        if (userInput.val() === ''){
            for (let inputField of allInputField){
                if(inputField !== userInput){
                    $(inputField).val('')
                }
            }
        }
    })
}
else {
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
}


function calculationUsingRateFromServer(result) {
    conversionRateFromDatabase = result;
}

allInputField.bind('input',async function() {
    let UserInput = $(this);
    let userInputRate = {};
    await conversionRateFromDatabase.forEach(e => {
        if (e.DonViQuyDoi === Number(UserInput.attr('name'))){
            userInputRate = e;
        }
    });
    for (let conversionRate of conversionRateFromDatabase){
        for(let inputField of allInputField) {
            if (Number($(inputField).attr('name')) !== userInputRate.DonViQuyDoi){
                if (Number($(inputField).attr('name')) === conversionRate.DonViQuyDoi){
                    let rateOfThisElement = Number(conversionRate.TiLe);
                    let resultOfConversion = (Number(UserInput.val())*Number(userInputRate.TiLe)) / rateOfThisElement;
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
