/*
@Name:广州博盛;
@Time:2018-07-27;
@Author：;
*/

$(function () {
	//处理移动端点击延迟
	FastClick.attach(document.body);

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

	// 导航显示
	$(document).on('click','.header .layui-icon.layui-icon-spread-left',function(){
		$('.container-header .nav').animate({width:'100%'});
		$(this).removeClass('layui-icon-spread-left').addClass('layui-icon-shrink-right');
		$('.container-wrap').addClass('overflow');
		$('.container-main').animate({marginLeft:'60%'});
	});
	// 隐藏
	$(document).on('click','.header .layui-icon.layui-icon-shrink-right',function(){
		$('.container-header .nav').animate({width:'0'});
		$(this).removeClass('layui-icon-shrink-right').addClass('layui-icon-spread-left');
		$('.container-wrap').removeClass('overflow');
		$('.container-main').animate({marginLeft:'0'});
	});
	$(document).on('click','.container-header .nav',function(){
		$(this).animate({width:'0'});
		$('.header .layui-icon').removeClass('layui-icon-shrink-right').addClass('layui-icon-spread-left');
		$('.container-wrap').removeClass('overflow');
		$('.container-main').animate({marginLeft:'0'});
	});

	//顶部轮播图
	var mySwiper = new Swiper ('.swiper-container', {
		autoplay: 3000,
	    loop: true,
	    // 分页器
	    pagination: '.swiper-pagination',

	});
})