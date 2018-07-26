
$(function(){
	//顶部轮播图
	var mySwiper = new Swiper ('.swiper-container', {
		autoplay: 3000,
	    loop: true,
	    // 分页器
	    pagination: '.swiper-pagination',

	});
	//search显示
	$(document).on('mouseover','.main .one .fuwu li a',function(){
		$(this).children('.img_search').show();	
	});
	$(document).on('mouseout ','.main .one .fuwu li a',function(){
		$(this).children('.img_search').hide();	
	});

	// 案例轮播图
	layui.use('carousel', function(){
	  	var carousel = layui.carousel;
	  	//建造实例
	  	carousel.render({
	    	elem: '#anli_01'
	    	,width: '610px' //设置容器宽度
	    	,height:'300px'
	    	,autoplay:false 
	    	,arrow: 'always' //始终显示箭头
	    	,anim: 'default' //切换动画方式
	    	,indicator:'none'
	  	});
	});
	layui.use('carousel', function(){
	  	var carousel = layui.carousel;
	  	//建造实例
	  	carousel.render({
	    	elem: '#anli_02'
	    	,width: '100%' //设置容器宽度
	    	,height:'300px' 
	    	,arrow: 'always' //始终显示箭头
	    	,anim: 'default' //切换动画方式
	    	,indicator:'none'
	  	});
	});

	// 放大图片
	$(document).on('mouseover','#anli_01 img,#anli_02 img,.case_ul li img',function(){
		$(this).addClass('scale');
	});
	$(document).on('mouseout','#anli_01 img,#anli_02 img,.case_ul li img',function(){
		$(this).removeClass('scale');
	});

	// 放大图片弹框显示
	$(document).on('click','.case_ul img',function(){
		$('.caseModal').show();
		$('body').addClass('overflow');
	});
	// 关闭弹框
	$(document).on('click','.caseModal',function(){
		$('.caseModal').hide();
		$('body').removeClass('overflow');
	});

	// 改变样式
	$(document).on('click','.all_left .all_ul li span',function(){
		$(this).addClass('text_di').parent().siblings().children().removeClass('text_di');
		//改变文字
		var text=$(this).text();
		$('.all_title .pull-right span').text(text);
		$('.all_title .pull-left').text(text);
	});

	// 提交留言
	$(document).on('click','.form_btn button',function(){
		if($('.message_form .name').val()==""){
			// console.log("00")
			layer.msg('请输入称呼!');
		}else if($('.message_form .phone').val()==""){
			layer.msg('请输入电话号码!');
		}else if($('.message_form textarea').val()==""){
			layer.msg('请输入写留言!');
		}
	});
})