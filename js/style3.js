$(function(){
    var nav    = $('#recommendbar'),
        offset = nav.offset();
      
    $(window).scroll(function () {
      if($(window).scrollTop() > offset.top) {
        nav.css({'position':'fixed', 'top':'0px', 'width':'27%', 'height':'100%', 'margin-top':'0%'});
      } else {
        nav.css({'position':'', 'top':'', 'width':'', 'margin-top':''});
      }
    });
});