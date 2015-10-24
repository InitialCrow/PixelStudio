// userconfig
function UserConfig(name){
	Pixel.call(this, name);
	this.name = name;
}
UserConfig.prototype = Object.create(Pixel);
UserConfig.prototype.userConfig = function(obj, height, width){
	$toolsZone.append('<h2>Choose your config</h2>');
	$toolsZone.append('<form class=\'check\'></form>'); // create toolzone for user
	$check  = $('.check');
	$check.append("<input class='height form-control' placeholder='height'></input>");// create input for heightUser
	$check.append("<input class='width form-control' placeholder='width'></input>");// create input for widthUser	
	$check.append("<input class='number form-control' placeholder='number'></input>");// create input for numberUser
	$check.append("<button type='submit ' class='btn btn-default'>ok</button>");// create validate button
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