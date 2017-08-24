$(function(){
    $(".label").click(function(){
        // $(this).siblings(".greencheck").css("display","block");
        if ($(this).siblings(".greencheck").hasClass("disblock")){
            $(this).siblings(".greencheck").removeClass("disblock");
        }else {
            $(this).siblings(".greencheck").addClass("disblock");
        }
    });

// 登录

    $(".js-login").click(function(){
        $(".fix-login").hide();
        $("#js-login").show();
    })
// 注册
    $(".js-sign").click(function(){
        $(".fix-login").hide();
        $("#js-sign").show();
    })

    // header
    $('.download').hover(function(){
        $('.download img').show();
    },function(){
        $('.download img').hide();
    })

    $('.head-img-warrp').hover(function(){
        $('.head-img-warrp .head-fixed').show();
    },function(){
        $('.head-img-warrp .head-fixed').hide();
    })

    var tabs = function (tab, con) {
        tab.click(function () {
            var index = tab.index(this);
            tab.removeClass('active');
            $(this).addClass('active');
            con.removeClass('active');
            con.eq(index).addClass('active');
        })
    };
    tabs($(".login-head ul span"),$("#js-login .login-panel"));
//倒计时
    var countdown=60;
    $(".js-send").click(function(){
    	$(this).hide();
    	$(".js-num").show();
    	time();
    })
    function time(){
    	var f = setInterval(function(){
    	if (countdown !== 0) {
    		countdown--;
    		$(".js-num").text(countdown + "s");
    		}
    		else {
    			$(".js-send").show();
    			$(".js-num").hide();
    			clearInterval(f);
    			$(".js-num").text(60 + "s");
    			countdown = 60;
    			return;
    		}
    	},1000);
    }
})
