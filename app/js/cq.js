$(function(){
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover();
    $('[data-toggle="popover"]').on('mouseenter', function(event) {
        $(this).popover('show');
    }).on('mouseleave', function(event) {
        $(this).popover('hide');
    });


    // 时间控件
    lay('.cq-date').each(function(){
      laydate.render({
        elem: this,
        range: '至',
        format:'yyyy-MM-dd'
      });
    });

    lay('.cq-date-time').each(function(){
      laydate.render({
        elem: this,
        type: 'datetime'
      });
    });



    // 时间选择联动
    dateMoment();
    function dateMoment(){
        var nowDate = moment().format('YYYY-MM-DD'), //当天日期
            threeDate = moment().subtract(2, 'days').format('YYYY-MM-DD'), //近三天
            weekDate = moment().subtract(6, 'days').format('YYYY-MM-DD'), //一周
            monthDate = moment().subtract(30, 'days').format('YYYY-MM-DD'); //一月

        $('.cq-date').val((threeDate +' 至 '+ nowDate));
        $('.j-cq-date').on('click','.dropdown-menu li a', function(event) {

            var dataTime = $(this).attr('data-time')-1;
            var front = moment().subtract(dataTime, 'days').format('YYYY-MM-DD');
            var targetE = $(this).parents('.j-cq-date').next('.cq-date');

            if(dataTime > 0) {
                targetE.val(front +' 至 '+ nowDate);
            } else if(dataTime === -1) {
                targetE.val('');
            } else if(dataTime === -2) {
                targetE.val('');
            }

        });
    }

    // 头像震动
        // function state1(){
        //      $(".rotate").removeClass("r2");
        //      $(".rotate").addClass("r1");
        //      setTimeout(state2,1000);
        //  }
        // function state2(){
        //      $(".rotate").removeClass("r1");
        //      $(".rotate").addClass("r2");
        //      setTimeout(state1,1000);
        // }
        // state1();


    // 删除提示模态框
    $('.cq-td-btn-close').on('click', function(event) {
        $('#delete').modal('show');
    });

    //消息提示
    $('.cq-header-tips, .tips-num').click(function(event){
        event.stopPropagation();
        $(this).parents('.cq-header-tips-box').find('.tips-msg-box').toggle();
    });
    $(document).on('click', function(e) {
        if ($(e.target).closest('.tips-msg-box').length != 0 ){
            return
        } else{
            $('.tips-msg-box').hide();
        }
    });
    $('.tips-t-l').on('click','a',function(){
        if($(this).hasClass('tips-t-l-1')){
            $(this).addClass('active').siblings().removeClass('active');
            $('.tips-content1').show().siblings().hide();
        } else if($(this).hasClass('tips-t-l-2')){
            $(this).addClass('active').siblings().removeClass('active');
            $('.tips-content2').show().siblings().hide();
        }
    });
    //选择框删除
    $('.chooseBox-unit,.chooseBox-user').on('click','.delete',function (){
        $(this).parent().remove()
    })
});
