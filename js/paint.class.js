function Paint(name){
	Tools.call(this,name)
	this.name = name || 'outil box';
}
Paint.prototype = Object.create(Tools.prototype);
Paint.prototype.paint = function( color){
			
			var isdrag = false;
			var click = false;

			$('.pixel').bind('mousedown', function(){
			click = true;
			
			$(this).css('background-color', color);

			}).bind('mousemove', function(){
				isdrag = true;
				if ( click === true && isdrag === true){
					
					$(this).css('background-color', color);
				}
			
				
			}).bind('mouseup', function(){
				click = false;
				isdrag = false;

			});
			
}