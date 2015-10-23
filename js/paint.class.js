// paint...
function Paint(name){
	Tools.call(this,name)
	this.name = name || 'outil box';
}
Paint.prototype = Object.create(Tools.prototype);
Paint.prototype.paint = function( color){
	painting(color,'0%');// waring painting in function.js not link with object		
}