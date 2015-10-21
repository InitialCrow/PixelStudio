// variable environement
var $toolsZone = $('#toolsZone');
var $drawZone  = $('#drawZone');
var $pixel = "";
var $classColor = "";
var $tosubmit = "";
var $adder = "";
var $userColor ="";

//Tools...
function Tools(name){
	this.name = name || 'outil box';
	this.active = false;
};
Tools.prototype = {
	buttonUI : function(obj){
		$toolsZone.append('<button class='+obj.name+'>'+obj.name+'</button>')
		$('.'+obj.name).on('click', function(){
			initTool([paint,pen,rubber, eraser])// set tools false by default;
			obj.active = true;
			$pixel.off();
			checkIfActive([paint,pen,rubber, eraser],colorPicker,['paint','pen','rubber','eraser'])
		});
	}
};