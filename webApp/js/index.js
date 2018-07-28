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
		$('.all_nav').animate({width:'0'});
		$('.all_title .layui-icon').removeClass('layui-icon-spread-left').addClass('layui-icon-shrink-right');
	});
	// 隐藏
	$(document).on('click','.header .layui-icon.layui-icon-shrink-right',function(){
		$('.container-header .nav').animate({width:'0'});
		$(this).removeClass('layui-icon-shrink-right').addClass('layui-icon-spread-left');
		$('.container-wrap').removeClass('overflow');
		$('.container-main').animate({marginLeft:'0'});
	});
	
	$('.container-header .nav').bind('touchstart',function(e){
		// console.log(0);
		$('.container-header .nav').animate({width:'0'});
		$('.header .layui-icon').removeClass('layui-icon-shrink-right').addClass('layui-icon-spread-left');
		$('.container-wrap').removeClass('overflow');
		$('.container-main').animate({marginLeft:'0'});
	});
	$('.container-header .nav .nav_ul').bind('touchstart',function(e){
		// console.log(1);
		 e.stopPropagation();
	});

	//顶部轮播图
	var mySwiper = new Swiper ('.banner', {
		autoplay: 3000,
	    loop: true,
	    // 分页器
	    pagination: '.swiper-pagination',

	});

	// 案例弹框的显示
	$(document).on('click','.anli .anli_ul li,.case .case_ul li',function(){
		$('.caseModal').show();
		$('body').addClass('overflow');
	});
	$(document).on('click','.caseModal .close .layui-icon-close',function(){
		$('.caseModal').hide();
		$('body').removeClass('overflow');
	});

	// 案例弹框
	var mySwiper = new Swiper ('.anli_lunbo', {
	    prevButton:'.swiper-button-prev',
		nextButton:'.swiper-button-next',
		observer: true,//修改swiper自己或子元素时，自动初始化swiper
        observeParents: true,//修改swiper的父元素时，自动初始化swiper
	});
	var mySwiper2 = new Swiper ('.case_lunbo', {
	    prevButton:'.swiper-button-prev',
		nextButton:'.swiper-button-next',
		observer: true,//修改swiper自己或子元素时，自动初始化swiper
        observeParents: true,//修改swiper的父元素时，自动初始化swiper
	});

	// 分页
	layui.use('laypage', function(){
	  var laypage = layui.laypage;
	  //执行一个laypage实例
	  laypage.render({
	    elem: 'casePage' //注意，这里的 test1 是 ID，不用加 # 号
	    ,count: 40 //数据总数，从服务端得到
	  });
	});

	//右边导航
	// 显示
	$(document).on('click','.all_title .layui-icon.layui-icon-shrink-right',function(){
		$('.all_nav').animate({width:'100%'});
		$(this).removeClass('layui-icon-shrink-right').addClass('layui-icon-spread-left');
		$('.container-wrap').addClass('overflow');
		$('.container-main').animate({marginLeft:'-60%'});
	});

	// 隐藏
	function allNavShow(){
		$('.all_nav').animate({width:'0'});
		$('.all_title .layui-icon').removeClass('layui-icon-spread-left').addClass('layui-icon-shrink-right');
		$('.container-wrap').removeClass('overflow');
		$('.container-main').animate({marginLeft:'0'});
	}
	
	$('.all_nav').bind('touchstart',function(e){
		// console.log(0);
		allNavShow();
	});
	$('.all_ul').bind('touchstart',function(e){
		// console.log(1);
		 e.stopPropagation();
	});
	// 换样式
	$(document).on('click','.all_ul li a',function(){
		$('.all_ul li a').removeClass('text_di');
		$(this).addClass('text_di');
		allNavShow();
	})

})