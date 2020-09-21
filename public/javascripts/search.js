let timer, delay = 200;
const dropdownWhenSearch = $('#list_search');
const inputSearch = $('#search');
let selectDropdown = -1;

let sendAndGetDataAndDelayInput = async function () {
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
    }, 500);
}

function processDataReceiveFromServer (result) {
    dropdownWhenSearch.empty() //
    if (result.length >= 1){
        dropdownWhenSearch.css("display","block");
        selectDropdown = -1;
        processWhenUserOutSearch();
    }else {
        dropdownWhenSearch.css("display","none");
    }
    result.forEach(function (e) {
        dropdownWhenSearch.append("<li class=\"dropdown-items \" >" +
                                    "<a class=\"dropdown-item \" href='/search/"+e.type +"/Convert?from="+e.symbol +"'>"
                                        +"<span class='text-left set-name'>"+e.name+" ("+e.symbol+")"+"</span>"
                                        +"<span class='text-right set-type '>"+e.type+ "</span>" +
            "                        </a>" +
            "                       </li>")
    })
}

inputSearch.bind('input',sendAndGetDataAndDelayInput);

function processWhenUserOutSearch() {// hidden dropdown when user click out input field
    inputSearch.bind('focusin', () => {
        dropdownWhenSearch.show();
    })
}
selectDropdownWhenUserPressArrowDownAndUp();


function selectDropdownWhenUserPressArrowDownAndUp(){
    $('#list_search').children().bind('mouseover',function () {
        selectDropdown = $(this).index();
    })
    inputSearch.bind('keydown',async function (e) {
        if (e.which === 40 || e.which === 38){
            e.preventDefault();
            let dropdownList = $('#list_search').children();
            if (e.which === 40) (selectDropdown < $(dropdownList).length - 1)? selectDropdown++ : selectDropdown;
            if (e.which === 38) (selectDropdown > 0) ? selectDropdown-- : selectDropdown = 0;
            let dropdownUserSelect =await $('#list_search').children()[selectDropdown];
            for(let dropdown of dropdownList){
                if (dropdown === dropdownUserSelect){
                    $(dropdownUserSelect).css('background-color','#aeaaaa63');
                    $(inputSearch).val($(dropdownUserSelect).text());
                }else {
                    $(dropdown).css('background','white');
                }
            }
        }
    })
}

