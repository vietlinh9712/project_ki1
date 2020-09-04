let timer, delay = 500;
const dropdownWhenSearch = $('#list_search');
const inputSearch = $('#search');
let selectSearch = false;

let sendAndGetDataAndDelayInput = async function () {
    selectSearch = true;
    clearTimeout(timer);
    timer = setTimeout(function() {
        let key =  inputSearch.val();
        if (key.length === 0){
            dropdownWhenSearch.empty();
            dropdownWhenSearch.css("display","none");
        }
        if (key.length >= 1){
            $.ajax({
                url: '/search',
                method: 'post',
                data: {
                    keyword: key
                },
                success:function(result){
                    processDataReceiveFromServer(result);
                }
            })
        }
    }, 1000);
}

function processDataReceiveFromServer (result) {
    dropdownWhenSearch.empty() //
    if (result.length >= 1){
        dropdownWhenSearch.css("display","block");
        selectSearch = true;
    }else {
        dropdownWhenSearch.css("display","none");
        selectSearch = false;
    }
    result.forEach(function (e) {
        dropdownWhenSearch.append("<a href='/length-convert'><li class=\"dropdown-item\">"+e.name+"</li></a>")
    })
    processWhenUserOutSearch();
}

inputSearch.bind('input',sendAndGetDataAndDelayInput);

function processWhenUserOutSearch() {// hidden dropdown when user click out input field
    inputSearch.bind('focusin', () => {
        dropdownWhenSearch.show();
    })
    inputSearch.bind('focusout', () => {
        $('#list_search').bind('mouseleave', () => {
            dropdownWhenSearch.hide()
        })
    })
}

// $(window).bind('keydown',function () {
//     if (selectSearch){
//         console.log('keydown')
//     }
// })