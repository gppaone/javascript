$(document).ready(function(){
    // search field - on keyup
    $('#search').on('keyup', function(){
        //console.log($(this).val());
        var searchTerm = $(this).val().toLowerCase();
        // list to be filtered as characters are typed
        $('.buildinglist button').each(function(){
            var lineStr = $(this).text().toLowerCase();
            if(lineStr.indexOf(searchTerm) === -1){
                $(this).hide();
            }else{
                $(this).show();
            }
        });
    });
});