$(function(){
    $(".green-top").hover(function(){
        
    },function(){

    });

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
    tabs($(".login-head ul span"),$(".login-panel"));
})
