function Pen(name){
	Tools.call(this, name)
	this.name = name || 'outil box';
}
Pen.prototype = Object.create(Tools.prototype);
Pen.prototype.pen = function(color){

	$('.pixel').on('mousedown', function(){
		$(this).css('background-color', color);
	})
			
}