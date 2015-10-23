// userconfig
function UserConfig(name){
	Pixel.call(this, name);
	this.name = name;
}
UserConfig.prototype = Object.create(Pixel);
UserConfig.prototype.userConfig = function(obj, height, width){
	$toolsZone.append('<form class=\'check\'></form>'); // create toolzone for user
	$check  = $('.check');
	$check.append("<input class='height' placeholder='height'></input>");// create input for heightUser
	$check.append("<input class='width' placeholder='width'></input>");// create input for widthUser	
	$check.append("<input class=\'number\' placeholder='number'></input>");// create input for numberUser
	$check.append('<button type=\'submit\'>ok</button>');// create validate button
	$check.submit(function(evt){
		evt.preventDefault(); // stop refresh on a page

		$height = $('.height').val();// stack value
		$width = $('.width').val();// stack value
		$number = $('.number').val();// stack value

		$pixel.remove();// clear the old board
		obj = new Pixel($height, $width);// redefine px object
		obj.drawBoard($number);// draw this new board
	});
}