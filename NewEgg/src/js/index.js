//配置路径
require.config({
	'paths':{
		'jquery' : "jquery-1.11.3",
		'cookie' : 'jquery.cookie'
		//如果需要带入其他自定义的js也要在这里写上路径
// 		'jquerymin':'jquery.min.js'
// 			
		
	}
})

//引入依赖


//把引入的js在这里写上参数 写上别名
require(['jquery','cookie',],function($,cookie){
	//操作页面的代码
	$(function(){
		$.cookie('user','njj');
		//在这里调用
	})
	
	//导航栏
	$(function(){
	
		//商品分类
	
		$('#nav-l .item').hover(function(){
	
			$(this).addClass('active').find('s').hide();
	
			$(this).find('.hide').show();
	
		},function(){
	
			$(this).removeClass('active').find('s').show();
	
			$(this).find('.hide').hide();
	
		});
	
	});
	
	//banner轮播图1
	$(function(){
		var index = 0;
		var Numn = "";
		//获取图片的个数
		$(".box").width($(".box li").width() * $(".box li").length);
		//获取图片的个数
		var imgNum = $(".box").find('img').length;
		//获取每张图片的宽度
		var imgWidth = $(".box").find('img').width();
		//计算所有图片的宽度
		var AllImgWidth = imgNum * imgWidth;
		//        alert(AllImgWidth);
		function selectimg(index) {
			$(".box li").eq(index).addClass("active").siblings('li').removeClass('active');
			$(".Dots a").eq(index).addClass("active").siblings('a').removeClass('active');
		}
		//点击prev的按钮
		
		
		//鼠标放上去暂停轮播
		$('#slide1').hover(function() {
			clearInterval(p);
		}, function() {
			pic();
		});
		//自动轮播
		// 1、轮播切换图片函数，不断的改变index的值
		// 2、然后乘以宽度（总宽度）
		function pic() {
			p = setInterval(function() {
				index++;
				if (index >= imgNum) {
					index = 0;
				}
				selectimg(index);
			}, 4000);
		}
		//获取按钮的个数；向页面添加按钮
		for (var icon = 0; icon < imgNum; icon++) {
			Numn += "<a href='javascript:;'></a>";
			
		}
		$('.Dots').html(Numn);
		
		
		$('.Dots a').eq(0).addClass('active');
		//点击.Dots a切换到对应的图
		$(".Dots a").each(function(index) {
			$(this).mouseover(function() {
				$(".box li").eq(index).addClass("active").siblings('li').removeClass('active');
				$(".Dots a").eq(index).addClass("active").siblings("a").removeClass("active");
			})
		});
		pic();		
	});
	
	
	//倒计时轮播
	$(function(){
		var index = 0;
		var Numn = "";
		//获取图片的个数
		$("#slide2 .box2").width($(".box2 li").width() * $(".box2 li").length);
		//获取图片的个数
		var imgNum = $(".box2").find('li').length;
		//获取每张图片的宽度
		var imgWidth = $(".box2").find('li').width();
		//计算所有图片的宽度
		var AllImgWidth = imgNum * imgWidth;
		//        alert(AllImgWidth);
		function selectimg(index) {
			$(".box2 li").eq(index).addClass("active").siblings('li').removeClass('active');
			// $(".yuan2 a").eq(index).addClass("active").siblings('a').removeClass('active');
		}
		//点击prev的按钮
	$(".but .prev").click(function() {
		index -= 1;
		if (index < 0) {
			index = imgNum - 1;
		}
		selectimg(index);
	});
//点击next按钮
	$(".but .next").click(function() {
		index += 1;
		if (index > 3) {
			index = 0;
		}
		selectimg(index);
	});
		
		//鼠标放上去暂停轮播
		$('#slide2').hover(function() {
			clearInterval(p);
		}, function() {
			pic();
		});
		//自动轮播
		// 1、轮播切换图片函数，不断的改变index的值
		// 2、然后乘以宽度（总宽度）
		
		function pic() {
			p = setInterval(function() {
				index++;
				if (index >= imgNum) {
					index = 0;
				}
				
				 selectimg(index);
			}, 3000);
		}
				
	});
	
	
	
	//换一换	
	
		
		
	
	//小轮播2张图片
	$(function(){
		var index = 0;
		var Numn = "";
		//获取图片的个数
		$("#slide3 .box3").width($("#slide3 .box3 li").width() * $("#slide3 .box3 li").length);
		//获取图片的个数
		var imgNum = $("#slide3 .box3").find('img').length;
		//获取每张图片的宽度
		var imgWidth = $("#slide3 .box3").find('img').width();
		//计算所有图片的宽度
		var AllImgWidth = imgNum * imgWidth;
		//        alert(AllImgWidth);
		function selectimg(index) {
			$("#slide3 .box3 li").eq(index).addClass("active").siblings('li').removeClass('active');
			$("#slide3 .yuan3 a").eq(index).addClass("active").siblings('a').removeClass('active');
		}	
		//鼠标放上去暂停轮播
		$('#slide3').hover(function() {
			clearInterval(p);
		}, function() {
			pic();
		});
		//自动轮播
		// 1、轮播切换图片函数，不断的改变index的值
		// 2、然后乘以宽度（总宽度）
		function pic() {
			p = setInterval(function() {
				index++;
				if (index >= imgNum) {
					index = 0;
				}
				selectimg(index);
			}, 4000);
		}
		//获取按钮的个数；向页面添加按钮
		for (var icon = 0; icon < imgNum; icon++) {
			Numn += "<a href='javascript:;'></a>";
			
		}
		$('#slide3 .yuan3').html(Numn);
		
		
		$('#slide3 .yuan3 a').eq(0).addClass('active');
		//点击.yuan  a切换到对应的图
		$(".yuan3 a").each(function(index) {
			$(this).mouseover(function() {
				$(".box3 li").eq(index).addClass("active").siblings('li').removeClass('active');
				$(".yuan3 a").eq(index).addClass("active").siblings("a").removeClass("active");
			})
		});
		pic();
		
		
	});	
	
	
	//大banner图的小图版式
	$(function(){
			var index = 0;
			var Numn = "";
			//获取图片的个数
			$("#slide5 .box5").width($("#slide5 .box5 li").width() * $("#slide5 .box5 li").length);
			//获取图片的个数
			var imgNum = $("#slide5 .box5").find('img').length;
			//获取每张图片的宽度
			var imgWidth = $("#slide5 .box5").find('img').width();
			//计算所有图片的宽度
			var AllImgWidth = imgNum * imgWidth;
			//        alert(AllImgWidth);
			function selectimg(index) {
				$("#slide5 .box5 li").eq(index).addClass("active").siblings('li').removeClass('active');
				$("#slide5 .yuan5 a").eq(index).addClass("active").siblings('a').removeClass('active');
			}
			
			
			
			//鼠标放上去暂停轮播
			$('#slide5').hover(function() {
				clearInterval(p);
			}, function() {
				pic();
			});
			//自动轮播
			// 1、轮播切换图片函数，不断的改变index的值
			// 2、然后乘以宽度（总宽度）
			function pic() {
				p = setInterval(function() {
					index++;
					if (index >= imgNum) {
						index = 0;
					}
					selectimg(index);
				}, 4000);
			}
	//获取按钮的个数；向页面添加按钮
	for (var icon = 0; icon < imgNum; icon++) {
 				Numn += "<a href='javascript:;'></a>";
				 			} 			$('#slide5 .yuan5').html(Numn);		
			
		$('#slide5 .yuan5 a').eq(0).addClass('active');
 			//点击.yuan  a切换到对应的图
		$(".yuan5 a").each(function(index) {
 				$(this).mouseover(function() {
 					$(".box5 li").eq(index).addClass("active").siblings('li').removeClass('active');
 					$(".yuan5 a").eq(index).addClass("active").siblings("a").removeClass("active");
				})
 			});
			pic();
			
			
		});
		
		//手风琴
	$(function() {
		$(".pic ul li").mouseover(function() {
			$(this).stop(true).animate({
				width: "800px"
			}, 500).siblings().stop(true).animate({
				width: "130px"
			}, 500);
		});
	});
	
	
	//tab切换
	$(function(){
		var $uli = $("#tab ul li");
		var $oli = $("#tab ol li");
		$oli.addClass('hide');
		$oli.eq(0).removeClass().addClass('show');
		$uli.addClass('normal');
		$uli.eq(0).removeClass().addClass('hover')
		
		$uli.mouseover(function(){
			var $index = $(this).index();
			$(this).removeClass().addClass('hover').siblings().removeClass().addClass('normal');
			$oli.eq($index).removeClass().addClass('show').siblings().removeClass().addClass('hide')
		});
		
	})
	
	
	
	//小轮播图 第六个
	$(function(){
			var index = 0;
			var Numn = "";
			//获取图片的个数
			$("#slide6 .box6").width($("#slide6 .box6 li").width() * $("#slide6 .box6 li").length);
			//获取图片的个数
			var imgNum = $("#slide6 .box6").find('img').length;
			//获取每张图片的宽度
			var imgWidth = $("#slide6 .box6").find('img').width();
			//计算所有图片的宽度
			var AllImgWidth = imgNum * imgWidth;
			//        alert(AllImgWidth);
			function selectimg(index) {
				$("#slide6 .box6 li").eq(index).addClass("active").siblings('li').removeClass('active');
				$("#slide6 .yuan6 a").eq(index).addClass("active").siblings('a').removeClass('active');
			}
			
			
			
			//鼠标放上去暂停轮播
			$('#slide6').hover(function() {
				clearInterval(p);
			}, function() {
				pic();
			});
			//自动轮播
			// 1、轮播切换图片函数，不断的改变index的值
			// 2、然后乘以宽度（总宽度）
			function pic() {
				p = setInterval(function() {
					index++;
					if (index >= imgNum) {
						index = 0;
					}
					selectimg(index);
				}, 4000);
			}
	//获取按钮的个数；向页面添加按钮
	for (var icon = 0; icon < imgNum; icon++) {
				Numn += "<a href='javascript:;'></a>";
							} 			$('#slide6 .yuan6').html(Numn);		
			
		$('#slide6 .yuan6 a').eq(0).addClass('active');
			//点击.yuan  a切换到对应的图
		$(".yuan6 a").each(function(index) {
				$(this).mouseover(function() {
					$(".box6 li").eq(index).addClass("active").siblings('li').removeClass('active');
					$(".yuan6 a").eq(index).addClass("active").siblings("a").removeClass("active");
				})
			});
			pic();
			
			
		});
		
	
	
	//商品轮播图  海淘等
	$(function(){
		var index = 0;
		var Numn = "";
		//获取图片的个数
		$("#haitao .big .box7").width($(" #haitao .big .box7 li").width() * $(".big .box7 li").length);
		//获取图片的个数
		var imgNum = $("#haitao .big .box7").find('li').length;
		//获取每张图片的宽度
		var imgWidth = $(".big .box7").find('li').width();
		//计算所有图片的宽度
		var AllImgWidth = imgNum * imgWidth;
		//        alert(AllImgWidth);
		function selectimg(index) {
			$(".big .box7 li").eq(index).addClass("active").siblings('li').removeClass('active');
			$(".big .yuan7 a").eq(index).addClass("active").siblings('a').removeClass('active');
		}
		//点击prev的按钮
		
		
		//鼠标放上去暂停轮播
		$('.big').hover(function() {
			clearInterval(p);
		}, function() {
			pic();
		});
		//自动轮播
		// 1、轮播切换图片函数，不断的改变index的值
		// 2、然后乘以宽度（总宽度）
		function pic() {
			p = setInterval(function() {
				index++;
				if (index >= imgNum) {
					index = 0;
				}
				selectimg(index);
			}, 4000);
		}
		//获取按钮的个数；向页面添加按钮
		for (var icon = 0; icon < imgNum; icon++) {
			Numn += "<a href='javascript:;'></a>";
			
		}
		$('.yuan7').html(Numn);
		
		
		$('.yuan7 a').eq(0).addClass('active');
		//点击.Dots a切换到对应的图
		$(".yuan7 a").each(function(index) {
			$(this).mouseover(function() {
				$(".big .box7 li").eq(index).addClass("active").siblings('li').removeClass('active');
				$(".big .yuan7 a").eq(index).addClass("active").siblings("a").removeClass("active");
			})
		});
		pic();		
	});
	
	
	
	
	$(function(){
		var $uli = $("#tab2 ul li");
		var $oli = $("#tab2 ol li");
		$oli.addClass('hide');
		$oli.eq(0).removeClass().addClass('show');
		$uli.addClass('normal');
		$uli.eq(0).removeClass().addClass('hover')
		
		$uli.mouseover(function(){
			var $index = $(this).index();
			$(this).removeClass().addClass('hover').siblings().removeClass().addClass('normal');
			$oli.eq($index).removeClass().addClass('show').siblings().removeClass().addClass('hide')
		});
		
	})
	

})