define(function(){
	return {
		drag : function(id){
			var $ele = $('#' + id);
			$ele.mousedown(function(evt){
				var disX = evt.pageX - $(this).offset().left;
				var disY = evt.pageY - $(this).offset().top;
				$(document).mousemove(function(evt){
					$ele.css({left : evt.pageX - disX,top : evt.pageY - disY});
				})
				$(document).mouseup(function(){
					$(this).off();
				})
			return false;
			})
		}
	}
})