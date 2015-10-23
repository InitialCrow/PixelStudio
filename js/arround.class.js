//arround....
function Arround(name,value){
	Tools.call(this,name)
	this.name = name || 'outil box';
	this.value = value || '50px';
}
Arround.prototype = Object.create(Tools.prototype);
Arround.prototype.arround = function(color){// same for paint just add round
	painting(color,'100%');// waring painting in function.js not link with object 2param is radius
}