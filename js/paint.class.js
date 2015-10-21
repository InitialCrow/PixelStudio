// paint...
function Paint(name){
	Tools.call(this,name)
	this.name = name || 'outil box';
}
Paint.prototype = Object.create(Tools.prototype);
Paint.prototype.paint = function( color){
			var isdrag = false;
			var click = false;

			$pixel.on('mousedown', function(){
				click = true;
				$(this).css('background-color', color);

			}).on('mousemove', function(){
				isdrag = true;
				if ( click === true && isdrag === true){	
					$(this).css('background-color', color);
				}	

			}).on('mouseup', function(){
				click = false;
				isdrag = false;
			});			
}