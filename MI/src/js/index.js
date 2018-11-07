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
// 		var len=7;
// 		for(var i=1;i<=len;i++){
// 			var $lis=$("#main ul li");
			$('.li1').mouseenter(function(){
				$('.h1').animate({'height':'80px'},1000)
			});
			$('.li1').mouseleave(function(){
				$('.h1').animate({'height':'0'},1000)
			})
			$('.li2').mouseenter(function(){
				$('.h2').animate({'height':'80px'},1000)
			});
			$('.li2').mouseleave(function(){
				$('.h2').animate({'height':'0'},1000)
			})
			$('.li3').mouseenter(function(){
				$('.h3').animate({'height':'80px'},1000)
			});
			$('.li3').mouseleave(function(){
				$('.h3').animate({'height':'0'},1000)
			})
			$('.li4').mouseenter(function(){
				$('.h4').animate({'height':'80px'},1000)
			});
			$('.li4').mouseleave(function(){
				$('.h4').animate({'height':'0'},1000)
			})
			$('.li5').mouseenter(function(){
				$('.h5').animate({'height':'80px'},1000)
			});
			$('.li5').mouseleave(function(){
				$('.h5').animate({'height':'0'},1000)
			})
			$('.li6').mouseenter(function(){
				$('.h6').animate({'height':'80px'},1000)
			});
			$('.li6').mouseleave(function(){
				$('.h6').animate({'height':'0'},1000)
			})
			$('.li7').mouseenter(function(){
				$('.h7').animate({'height':'80px'},1000)
			});
			$('.li7').mouseleave(function(){
				$('.h7').animate({'height':'0'},1000)
			})
			
			
		// }
		
	});
});
	