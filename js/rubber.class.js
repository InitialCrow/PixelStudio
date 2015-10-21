// rubber...
function Rubber(name){
	Tools.call(this,name)
	this.name = name || 'Rubber';
}
Rubber.prototype = Object.create(Tools.prototype);
Rubber.prototype.rub = function(){
	$pixel.on('mousedown',function(){
		$(this).css('background','none');	
	});
}