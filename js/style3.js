$(function() {
 
 
// トップ画のアニメーションスピードをコントロール
 
var fadeinSP = 500; //フェードインスピード
var fadeoutSP = 300; //フェードアウトスピード
 
 
// トップ画の通常非表示設定
 
$('.recommend01').hide();
$('.recommend02').hide();
$('.recommend03').hide();
$('.recommend04').hide();

$('#aboutus a').hover(
    function () {
        $('.recommend02').stop(true, true).fadeIn(0);
        }, function () {
        $('.recommend02').stop(true, true).fadeOut(0);
    }
);

$('#article a, .toparticlenext').hover(
    function () {
        $('.recommend03').stop(true, true).fadeIn(0);
        }, function () {
        $('.recommend03').stop(true, true).fadeOut(0);
    }
);

$('#contact a').hover(
    function () {
        $('.recommend04').stop(true, true).fadeIn(0);
        }, function () {
        $('.recommend04').stop(true, true).fadeOut(0);
    }
);

});


