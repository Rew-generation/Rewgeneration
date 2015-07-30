// ロード前jsロード前jsロード前jsロード前jsロード前jsロード前jsロード前js

$(function(){
    $('.title1').css({opacity:'0'});
    setTimeout(function(){
        $('.title1').stop().animate({opacity:'1'},1000);
    },3000);
});

$(function(){
    setTimeout(
        function(){
            $('.pannelleft00').animate({
                'left':'-8%'
            },600);
    },3500);
});

$(function(){
    setTimeout(
        function(){
            $('.pannelright00').animate({
                'right':'-8%'
            },600);
    },3500);
});

$(function(){
    setTimeout(
        function(){
            $('.title')
            .animate({'top':'5%'},400)
            .animate({'top':'-50%'},1500);
    },4000);
});

$(function(){
    setTimeout(
        function(){
            $('.beforewrap').fadeOut(1500);
    },4500);
});

$(function(){
    setTimeout(
        function(){
            $('.wrap').fadeIn(1500);
    },5700);
});

// ↓↓ここからロード後js↓↓ここからロード後js↓↓ここからロード後js

$(function() {
 
 
// トップ画のアニメーションスピードをコントロール
 
var fadeinSP = 500; //フェードインスピード
var fadeoutSP = 300; //フェードアウトスピード
 
 
// トップ画の通常非表示設定
 
$('.read01').hide();
$('.read02').hide();
$('.read03').hide();
$('.read04').hide();
$('.read05').hide();
$('.recommend01').hide();
$('.recommend02').hide();
$('.recommend03').hide();
$('.recommend04').hide();

 
// 「.linkarea」hover時に画像フェードイン
 
$('.linkarea01').hover(
	function () {
		$('.read01').stop(true, true).fadeIn(fadeinSP);
		}, function () {
		$('.read01').stop(true, true).fadeOut(fadeoutSP);
	}
);

$('.linkarea02').hover(
	function () {
		$('.read02').stop(true, true).fadeIn(fadeinSP);
		}, function () {
		$('.read02').stop(true, true).fadeOut(fadeoutSP);
	}
);

$('.linkarea03').hover(
	function () {
		$('.read03').stop(true, true).fadeIn(fadeinSP);
		}, function () {
		$('.read03').stop(true, true).fadeOut(fadeoutSP);
	}
);

$('.linkarea04').hover(
	function () {
		$('.read04').stop(true, true).fadeIn(fadeinSP);
		}, function () {
		$('.read04').stop(true, true).fadeOut(fadeoutSP);
	}
);

$('.linkarea05').hover(
	function () {
		$('.read05').stop(true, true).fadeIn(fadeinSP);
		}, function () {
		$('.read05').stop(true, true).fadeOut(fadeoutSP);
	}
);

$('#aboutus').hover(
    function () {
        $('.recommend02').stop(true, true).fadeIn(0);
        }, function () {
        $('.recommend02').stop(true, true).fadeOut(0);
    }
);

$('#article').hover(
    function () {
        $('.recommend03').stop(true, true).fadeIn(0);
        }, function () {
        $('.recommend03').stop(true, true).fadeOut(0);
    }
);

$('#contact').hover(
    function () {
        $('.recommend04').stop(true, true).fadeIn(0);
        }, function () {
        $('.recommend04').stop(true, true).fadeOut(0);
    }
);

});

$(function() {
    $('.pannel01')
    .hover(
        function(){
            $('.pannelleft01').stop().animate({
                'left':'-8%',
            },'500');
        },
        function () {
            $('.pannelleft01').stop().animate({
                'left':'-25%',
            },'500');
        }
    );
});

$(function() {
     $('.pannel01')
    .hover(
        function(){
            $('.pannelright01').stop().animate({
                'right':'-8%',
            },'300');
        },
        function () {
            $('.pannelright01').stop().animate({
                'right':'-25%',
            },'300');
        }
    );
});

$(function() {
    $('.pannel02')
    .hover(
        function(){
            $('.pannelleft02').stop().animate({
                'left':'-8%',
            },'300');
        },
        function () {
            $('.pannelleft02').stop().animate({
                'left':'-25%',
            },'300');
        }
    );
});

$(function() {
     $('.pannel02')
    .hover(
        function(){
            $('.pannelright02').stop().animate({
                'right':'-8%',
            },'500');
        },
        function () {
            $('.pannelright02').stop().animate({
                'right':'-25%',
            },'500');
        }
    );
});

$(function() {
    $('.pannel03')
    .hover(
        function(){
            $('.pannelleft03').stop().animate({
                'left':'-8%',
            },'500');
        },
        function () {
            $('.pannelleft03').stop().animate({
                'left':'-25%',
            },'500');
        }
    );
});

$(function() {
     $('.pannel03')
    .hover(
        function(){
            $('.pannelright03').stop().animate({
                'right':'-8%',
            },'500');
        },
        function () {
            $('.pannelright03').stop().animate({
                'right':'-25%',
            },'500');
        }
    );
});

$(function() {
    $('.pannel04')
    .hover(
        function(){
            $('.pannelleft04').stop().animate({
                'left':'-8%',
            },'500');
        },
        function () {
            $('.pannelleft04').stop().animate({
                'left':'-25%',
            },'500');
        }
    );
});

$(function() {
     $('.pannel04')
    .hover(
        function(){
            $('.pannelright04').stop().animate({
                'right':'-8%',
            },'500');
        },
        function () {
            $('.pannelright04').stop().animate({
                'right':'-25%',
            },'500');
        }
    );
});

$(function() {
    $('.pannel05')
    .hover(
        function(){
            $('.pannelleft05').stop().animate({
                'left':'-8%',
            },'500');
        },
        function () {
            $('.pannelleft05').stop().animate({
                'left':'-25%',
            },'500');
        }
    );
});

$(function() {
     $('.pannel05')
    .hover(
        function(){
            $('.pannelright05').stop().animate({
                'right':'-8%',
            },'500');
        },
        function () {
            $('.pannelright05').stop().animate({
                'right':'-25%',
            },'500');
        }
    );
});
