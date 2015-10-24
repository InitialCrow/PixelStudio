// variable environement
var $body  	   = $('body');
var $toolsZone = $('#toolsZone');
var $drawZone  = $('#drawZone');
var $music     = $('audio');
var $pixel = "";
var $classColor = "";
var $tosubmit = "";
var $adder = "";
var $userColor ="";
var $inspirationMode = "";
var $turnOff="";

//Tools...
function Tools(name){
	this.name = name || 'outil box';
	this.active = false;
};
Tools.prototype = {
	h2ForToolsBox : function(){
		$toolsZone.append('<h2> Choose your tool </h2>')
	},
	buttonUI : function(obj){
		$toolsZone.append("<button class='btn btn-primary "+obj.name+"'>"+obj.name+"</button>")
		$('.'+obj.name).on('click', function(){
			initTool([paint,pen,arrounder,rubber,eraser, inspirate]);// set tools false by default;
			obj.active = true;
			$pixel.off();
			checkIfActive([paint,pen,arrounder,rubber,eraser,inspirate],colorPicker,['paint','pen','arrounder','rubber','eraser','InspirationMode']);// ative tool when I click
		});
	}
};