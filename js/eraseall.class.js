function EraseAll(name){
	Tools.call(this,name)
	this.name = name;
}
EraseAll.prototype = Object.create(Tools.prototype);
EraseAll.prototype.eraseAll = function(){
	$pixel.css('background-color','inherit');
}