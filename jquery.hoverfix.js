/*
 * hoverFix 1.0
 * Crowd Favorite
 */
(function($) {
	$.fn.hoverFix = function(classname) {
		var c = classname || 'hover';
		this.hover(function(){
			$(this).addClass(c);
		},
		function(){
			$(this).removeClass(c);
		});
	};
})(jQuery);