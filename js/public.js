$(function(){
    $(".nav-center ul li").click(function(){
        $(this).addClass("bottom-line").siblings().removeClass("bottom-line");
    });
    $(".firstary-font").click(function(){
        $(this).children(".secondary-menu").toggleClass("displaynone");
        $(this).siblings(".firstary-font").children(".secondary-menu").addClass("displaynone")
    });
    $(".species-topic .tab-item").click(function(){
        var _index = $(this).index(".tab-item");
        // console.log(_index);
        $(this).parents(".tab").children(".select-tab").children(".tab-cont").eq(_index).css("display","block").siblings().css("display","none");
    });
    $(".species-topic .tab-item").eq(0).click(function(){
        $(this).siblings(".blue-line").animate({"left":"20px"});
        // $(tabcont:not(eq(_index))).css("display","none");
    });
    $(".species-topic .tab-item").eq(1).click(function(){
        $(this).siblings(".blue-line").animate({"left":"212px"});
    });
    $(".topic-left ul li").click(function(){
        // alert($(this).attr("data-src"));
        var _src = $(this).attr("data-src");
        $(this).parents("body").find("#nav-left").attr("src",_src);
    });
    $("#left-tabsrc").click(function(){
        var _src = $(this).attr("data-src");
        $("#right-cont",window.top.document).attr("src",_src);
    });
})
