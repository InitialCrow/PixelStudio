// inspiration....
function InspirationMode(name){
	Tools.call(this, name);
	this.name = name || 'outil box';
};
InspirationMode.prototype = Object.create(Tools.prototype);
InspirationMode.prototype.inspirate = function(obj){
	changecolors(obj); // take random color of body

	$music.attr('src','assets/heavy.mp3');// change music pretty heavy^^
	$inspirationMode = $('.'+obj.name);
	$inspirationMode.remove();// delete button to enable mode
	obj.name = "turnOff";// set name of new button to disable mode
	obj.buttonUI(obj);// create UI button to disable mode
	$turnOff = $('.turnOff');// stack the new button for new operation
	
	$turnOff.on('click', function(){ // specialy take
		$music.attr('src','assets/light.mp3');// change music pretty cool^^
		obj.active = false;
		stopColor();// stop animation

		$body.css('background-color', 'inherit');

		$(this).remove();//remove turnOff button
		obj.name = 'InspirationMode';//redefine enable button
		obj.buttonUI(obj);// create UI button to enable mode
	});	        
}

