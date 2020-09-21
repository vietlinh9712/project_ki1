let dataCurrency1;

$.ajax({
    url: '/api/getUnitByType',
    method: 'get',
    data: {
        type: $($('section')[0]).attr('id'),
        key: ' '
    },
    success : function (rel) {
        dataCurrency1 = rel;
    }
})
console.log('a')
$('#amount').bind('input',function () {
    let valueFrom = $('#from').val();
    let valueTo = $('#to').val();
    let amount = $(this).val();
    for(let unit of dataCurrency1){
        if (unit.KiHieu === valueFrom) valueFrom = unit;
        if (unit.KiHieu === valueTo) valueTo = unit;
    }
    if (isNaN(Number(amount)) || amount === ''){
        $('#user-input').text(1)
        $('#result-convert').text(((valueFrom.TiLe/valueTo.TiLe).toPrecision(12)))
    }else{
        $('#user-input').text(amount);
        $('#result-convert').text((amount*(valueFrom.TiLe/valueTo.TiLe)).toPrecision(12));
    }

})
