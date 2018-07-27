/*
@Name:广州博盛;
@Time:2018-07-27;
@Author：;
*/

$(function () {
	// 回到顶部
	$(window).scroll(function(){
		if($(window).scrollTop()>=100){
			$('.layui-fixbar li').fadeIn(300);
		}else{
			$('.layui-fixbar li').fadeOut(300);
		}
	});
	$(document).on('click','.layui-fixbar li',function(){
		$('html,body').animate({scrollTop:0},500);
	});
})