$(document).ready(function(){
    //验证手机号码
function checkPhone(){
	var phone = $(this).parents(".login-panel").find('').val();
	if(phone == '') {
		alert('请输入手机号码');
		return;
	}
}
//倒计时
$("#J_getCode").click(function(){
	$('#J_getCode').hide();
	$('#J_second').html('60');
	$('#J_resetCode').show();
	var second = 60;
	var timer = null;
	timer = setInterval(function(){
		second -= 1;
		if(second >0 ){
			$('#J_second').html(second);
		}else{
			clearInterval(timer);
			$('#J_getCode').show();
			$('#J_resetCode').hide();
		}
	},1000);
});









});
