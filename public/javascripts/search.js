let timer, delay = 500;

$('#search').bind('input',async function() {
    clearTimeout(timer);
    timer = setTimeout(function() {
        let key =  $('#search').val();
        if (key.length === 0){
            $('#list_search').empty();
            $('#list_search').css("display","none");
        }
        if (key.length > 0){
            $.ajax({
                url: '/search',
                method: 'post',
                data: {
                    keyword: key
                },
                success: function (result) {
                    $('#list_search').empty()
                    if (result.length >= 1){
                        $('#list_search').css("display","block");
                    }else {
                        $('#list_search').css("display","none");
                    }
                    result.forEach(function (e) {
                        $('#list_search').append("<li class=\"dropdown-item\">"+e.name+"</li>")
                    })
                }
            })
        }}, 1000);
})
