var iNow = 1
var last = 0;

$(document).swipeUp(function(){
    last = iNow;
    iNow++;
    if(iNow <= $('.page').length){
    $('.page-'+iNow).removeClass('hide').addClass('moveToTop');
    $('.page-'+last).removeClass('hide').addClass('moveFromBottom');
    
    setTimeout(function(){
        $('.page-'+iNow).find('img').removeClass('hide');
    },600)
    }
})