//配置路径
require.config({
	'paths':{
		'jquery' : "jquery-1.11.3",
		'cookie' : 'jquery.cookie'
		//如果需要带入其他自定义的js也要在这里写上路径
	
 			
		
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
})