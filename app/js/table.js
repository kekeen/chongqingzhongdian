$(window).on('load resize',function(){

	$(".z-tree").niceScroll({
		cursorcolor: "#a3c2cb",
		cursorwidth:"0",
		cursorborder:"none",
	});
	$('input').iCheck({
		checkboxClass: 'icheckbox_flat-blue',
		radioClass: 'iradio_flat-blue',
		increaseArea: '20%'
	});

    var leftNavWidth = $('.leftnvvbar2').width();
    $('.leftnvvbar2').css('left',-leftNavWidth+'px');
});

$(document).ready(function(e) {
 //    $(".ic_img").on('click',function(){
	// 	var strSrc = $(this).attr("src");
	// 	if(strSrc.indexOf("f")!=-1)
	// 	{
 //            console.log(1);
 //            $(this).attr("src","../images/icon_on.png");
 //            $(this).parent().next('.checkbtn').show();
	// 	}
	// 	else
	// 	{
 //            console.log(2);
	// 		$(this).attr("src","../images/icon_off.png");
 //            $(this).parent().next('.checkbtn').hide();
	// 	}
	// });
});
$('.checkout').click(function(){
    $('.gjxx').slideToggle(400);
});

$('.sech-gj').click(function(){
	$('.senior').slideDown();
});
$('.sen-go a').click(function(){
	$('.senior').slideUp();
});

$('.real-btn').on('click',function() {
    $('.Real-hot').stop().animate({'right':0},300);
});

// $('.Real-hot').on('mouseleave',function() {
//     $(this).stop().animate({'right':'-300px'},300);
// });
$('.time-list-tit').click(function(){
	$(this).siblings(".er-list").slideToggle();
});

$('.leftbar-go').on('click',function() {
    var selfWidth = $(this).width();
    var bgImage = $(this).css('backgroundImage');
    var thatBgImage = bgImage.replace('right','left');
    $('.leftnvvbar2').stop().animate({'left':0},300);
	$('.pads').css("padding-left",selfWidth);
    $(this).css('backgroundImage',thatBgImage);
});

$('.newzt-left-v4 .btn-trapezoid').on('click',function() {
    var selfWidth = $(this).width();
    $('.newzt-left-v4').stop().animate({'left':0},300);
    $('.btn-trapezoid.hide-bar').hide();
});


upcaret();
function upcaret(){
    $('.border-r').on('click',function(){
        if($(this).children().hasClass('upcaret')){
            $(this).find('.upcaret').addClass('caret').removeClass('upcaret');
        }
        else{
            $(this).find('.caret').addClass('upcaret').removeClass('caret');
        }

    });
}

hoverLi();
function hoverLi(){
    $('.innerLi').on('mouseenter',function(){
        $(this).find('.innerBox').css("display","block");
        $(this).find('.exband').css("display","block");
    });
}
leaveLi();
function leaveLi(){
    $('.innerLi').on('mouseleave',function(){
        $(this).find('.innerBox').css("display","none");
        $(this).find('.exband').css("display","none");
    });
}



$('.leftnvvbar2').on('mouseleave',function() {
    var selfWidth = $(this).width();
    var leftbarGo = $(this).find('.leftbar-go'),
    bgImage = leftbarGo.css('backgroundImage');
    var thatBgImage = bgImage.replace('left','right');
    $(this).stop().animate({'left':-selfWidth+'px'},300);
    $('.pads').css("padding-left",0);
    leftbarGo.css('backgroundImage',thatBgImage);
});

$('.newzt-left-v4').on('mouseleave',function() {
    var selfWidth = $(this).width();
    $(this).stop().animate({'left':-selfWidth+'px'},300);
    $(this).find('.btn-trapezoid.hide-bar').show();
});



catalogue();
function catalogue(){
   $('.anli-navbar').on('click', '.catalogue', function() {
        $(this).parents('.anli-navbar').animate({'right':0}, 300);
    });

   $('.anli-navbar').on('mouseleave',function() {
        $(this).stop().animate({'right':'-160px'},300);
    });
}


//  案例演变中间线条高度
anliLine();
function anliLine(){
    var liLenght = $('.anliyanbian>li').length;
    $('.anlibox').append('<i class="vertical-line"></i>');
    $('.vertical-line').css('height',138*liLenght-80);
}

$(".plus-add").click(function(){
	$(".ly-tc").show();
});
$(".ly-tc .btn").click(function(){
	$(".ly-tc").hide();
});
$(".mulu-list .mulu-list-tit").click(function(){
    var Parent = $(this).parent();

	if(Parent.is('.active')){
        Parent.removeClass("active");
    }else{
        Parent.addClass("active").siblings().removeClass("active");
    }
});
$(".fa-filter").click(function(){
	$(".ml-js").slideToggle();
});



/* 左边导航检索  */


navser();
function navser(){
    $('.leftnvvbar2').on('click', '.navser', function(event) {
       var layutInput = $(this).siblings('.layut-input');
       if(layutInput.is(':hidden')){
            layutInput.show();
       }else{
            layutInput.hide();
       }
       event.stopPropagation();
    });
}

/*表格高度*/
tableh();
function tableh(){
    var winh=$(window).height();
    $('.table-n').css('height',winh-300+'px');
}
