(function($){
  $.fn.autoTextarea = function(options) {
    var defaults={
      maxHeight:null,
      minHeight:$(this).height()
    };
    var opts = $.extend({},defaults,options);
    return $(this).each(function() {
      $(this).bind("paste cut keydown keyup focus blur",function(){
        var height,style=this.style;
        this.style.height = opts.minHeight + 'px';
        if (this.scrollHeight > opts.minHeight) {
          if (opts.maxHeight && this.scrollHeight > opts.maxHeight) {
            height = opts.maxHeight;
            style.overflowY = 'scroll';
          } else {
            height = this.scrollHeight;
            style.overflowY = 'hidden';
          }
          style.height = height + 'px';
        }
      });
    });
  };
  var hight=$(window).height();
  var h=hight-149;
  var h2=hight-188;
  var h3=hight-416;
  var h4=hight-133;
  var h5=hight-213;
  var h6=hight-130;
  var h7=hight-147;
  var h8=hight-147;
  $('#zdr-jbxx').height(h7);
  $('#zdr-jbxx2').height(h8);
  $('#g-zlm-zdzdwb').height(h6);
  $('#browserHeight').height(h5);
  $('.g-zlm-wbReport').height(h4);
  $('#g-zlm-weibo').height(h3);
  $('.browserHeight').height(h);
  $("#ciyun-box").height(h2);
})(jQuery);//文本域


$(document).ready(function(){
    //模块js初始化
    commonJs.fn.init();
    $('.checkout').click(function(){
    //$('.gjxx').slideToggle();
        var txt=$(this).text();
        if(txt=="切换为高级版"){
            $('.gjxx').css('display','block');
            $(this).html("切换为精简版");
        }
        else{
            $('.gjxx').css('display','none');
            $(this).html("切换为高级版");
        }
    });

    var unPi = $(".unPi");
    unPi.each(function(index, element) {
        $(this).click(
          function()
          {
              var strSrc = $(this).find('img').attr("src");
              if(strSrc.indexOf("f")!=-1)
              {
                $(this).find('img').attr("src","../images/icon_on.png");
                $(this).next('.checkbtn').show();
              }
               else
               {
                $(this).find('img').attr("src","../images/icon_off.png");
                $(this).next('.checkbtn').hide();
                  }
          }
        );
    });//不匹配按钮
    //设置文本域高度
    $(".allTextarea").autoTextarea({
          maxHeight:126,
          minHeight:62
        });
    $(".objArea").autoTextarea({
          maxHeight:126,
          minHeight:62
        });
});

var commonJs = $(window).commonJs || {};

commonJs.fn = {
    init : function(){
        var _this = this;
        _this.dropdown();
    },

    /* 下拉菜单 */
    dropdown : function () {
        $('.dropdown,.dropup').on('click','.dropdown-menu li a', function(event) {
            var txt = $(this).text();
            if ($(this).parents('.dropdown-menu').siblings('.dropdown-toggle').find('em').hasClass('name')){
                $(this).parents('.dropdown-menu').siblings('.dropdown-toggle').find('.name').text(txt + ' ');
            }
            $(this).parents('.dropdown-menu').siblings('.dropdown-toggle')[0].childNodes[0].nodeValue = txt + ' ';
            if($(this).parents('.dropdown-menu').siblings('.border-r').children().hasClass('upcaret')){
                $(this).parents('.dropdown-menu').siblings('.border-r').find('.upcaret').addClass('caret').removeClass('upcaret');
            }
        });
    }
};


// 时间控件

    var date = '%y-%M-{%d}';
    var DatePicker = {

        //联动模式1
        dateId1: function (){
            var d02=$dp.$('d02');
            WdatePicker({
                skin:'whyGreen',
                dateFmt: 'yyyy-MM-dd',
                alwaysUseStartDate: true,
                readOnly:true,
                onpicked:function(){
                   if(!d02.value) d02.click();
                },
                minDate:'%y-%M-{%d-180}',
                maxDate: date
            });
        },
        dateId2: function (){
            var d01 = $dp.$('d01');
            WdatePicker({
                skin:'whyGreen',
                dateFmt: 'yyyy-MM-dd',
                alwaysUseStartDate: true,
                readOnly:true,
                onpicked:function(){
                     if(!d01.value){
                        date = '#F{$dp.$D(\'d02\')}';
                        d01.click();
                        return date;
                    }
                },
                minDate:'#F{$dp.$D(\'d01\')}',
                maxDate:'%y-%M-{%d}'
            });
        },
        //联动模式1
        dateId3: function (){
            var d04=$dp.$('d04');
            WdatePicker({
                skin:'whyGreen',
                dateFmt: 'yyyy-MM-dd',
                alwaysUseStartDate: true,
                readOnly:true,
                onpicked:function(){
                   if(!d04.value) d04.click();
                },
                minDate:'%y-%M-{%d-180}',
                maxDate: date
            });
        },
        dateId4: function (){
            var d03 = $dp.$('d03');
            WdatePicker({
                skin:'whyGreen',
                dateFmt: 'yyyy-MM-dd',
                alwaysUseStartDate: true,
                readOnly:true,
                onpicked:function(){
                     if(!d03.value){
                        date = '#F{$dp.$D(\'d04\')}';
                        d03.click();
                        return date;
                    }
                },
                minDate:'#F{$dp.$D(\'d03\')}',
                maxDate:'%y-%M-{%d}'
            });
        },
         //正常模式
        dateId5: function (){
            WdatePicker({
                skin:'whyGreen',
                dateFmt: 'yyyy-MM-dd',
                alwaysUseStartDate: true,
                readOnly:true,
                maxDate: date
            });
        },
        // 联动时分秒
        dateId6: function (){
            var d07=$dp.$('d07');
            WdatePicker({
                skin:'whyGreen',
                dateFmt: 'yyyy-MM-dd H:mm:ss',
                alwaysUseStartDate: true,
                readOnly:true,
                onpicked:function(){
                   if(!d07.value) d07.click();
                },
                minDate:'%y-%M-{%d-180}',
                maxDate: date
            });
        },
        dateId7: function (){
            var d06 = $dp.$('d06');
            WdatePicker({
                skin:'whyGreen',
                dateFmt: 'yyyy-MM-dd H:mm:ss',
                alwaysUseStartDate: true,
                readOnly:true,
                onpicked:function(){
                     if(!d06.value){
                        date = '#F{$dp.$D(\'d07\')}';
                        d06.click();
                        return date;
                    }
                },
                minDate:'#F{$dp.$D(\'d06\')}',
                maxDate:'%y-%M-{%d}'
            });
        },
    };




$(function(){
    lay('.test-item').each(function(){
      laydate.render({
        elem: this,
        type: 'datetime',
        range: true
      });
    });
    function conheight(){
        var winHeight = $(window).height(),
            headerHeight = $('.header').height(),
            leftbtnHeight=$('.f-btn').height(),
            tabiconHeight=$('.tab-item').height(),
            searchHeight=$('.h-search').height(),

            tabBoxHeight = $('.tab-box').height(),
            sechHeight = $('.sech-box').height(),
            keyHeight = $('.key-box').height(),
            poHeight=$('.po-infmt').height(),
            btHeight=$('.bt-line').height(),
            ztHeight=$('.zt-ft').height();
        var main = winHeight-headerHeight;
        var mainBox = main-tabBoxHeight;
        var weiboh=main-poHeight-btHeight-ztHeight-70;

        $('.content,.leftnavbar').height(main); // 整个页面高度
        // $('.main,.nav-list').height(main);
        $('.main-box').height(mainBox-40); //右边内容区带有padding的高度
        $('.main-box2').height(mainBox);               //右边内容区没有padding的高度
        $('.content1 .nav-list').height(main-51);      // 配置页左边导航高度
        $('.j-height').height(mainBox-33);  //影响力分析
        // $('.right-infl').css('max-height',main-poHeight-40); //影响力分析
        $('.tree-ul').height(main-tabiconHeight-searchHeight-leftbtnHeight-62);
        $('.left-list').height(main-tabiconHeight-searchHeight-52);

        var navtop=$('.nav-top').height();
        $('.weibo-nav').height(main-searchHeight-leftbtnHeight-navtop-78);

        $('.nav-wrap').height(main-2);

        $('.wb-list.nicescroll').css('max-height',weiboh);
        // $('.cont').height(weiboh+20);

        // $('.zddx .right-infl').css('max-height',main-30);
        // $('.zddx .wb-list').css('max-height',main-btHeight-ztHeight-50);

        var mainbox2 = main - sechHeight - keyHeight;
        var realH = main-40;
        var mainh=main-tabBoxHeight-20;

        $('.main').height(main);
        $('.list.nicescroll').css('max-height',mainh-ztHeight-20);

        // $('.zddx .list').css('max-height',mainh-ztHeight-10);

        var tableh=$('.zddx .tables').height();
        $('.zddx .nothing').css('height',mainh-tableh-ztHeight-10);

        $('.list1.nicescroll').css('max-height',main-btHeight-ztHeight-70);
        $('.weixin').css('max-height',main-btHeight-50);

        $('.Real-hot,.mulu-boxs').height(realH);
        $('.Real-hot, .xg-Article').height(realH);
        $('.time-boxs').height(realH-130);

        // $('.cbfx-box,.cbfx-box .weixin').css('max-height',main);
        // $('.cont').css({
        //     'max-height': main,
        //     'height': 'auto'
        // });
        $('.zddx .list1.nicescroll').css('max-height',mainh-ztHeight-65);

        $('.gzh-box').css('max-height',main);
        var bth=$('.bt-line').height();
        $('.gzh-box .weixin').css('max-height',mainh-bth);

        var poh=$('.po-infmt').height();
        // $('.yxlfx').css('max-height',mainh-bth-poh-32);
        // $('.yxlfx .cont').css('max-height',mainh-bth-poh-45);

        $('.js-con-box').height(main-50);
        var $conUl = $('.js-con-box-ul').height(),
            $conLi1 = $('.js-con-box-ul').children('li').eq(0).height(),
            $conLi2 = $('.js-con-box-ul').children('li').eq(1).height(),
            $conLi3 = $('.js-con-box-ul').children('li').eq(2).height(),
            $infmtH1 = $('.js-con-box-ul').find('.infmt-source-h').height();
        $('.realm-name-list-box').height($conUl-$conLi1-$conLi2-$conLi3-$infmtH1-182);
        $(window).resize(function(){
            var $conUl = $('.js-con-box-ul').height(),
                $conLi1 = $('.js-con-box-ul').children('li').eq(0).height(),
                $conLi2 = $('.js-con-box-ul').children('li').eq(1).height(),
                $conLi3 = $('.js-con-box-ul').children('li').eq(2).height(),
                $infmtH1 = $('.js-con-box-ul').find('.infmt-source-h').height();
            $('.realm-name-list-box').height($conUl-$conLi1-$conLi2-$conLi3-$infmtH1-182);
        });
        // var xbjsHeight=$('.xbjs-right-top').height();
        //     jiansuo = main-xbjsHeight-ztHeight-36;
        // $('.xbjs-right-middle.nicescroll').css('max-height',jiansuo);

        var newqjrighth=$('.newqj-right').height(),
            newqjtitleh=$('.newqj-title').height(),
            screenboxh=$('.screen-box').height(),
            newqjfooth=$('.newqj-foot').height();
        $('.newqj-right-list-box').height(newqjrighth-newqjtitleh-screenboxh-newqjfooth-48);
    }
    conheight();

    $(window).resize(function(event) {
        conheight();
        $('.more').insertAfter($('.nav>ul>li').eq(-1));
        $('.nav2>ul>li').insertBefore($('.more'));
        more();
        if(!$('.js-box').is(':hidden')){
            $('.xbjs-right-box').css('padding-left',$('.js-box').width());
        }
        var winHeight = $(window).height(),
            headerHeight = $('.header').height();
        var main = winHeight-headerHeight;
        $('.js-con-box').height(main-50);
    });

// 头部下拉菜单
hddown();
function hddown(){
    $('.header .nav>ul>li').on('click', function() {
        if($(this).find('i').hasClass('fa-caret-down')){
            $(this).find('i').addClass('fa-caret-up').removeClass('fa-caret-down');
            $(this).find('ul').slideDown('fast');
            $(this).addClass('active');
            var lisib=$(this).siblings().find('ul').parent();
            lisib.removeClass('active');
            lisib.find('ul').slideUp('fast');
            lisib.find('i').addClass('fa-caret-down').removeClass('fa-caret-up');
        }
        else if($(this).find('i').hasClass('fa-caret-up')){
            $(this).find('i').addClass('fa-caret-down').removeClass('fa-caret-up');
            $(this).find('ul').slideUp('fast');
            $(this).removeClass('active');
        }
    });
    $('.nav2>ul>li').on('click', function() {
        if($(this).find('i').hasClass('fa-caret-down')){
            $(this).find('i').addClass('fa-caret-up').removeClass('fa-caret-down');
            $(this).find('ul').slideDown('fast');
            var lisib=$(this).siblings().find('ul').parent();
            lisib.find('ul').slideUp('fast');
            lisib.find('i').addClass('fa-caret-down').removeClass('fa-caret-up');
        }
        else if($(this).find('i').hasClass('fa-caret-up')){
            $(this).find('i').addClass('fa-caret-down').removeClass('fa-caret-up');
            $(this).find('ul').slideUp('fast');
        }
    });
    $('.more').on('click',  function() {
        $(this).addClass('active');
        var lisib=$(this).siblings().find('ul').parent();
        lisib.removeClass('active');
        lisib.find('ul').slideUp('fast');
        lisib.find('i').addClass('fa-caret-down').removeClass('fa-caret-up');
        if($('.nav2').is(':hidden')){
            $('.nav2').slideDown('fast');
        }
        else{
            nav2hide();
        }
    });
    $('body').on('click', function(e) {
        if($('.nav2').is(':hidden')){
            if(!$(e.target).is('.header .nav>ul *')){
                var ulchild=$('.header .nav>ul>li').find('ul');
                if(ulchild){
                    ulchild.slideUp('fast');
                    ulchild.parent().find('i').addClass('fa-caret-down').removeClass('fa-caret-up');
                    ulchild.parent().removeClass('active');
                }
            }
        }
        else{
            if(!$(e.target).is('.nav2 *') && !$(e.target).is('.more *')){
                nav2hide();
            }
        }
    });
    function nav2hide(){
        $('.more').removeClass('active');
        $('.nav2').slideUp('fast');
        var nav2li=$('.nav2>ul>li');
        if(nav2li.find('i').hasClass('fa-caret-up')){
            nav2li.find('i').addClass('fa-caret-down').removeClass('fa-caret-up');
            nav2li.find('ul').slideUp('fast');
        }
    }
}

// 点击logo字隐藏
logochange();
function logochange(){
    $('.logo-btn').on('click',  function() {
        $(this).siblings('a').animate({width: 'toggle'},function(){
            var logow=$(this).parents('.logo').width()+50;
            $('.nav').css('overflow','hidden');
            $('.nav>ul').animate({marginLeft:logow+'px'},'fast',function(){
                more();
                $('.nav').css('overflow','');
            });
        });
    });
}
more();
function more(){
    var ulw=$('.nav>ul').width(),
        li=$('.nav>ul>li'),
        AllLiw=0;
    for (var i = 0; i < li.length; i++) {
        AllLiw+=li.eq(i).width()+17;
    }
    if(AllLiw>ulw){
        var dvalue=AllLiw-ulw,
            liw=0,
            morew=$('.more').width();
        for (var z = li.length-2; z >= 0; z--) {
            liw+=li.eq(z).width()+17;
            if(morew+liw>=dvalue){
                for (var j = z-1; j < li.length-1; j++) {
                    $('.more').insertAfter(li.eq(z-2)).show();
                    li.eq(j).appendTo($('.nav2>ul'));
                }
                break;
            }
        }
    }
    else{
        $('.more').insertAfter(li.eq(-1)).hide();
        $('.nav2>ul>li').insertBefore($('.more'));
    }
}


// 侧边条
$(".nicescroll4px").niceScroll({
    cursorcolor: "#ccc",
    cursorwidth:"4px",
    cursorborder:"none"
});
$(".yc-modal-body").niceScroll({ //宜昌推送专用
    cursorcolor: "#ccc",
    cursorwidth:"4px",
    cursorborder:"none",
    autohidemode: false
});
$(".nicescroll,.modal-body").niceScroll({
    cursorcolor: "#ccc",
    cursorwidth:"0px",
    cursorborder:"none"
});
$(".nicescroll2").niceScroll({
    cursorcolor: "#ccc",
    cursorwidth:"0",
    cursorborder:"none"
});
$(".nicescroll-big").niceScroll({
    cursorcolor: "#ccc",
    cursorwidth:"13px",
    cursorborder:"none"
});
$(".nicescroll10").niceScroll({
	cursorcolor: "#ccc",
	cursorwidth: "10px",
	cursorborder: "none"
});

// 左侧树图重置滚动条
treeclick();
function treeclick(){
    $('.tree-ul').on('click', function() {
        $(".nicescroll").getNiceScroll().resize();
    });
}

// 选择后出现图标
check();
function check(){
    $('.gjxx .table-label').on('ifChanged','input[name="check1"]',function(event){
        if ($(this).is(':checked')){
            $(this).parent().parent().next('span').find('img').css('display','inline-block');
            var cbnum=$('input[name="check1"]').length,
                checknum=$('input[name="check1"]:checked').length;
            if(cbnum===checknum){
                $('#checkall').iCheck('check');
            }
        }
        else{
            $(this).parent().parent().next('span').find('img').hide();
            $('#checkall').iCheck('uncheck');
        }
    });
}

// 全选
allcheck();
function allcheck(){
    $('.gjxx').on('ifClicked','#checkall' ,function(event) {
        if(!$(this).is(':checked')){
            $("input[name='check1']").iCheck('check');
        }
        else{
            $("input[name='check1']:checked").iCheck('uncheck');
        }
    });
}


//
$('input').iCheck({
    checkboxClass: 'icheckbox_flat-blue',
    radioClass: 'iradio_flat-blue',
    increaseArea: '20%'
});

//侧边栏
content1();
function content1(){
    $('.leftnavbar').on('mouseenter', function(event) {
        var winWidth =$(window).width();
        if(winWidth<1300){
            $(this).animate({'width':'130px'}, 500,function(){
                $(this).find('.menu-li em').show();
                 // chinaMap.resize();
            });
            $('.content').animate({'padding-left':+130+'px'}, 500,function(){
                // chinaMap.resize();
            });
        }else{


        }

        // if($('.menu-list').is(":hidden")){
        //     $('.menu-list').css('display','block');
        //     $('.nav-list').css('display','none');
        //     $('.content').animate({'padding-left':+54+'px'}, 500,function(){
        //         if($('.content').hasClass('map')){
        //             chinaMap.resize();
        //         }
        //     });
        // }else{
        //     $('.menu-list').css('display','none');
        //     $('.nav-list').css('display','block');
        //     $('.content').animate({'padding-left':+navWidth+'px'}, 500,function(){
        //         if($('.content').hasClass('map')){
        //             chinaMap.resize();
        //         }
        //     });
        // }
    });
}

$(window).resize(function(event) {
    content();
    content1();
    contenti();
});

//侧边栏
content();
function content(){
    $('.menu-box').on('mouseenter', function(event) {
        $(this).stop().animate({'width':'140px'}, 500,function(){
            $(this).find('.menu-li em').show();
            if($('.content').hasClass('map')){
             // chinaMap.resize();
            }
        });

    });
}

contenti();
function contenti(){
    $('.menu-box').on('mouseenter', function(event) {
        $(this).stop().animate({'width':'140px'}, 200,function(){
            $(this).find('.menu-li em').show();
            if($('.content1').hasClass('map')){
             chinaMap.resize();
            }
        });
    });
}

// 左侧边栏重点阵地hover事件
zzsjNav();
function zzsjNav(){
    $(".zdzd-nav").hover(function(){
        var w=$(".menu-box").width();
        if(w==40){
            setTimeout(function () {
                $(".zdzd-nav").children(".li-menu-li").show();
            }, 300);
        }else{
            $(".zdzd-nav").children(".li-menu-li").show();
        }
    },function(){
        $(".zdzd-nav").children(".li-menu-li").hide();
    });
}

contentLeave();
function contentLeave(){
    $('.menu-box').on('mouseleave', function(event) {
        var winWidth =$(window).width();
        $(this).find('.menu-li em').hide();
        $(this).stop().animate({'width':'50px'}, 500,function(){
             if($('.content').hasClass('map')){
             chinaMap.resize();
            }
        });
        $('.content').stop().animate({'padding-left':+50+'px'}, 500,function(){
            if($('.content').hasClass('map')){
             chinaMap.resize();
            }
        });
    });
}


//影响力分析 左边
leftTab();
function leftTab(){
    $('.list-down').on('click', 'li dt', function() {
        $(this).siblings('dd').stop().slideToggle();

    });
}

//鼠标经过出现提示
hoverCircle();
function hoverCircle(){
    $('.norSpan .circle-answer').on('mouseenter',function(){
            $(this).parent('.norSpan').find('.tishi').css('display','inline-block');
    });
}
leaveCircle();
function leaveCircle(){
    $('.norSpan .circle-answer').on('mouseleave',function(){
            $(this).parent('.norSpan').find('.tishi').css('display','none');
    });
}

hoverOtherCircle();
function hoverOtherCircle(){
    $('.relSpan .circle-answer').on('mouseenter',function(){
            $(this).parent('.relSpan').find('.tishi').css('display','block');
    });
}
leaveOtherCircle();
function leaveOtherCircle(){
    $('.relSpan .circle-answer').on('mouseleave',function(){
            $(this).parent('.relSpan').find('.tishi').css('display','none');
    });
}

hoverBtnCircle();
function hoverBtnCircle(){
    $('.relbtn .btn').on('mouseenter',function(){
            $(this).parent('.relbtn').find('.tishi').css('display','block');
    });
}
leaveBtnCircle();
function leaveBtnCircle(){
    $('.relbtn .btn').on('mouseleave',function(){
            $(this).parent('.relbtn').find('.tishi').css('display','none');
    });
}
//弹出框事件
// $('#leaderModal .modal-dialog .modal-footer .yes').on('click',function(){
//     text = $("input:checkbox[name='leader']:checked").map(function(index,elem) {
//             return $(elem).val();
//         }).get().join('|');
//     $('.objWords').val(text);
//     $('#leaderModal').modal('hide');
// });

$('.main-body .tc-table .checkObj').on('click',function(){
    objWords = $("input:checkbox[name='objWords']:checked").map(function(index,elem) {
            return $(elem).val();
        }).get();
    if($('.objArea').val()!=""){
        $('.objArea').val("");
    }
    else{
        $('.objArea').val(objWords);
    }

});
//搜索图标点击事件
$('.search-icon').on('click',function(){
    if($('.search-box input').css('display')=='none'){
        $('.search-box input').css('display','inline-block');
        $('.search-icon2').css('display','inline-block');
        $('.xiala').css('display','none');
        $(this).css('display','none');
    }
});
//弹出框事件
//获取时间
$('#period .days:first').on('ifClicked',function(){
    if($(this).find('span').text()==""){
        var myDate =new Date();
        var nextDate = new Date(myDate.getTime() + 7 * 24 * 3600 * 1000);
        var str="";
        str+= "（"+(myDate.getMonth()+1) + "月";
        str+=myDate.getDate() + "日-";
        str+=(nextDate.getMonth()+1)+"月"+nextDate.getDate()+"日）";
        $(this).find('span').html(str);
        $(this).next().find('span').html("");
        $('#period .days span .MyDateP').css('display','none');
    }
    else{
        $(this).find('span').html("");
        $(this).find('input').iCheck("uncheck");
    }

});

$('#period .days').eq(1).on('ifClicked',function(){
    if($(this).find('span').text()==""){
        var myDate =new Date();
        var lastDay=new Date(myDate.getFullYear(), myDate.getMonth() + 1, 0, 23, 59, 59);
        var str="";
        str+= "（"+(myDate.getMonth()+1) + "月";
        str+=1 + "日-"+(myDate.getMonth()+1)+ "月"+lastDay.getDate()+"日）";
        $(this).find('span').html(str);
        $(this).prev().find('span').html("");
        $('#period .days span .MyDateP').css('display','none');
    }
    else{
        $(this).find('span').html("");
        $(this).find('input').iCheck("uncheck");
    }
});
$('#period .days').eq(2).on('ifClicked',function(){
    if($(this).find('.MyDateP').css('display')=='none'){

        $(this).find('.MyDateP').css('display','inline-block');
        $(this).prevAll().find('span').html("");
    }
    else{
        $(this).find('.MyDateP').css('display','none');
        $(this).find('input').iCheck("uncheck");
    }
});


 //更新图标转动
 //左侧边栏


icon_anim();
function icon_anim(){

    $('.show-circle').on('click',  function(event) {

        var ele = $('#soleId');
        ele.find('.load-circle i').hide();
        ele.find('.circle').circleProgress({
            value: 0.9,
            size:26,
            fill: { color: '#ffab0a' },
            animation:{
                duration: 10000
            }
        });
        ele.find('.renew,.load-circle').show();

        $('.list-set-btn').remove();
    });
}

var updateNum = 0;
loadCircle();
function loadCircle(){
   var set =   '<li class="list-set-btn">'+
                    '<div class="operationb">'+
                        '<div class="operation">'+
                            '<label data-toggle="modal" data-target="#time"><i class="fa fa-rotate-left" class="updateBtn"></i>更新</label>'+
                            '<label><i class="fa fa-pencil"></i>编辑</label>'+
                            '<label data-toggle="modal" data-target="#del"><i class="fa fa-close"></i>删除</label>'+
                        '</div>'+
                    '</div>'+
                '</li>';
    var set2 = '<li class="list-set-btn">'+
                    '<div class="operationb">'+
                        '<div class="operation">'+
                            '<a href="有害信息-创建任务.html"><i class="fa fa-pencil"></i>编辑</a>'+
                            '<a data-toggle="modal" data-target="#del"><i class="fa fa-close"></i>删除</a>'+
                        '</div>'+
                    '</div>'+
                '</li>';
    $('.leftnvvbar2').on('click', '.load-circle', function(event) {
        $('.time-boxs li').attr('id','');
         $(this).parents('li').attr('id','soleId');

        var parentsLi = $(this).parents('li');
        if(parentsLi.next('li').is('.list-set-btn') === false){

            parentsLi.parents('.time-boxs').find('.list-set-btn').remove();
            if($(this).parents().hasClass('leftnvvbar3')){
                parentsLi.after(set2);
            }
            else{
                parentsLi.after(set);
            }
        }else{
            parentsLi.parents('.time-boxs').find('.list-set-btn').remove();
        }
        event.stopPropagation();
    });
}

// 影响力分析
icon_anim2();
function icon_anim2(){
    $('.force-btn').on('click',  function(event) {
        event.preventDefault();
        $('.circle2').circleProgress({
            value: 1,
            size:26,
            fill: { color: '#ffab0a' },
            animation:{
                duration: 10000
            }
        });
        $(this).siblings('.renew,.circle2').css('display','inline-block');
        $(this).hide();
        if($(this).text()=="影响力分析"){
            $(this).text("更新分析");
        }
        else{
            $(this).text("影响力分析");
        }
        clearTimeout(c2());
        c2();
    });
    function c2(){
        setTimeout(function(){
            $('.circle2,.renew').hide();
            $('.force-btn').show();
        },10000);
    }
}
// 微博传播分析
icon_anim3();
function icon_anim3(index){
    $('.left-list-rebtn').on('click', function(event) {
        event.preventDefault();
        var that=$(this);
        that.siblings('.circle2').circleProgress({
            value: 1,
            size:28,
            fill: { color: '#ffab0a' },
            animation:{
                duration: 10000
            }
        });
        that.siblings('.renew,.circle2').css('display','inline-block');
        that.hide();
        function c3(index){
                that.siblings('.renew,.circle2').hide();
                that.show();
        }
        function _c3(index){
            return function(){
                c3(index);
            };
        }
        clearTimeout(c33);
        var c33=setTimeout(_c3(index),10000);
    });
}


// 下拉菜单时间
time_cros();
function time_cros(){
    $('.time-con').on('click', 'ul li', function(event) {
        event.preventDefault();
        var text=$(this).find('a').text(),
            date=new Date(),
            threedate=new Date((+date)-3*24*3600*1000),
            weekdate=new Date((+date)-7*24*3600*1000),
            newdate=date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate(),
            threeday=threedate.getFullYear()+'-'+(threedate.getMonth()+1)+'-'+threedate.getDate(),
            week=weekdate.getFullYear()+'-'+(weekdate.getMonth()+1)+'-'+weekdate.getDate(),
            month=date.getFullYear()+'-'+date.getMonth()+'-'+date.getDate();
        if(text=='近3天'){
            $(this).parents('.time-con').next('.layout-data').find('input').attr('value','');
            $(this).parents('.time-con').next('.layout-data').find('#d01').attr('value',threeday);
            $(this).parents('.time-con').next('.layout-data').find('#d02').attr('value',newdate);
        }
        else if(text=='一周'){
            $(this).parents('.time-con').next('.layout-data').find('input').attr('value','');
            $(this).parents('.time-con').next('.layout-data').find('#d01').attr('value',week);
            $(this).parents('.time-con').next('.layout-data').find('#d02').attr('value',newdate);
        }
        else if(text=='一月'){
            $(this).parents('.time-con').next('.layout-data').find('input').attr('value','');
            $(this).parents('.time-con').next('.layout-data').find('#d01').attr('value',month);
            $(this).parents('.time-con').next('.layout-data').find('#d02').attr('value',newdate);
        }
        else{
            $(this).parents('.time-con').next('.layout-data').find('input').attr('value','');
        }
    });
}

// 导出报告弹窗
// exp_pic();
// function exp_pic(){
//     $('#export').on('mouseenter ', '.module li', function(ev) {
//         var y = $(this).offset().top,
//             x = $(this).offset().left,
//             index=$(this).index();
//         $('.thumbnail-pic').fadeIn().css({'top':y-62+'px','left':x-384+'px'});
//         $('.thumbnail-pic').find('span').eq(index).fadeIn().siblings('span').hide();
//     });
//     $('#export').on('mouseleave',  function(ev) {
//         $('.thumbnail-pic').hide();
//     });
// }

// 摘要
remark();
function remark(){
    $('.list1 .tleft .tables-bt,.filter-table .txt .tables-bt').on('mousemove',  function(event) {
        event.preventDefault();
        var x=event.pageX,
            remark=$(this).next('.remark'),
            rmh=remark.height(),
            bom=$('.zt-ft').offset().top,
            t=remark.offset().top;
        if(t>0){
            var remtop=t+rmh+35;
            if(remtop>=bom){
                remark.css('top',-rmh-30+'px');
            }
            $('.list1').scroll(function() {
                if(remtop>=bom){
                    remark.css('top',-rmh-30+'px');
                }
                else{
                    remark.css('top','35px');
                }
            });
        }
        remark.css('left',x-390+'px').show();
    });
    $('.list1').on('mouseleave', '.tleft .tables-bt', function(event) {
        event.preventDefault();
        $(this).next('.remark').hide();
    });
    $('.filter-table .txt .tables-bt').on('mouseleave',  function(event) {
        event.preventDefault();
        $(this).next('.remark').hide();
    });
}

// 加入对比
addcont();
function addcont(){
    $('#jstree-add').on('mouseenter','[aria-level="4"],[aria-level="4"] div,[aria-level="4"] a,[aria-level="4"] i', function(event) {
        var y=$(this).offset().top;
        $('.add-cont').css('top', y+3+'px').show();
    });
    $('.add-cont').on('mouseenter',  function(event) {
        event.preventDefault();
        $(this).show();
    });
    $('#jstree-add').on('mouseleave','[aria-level="4"]', function(event) {
        $('.add-cont').hide();
        event.stopPropagation();
    });
}

// 删除清空对比
delcont();
function delcont(){
    // 清空对比
    $('.fuchuan').on('click', '.delduibi', function(event) {
        event.preventDefault();
        $('.fuchuan').animate({right:'-136px'});
        $(this).siblings('.duibi').find('li').remove();
        $('.fuchuan .title i').html(0);
    });
    // 删除对比
    $('.fuchuan').on('click', '.delet', function(event) {
        event.preventDefault();
        $(this).parent().remove();
        $('.fuchuan .title i').html($('.fuchuan .title i').html()-1);
        if($('.fuchuan .duibi').children().length==0){
            $('.fuchuan').animate({right:'-136px'});
        }
    });
}


/* 重点对象 */
/* 侧边栏拖动 start */
$('.resize-box').on('mousedown',  function(e) {
    var nowMousedownLeft = $(this).offset().left+10;
    resizeBoxMouseMove(nowMousedownLeft);
});
$(document).on('mouseup', function(event) {
    $(document).off('mousemove');
});
function resizeBoxMouseMove(nowLeft) {
    $(document).on('mousemove', function(e) {

        var moveWidth = e.pageX - nowLeft;
        var newWidth = nowLeft + moveWidth;
        var winWidth = $(window).width();
        if(winWidth<1400){
            if(newWidth < 350 && newWidth > 260) {
                $('.zddx .nav-wrap').css('width',newWidth);
                $('.zddx .nxjk').css('paddingLeft',newWidth);
            } else if (newWidth > 350) {
                $('.zddx .nav-wrap').css('width',350);
                $('.zddx .nxjk').css('paddingLeft',350);
            } else if (newWidth < 260) {
                $('.zddx .nav-wrap').css('width',260);
                $('.zddx .nxjk').css('paddingLeft',260);
            }
        }
        else{
            if(newWidth < 400 && newWidth > 320) {
                $('.zddx .nav-wrap').css('width',newWidth);
                $('.zddx .nxjk').css('paddingLeft',newWidth);
            } else if (newWidth > 400) {
                $('.zddx .nav-wrap').css('width',400);
                $('.zddx .nxjk').css('paddingLeft',400);
            } else if (newWidth < 320) {
                $('.zddx .nav-wrap').css('width',320);
                $('.zddx .nxjk').css('paddingLeft',320);
            }
        }

        return false;
    });
}
function resizeAutoWidth(){
    var navWrap = $('.zddx .nav-wrap'),
        LeftNavwrap = navWrap.width(),
        winWidth = $(window).width();
    var percentage = (LeftNavwrap/winWidth);
    navWrap.css('width',percentage);
}
/* 侧边栏拖动 end */

// 新版检索
//左侧栏
xbjsleft();
function xbjsleft(){
    $('.left-lock').on('click',  function() {
        if($(this).find('i').hasClass('fa-lock')){
            $(this).css('color','#5ec45e');
            $(this).find('i').addClass('fa-unlock-alt').removeClass('fa-lock');
            $('.js-box').on('mouseleave',  function() {
                if($('.layui-laydate').css('display')=='block'){
                }
                else{
                    $('.js-box').hide();
                    $('.xbjs-right-box').css('padding-left',0);
                    var topWidth = $('.xbjs-right-top').width();
                    $('.topNav').css('width', topWidth - 2);
                }
            });
        }
        else{
            $(this).css('color','#8ea5c3');
            $(this).find('i').addClass('fa-lock').removeClass('fa-unlock-alt');
            $('.js-box').off('mouseleave');
        }
    });
    $('.xbjs-left .btn-blue').on('click',  function() {
        $('.js-box').show();
        $('.xbjs-right-box').css('padding-left',$('.js-box').width());
        var topWidth = $('.xbjs-right-top').width();
        $('.topNav').css('width', topWidth - 2);
    });
}

// 添加信源
addsour();
function addsour(){
    $('.subs-list').on('click', 'dd a', function() {
        if(!$(this).hasClass('on')){
            $(this).addClass('on');
        }
        else{
            $(this).removeClass('on');
        }
    });
    $('.ac-normal').on('click', 'a', function() {
        if(!$(this).hasClass('active')){
            $(this).addClass('active');
        }
        else{
            $(this).removeClass('active');
        }
    });

    $('.ac-top').on('click', 'a', function(event) {
        var $this = $(this);
        var thatIndex = $this.index();
        var acBox = $this.parent('.ac-top').siblings('.ac-box');
        acBox.find('>div').eq(thatIndex).addClass('active').siblings().removeClass('active');
        $this.addClass('active').siblings().removeClass('active');
    });
}

// 高级选项
senior();
function senior(){
    $(".opt-btn").on('click', function() {
        if($(this).siblings('.opt-con').is(":hidden")){
            $(this).html('收起高级选项<i class="fa fa-angle-double-up"></i>');
            $(this).siblings('.opt-con').slideDown("fast");
        }
        else{
            $(this).html('展开高级选项<i class="fa fa-angle-double-down"></i>');
            $(this).siblings('.opt-con').slideUp("fast");
        }
    });
}

// 国家属地
colonycheck();
function colonycheck(){
    $('.multi').on('ifChanged', '.dropdown-menu li label input', function() {
        var text=$(this).parents('label').text(),
            btn=$(this).parents('ul').siblings('button').find('.text'),
            btntext=btn.text();
        if(btntext=='请选择'){
            btntext='';
        }
        if($(this).is(':checked')){
            btn.text(btntext+text+',');
        }
        else{
            btn.text(btntext.replace(text+',',''));
            if(btn.text()==''){
                btn.text('请选择');
            }
        }
    });
}

// 元搜索开关
yssrectangle();
function yssrectangle() {
    $('.rectangle').on('click',  function() {
        if($(this).hasClass('change-i')){
            $(this).removeClass('change-i');
            $(this).find('span').text('OFF');
        }
        else{
            $(this).addClass('change-i');
            $(this).find('span').text('ON');
        }
    });
}

// 日期时间范围
lay('.time-range').each(function(){
  laydate.render({
    elem: this,
    range: '至',
    format:'yyyy-MM-dd HH:mm',
    type: 'datetime',
  });
});

lay('.time-range1').each(function(){
  laydate.render({
    elem: this,
    range: '至',
    format:'yyyy-MM-dd',
  });
});
lay('.time-rangeZlm').each(function(){
  laydate.render({
    elem: this,
    range: '至',
    format:'yyyy-MM-dd',
  });
});
lay('.time-rangeZlm2').each(function(){
  laydate.render({
    elem: this,
    range: '至',
    format:'yyyy-MM-dd',
  });
});
lay('.time-rangeZlm3').each(function(){
  laydate.render({
    elem: this,
    range: '至',
    format:'yyyy-MM-dd',
  });
});
laydate.render({
    elem: '.test1',
    istoday: true,
    issure: true
});

laydate.render({
    elem: '.test2'
});
laydate.render({
    elem: '.test3'
});
laydate.render({
    elem: '.test4'
});
laydate.render({
    elem: '.test5'
});
laydate.render({
    elem: '.test6'
});

// 日期
function getDay(month,day){
    var seperator = "-";
    var today = new Date();
    var time=today.getTime() + 1000 * 60 * 60 * 24 * day;
    today.setTime(time); // 关键时间
    today.setMonth(today.getMonth() + month);
    var tYear = today.getFullYear();
    var tMonth = today.getMonth();
    var tDate = today.getDate();
    tMonth = tMonth + 1;
    if (tMonth  == 0) { tMonth  = 12; tYear = parseInt(tYear) - 1; }
    if (tMonth < 10) tMonth = '0' + tMonth;
    if (tDate < 10) tDate = '0' + tDate;
    return tYear + seperator + tMonth + seperator + tDate;
}

// 默认日期
$('.test1').val( getDay(-1,0));
$('.test2').val( getDay(0,0));

// 切换日期
switchDay();
function switchDay(){
    $('.choice-day li').click(function() {
        if($(this).hasClass('d1')){
            $('.test1').val((getDay(0, -3)));
            $('.test2').val( getDay(0,0));
        }
        if($(this).hasClass('d2')){
            $('.test1').val((getDay(0, -7)));
            $('.test2').val( getDay(0,0));
        }
        if($(this).hasClass('d3')){
            $('.test1').val((getDay(-1, 0)));
            $('.test2').val( getDay(0,0));
        }
        if($(this).hasClass('d4')){
            $('.test1').val((getDay(-3, 0)));
            $('.test2').val( getDay(0,0));
        }
        if($(this).hasClass('d5')){
            $('.test1,.test2').val('');
        }
    });
}

// 重点监控
// 左侧列表切换
leftchange();
function leftchange() {
    $('.plist').on('click', '>li a', function() {
        $('.operate-btn').hide();
        $(this).parent('li').addClass('active').siblings('li').removeClass('active');
        $(this).find('.fa-caret-right').addClass('fa-caret-down').removeClass('fa-caret-right');
        $(this).parent('li').siblings('li').find('.fa-caret-down').addClass('fa-caret-right').removeClass('fa-caret-down');
    });
}

// 左侧查看更多操作
showmore();
function showmore(){
    $('.operate-more').on('click',  function(event) {
        event.stopPropagation();
        $(this).siblings('.operate-btn').toggle();
        $(this).parent().parent('li').siblings('li').find('.operate-btn').hide();
    });
}
// $(document).on('click', function() {
//     $('.operate-btn').hide();
// });


// 重庆档案库
// 左侧列表切换
leftchangea();
function leftchangea() {
    $('.plista').on('click', '>li a', function() {
        if($(this).parent('li').hasClass('active')){
            $('.operate-btn').hide();
            $(this).parent('li').removeClass('active');
            $(this).find('.fa-caret-down').addClass('fa-caret-right').removeClass('fa-caret-down');
            $(this).parent('li').siblings('li').find('.fa-caret-down').addClass('fa-caret-right').removeClass('fa-caret-down');
        }else{
            $('.operate-btn').hide();
            $(this).parent('li').addClass('active').siblings('li').removeClass('active');
            $(this).find('.fa-caret-right').addClass('fa-caret-down').removeClass('fa-caret-right');
            $(this).parent('li').siblings('li').find('.fa-caret-down').addClass('fa-caret-right').removeClass('fa-caret-down');
        }

    });
}

// 左侧查看更多操作
showmorea();
function showmorea(){
    $('.operate-morea').on('click',  function(event) {
        event.stopPropagation();
        $(this).siblings('.operate-btn').toggle();
        $(this).parent().parent('li').siblings('li').find('.operate-btn').hide();
    });
}



$(".plista_sj").on("click",">li",function(){

    $(this).addClass("active").siblings("li").removeClass('active');

});


});









// 头部点击用户名
userbox();
function userbox(){
    $('.user').on('click', function(event) {
        event.stopPropagation();
        $(this).find('.user-box').toggle();
    });
}
$(document).on('click', function() {
    $('.user-box').hide();
});

// 全局分析右侧操作按钮
newqjright();
function newqjright(){
    $('.newqj-right-list').on('click','.operate-btn' , function(event) {
        event.stopPropagation();
        if($(this).siblings('.operate-list').is(":hidden")){
            $(this).siblings('.operate-list').show();
            $(this).parent('.operate-box').css('z-index', '2');
            $(this).parents('li').addClass('active').siblings('li').removeClass('active');
            $(this).parents('li').siblings('li').find('.operate-list').hide();
            $(this).parents('li').siblings('li').find('.operate-box').css('z-index', '1');
        }
        else{
            $(this).siblings('.operate-list').hide();
            $(this).parent('.operate-box').css('z-index', '1');
            $(this).parents('li').removeClass('active');
        }
    });
    $(document).on('click',  function() {
        $('.operate-list').hide();
        $('.operate-box').css('z-index', '1');
        $('.newqj-right-list li').removeClass('active');
    });
}

// 下拉菜单图标移入变色
dropdownpic();
function dropdownpic(){
    $('.dropdown-menu li').hover(function() {
        if($(this).find('img').length > 0){
            $(this).find('img').attr('src',$(this).find('img').attr('src').replace(/1/ig, '2'));
        }
    }, function() {
        if($(this).find('img').length > 0){
            $(this).find('img').attr('src',$(this).find('img').attr('src').replace(/2/ig, '1'));
        }
    });
}

// 选择时分
lay('.datetime').each(function(){
    laydate.render({
        elem: this,
        type: 'time',
        range: '~',
        format:'HH:mm',
    });
});

// 下拉菜单点击边框变蓝
ddblue();
function ddblue(){
    $('.dropdown').on('click', function(event) {
        $('.dropdown').not($(this)).find('.dropdown-toggle').css('border-color', '#d3dbe3');
        if($(this).find('.dropdown-toggle').css('border')=='1px solid rgb(211, 219, 227)'){
            $(this).find('.dropdown-toggle').css('border', '1px solid #029be5');
        }
        else{
            $(this).find('.dropdown-toggle').css('border', '1px solid #d3dbe3');
        }
    });
    $(document).on('click',  function(event) {
        $('.dropdown').find('.dropdown-toggle').css('border', '1px solid #d3dbe3');
    });
}

// 中信table鼠标
$('.zx-brand-box .tables').each(function() {
    $(this).find('tr:gt(0)').hover(function() {
        $(this).addClass('hover').siblings().removeClass('hover');
    },function() {
        $(this).removeClass('hover');
    });
    $(this).find('tr').click(function() {
        $(this).addClass('on').siblings().removeClass('on');
    });
});

// 中信自适应高度
$(document).ready(function() {
    var oHieghtBox = $('.zdjk-left').height() - $('.zx-global-title').height() - 35;
    $('.currency-box').height(oHieghtBox);
    var oConHieght = $('.con-h-50').height() - $('.title-tag').height();
    $('.chart-height').height(oConHieght);
    var oScroll = $('.selected-tables').height() - $('.title-tag').height() - $('.th-title').height() - 3;
    $('.b-l-scroll').height(oScroll);
});

// 中信指数千位数加分隔符
$(function() {
    function toThousands(num) {
        var num = (num || 0).toString(), result = '';
        while (num.length > 3) {
            result = ',' + num.slice(-3) + result;
            num = num.slice(0, num.length - 3);
        }
        if (num) { result = num + result; }
        return result;
    }
    $('.separate-symbol').each(function() {
        var oSymbol = $(this).text();
        var oText = toThousands(oSymbol);
        $(this).text(oText);
    });
});

// 焦点变蓝
inputChange();
function inputChange() {
    $('.input-blue').on('focus', function(event){
        $(this).closest('.input-change').css('border','1px solid #66afe9');
    });
    $('.input-blue').on('blur', function(event){
        $(this).closest('.input-change').css('border','1px solid #d3dbe3');
    });
}

// 下拉菜单图标
dropdown();
function dropdown() {
    $(".dropdown-menu").on('click', 'li a', function(event) {
        if(!$(this).find('img').length==0){
            var imgsrc=$(this).find('img').attr('src');
            imgsrc=imgsrc.replace('2','1');
            $(this).parents('.dropdown-menu').siblings('.dropdown-toggle').find('img').attr('src', imgsrc);
        }
    });
}

// 点击弹出
clickaicon();
function clickaicon() {
    $(".icon-box.new-icon").on('click', '.a-more', function(event) {
        var oBox = $(this).siblings('.hide-box').find('.rf-hide');
        if (!oBox.hasClass('on')) {
            $(this).closest('.u-icon').find('.a-default').hide();
            oBox.stop().animate({'right':'0'},1000,function(){
                $(this).addClass('on');
            });
        } else {
            oBox.stop().animate({'right':'-425px'},1000,function(){
                $(this).removeClass('on');
                $(this).closest('.u-icon').find('.a-default').show();
            });
        }
        $(".nicescroll").getNiceScroll().resize();


    });
}

// 新时间控件
jQuery.datetimepicker.setLocale('ch');
jQuery('.datetimepicker').datetimepicker({format:'Y-m-d H:i'});
jQuery(function(){
    jQuery('.date_timepicker_start').datetimepicker({
        format:'Y-m-d H:i',
        onShow:function( ct ){
            this.setOptions({
                maxDate:jQuery('.date_timepicker_end').val()?jQuery('.date_timepicker_end').val():false
            })
        },
    });
    jQuery('.date_timepicker_end').datetimepicker({
        format:'Y-m-d H:i',
        onShow:function( ct ){
            this.setOptions({
                minDate:jQuery('.date_timepicker_start').val()?jQuery('.date_timepicker_start').val():false
            })
        },
    });
});

// 提示弹窗
$("[data-prompt]").on('click', function(event) {
    var idname=$(this).attr('data-prompt');
    $('#'+idname).fadeIn();
    setTimeout(() => {
        $('#'+idname).fadeOut();
    }, 2000);
});

$(function () {
    /*滚动条高度计算1*/
    resize();
    function resize(){
        var height = $(".zddx-right").height() - $(".breadCrumb").outerHeight(true) - $(".control-nav").outerHeight(true) - 45;
        $(".rollHeight").outerHeight(height);
    }
    /*滚动条高度计算2*/
    resize2();
    function resize2(){
        var height2 = $(".zddx-right").height() - $(".breadCrumb").outerHeight(true) - $(".zddx-right-title").outerHeight(true) - 45;
        $(".rollHeight2").outerHeight(height2);
    }
    /*滚动条高度计算3*/
    resize3();
    function resize3(){
        var height3 = $(".zddx-right").height() - $(".zddx-right-title").outerHeight(true) - 30;
        $(".rollHeight3").outerHeight(height3);
    }
    /*滚动条高度计算4*/
    resize4();
    function resize4(){
        var height4 = $(".zddx-right").height() - $(".breadCrumb").outerHeight(true) - $(".control-nav").outerHeight(true) - 30;
        $(".rollHeight4").outerHeight(height4);
    }
    $(window).resize(function(){
        resize();
        resize2();
        resize3();
        resize4();
    })
});