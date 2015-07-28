$(function(){
    $(window).scroll(function(){
        var now = $(window).scrollTop();
        if(now > 1050 ){
            $('#recommendbar').css({'position':'fixed', 'top':'0px', 'width':'27%', 'height':'100%', 'margin-top':'3%'});
        }else{
            $('#recommendbar').css({'position':'', 'top':'', 'width':'', 'margin-top':''});
        }
    });
});