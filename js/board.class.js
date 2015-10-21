function Pixel(width, height, color){
	this.width = width || '50';
	this.height = height || '50';
	this.color = color || 'white';
}
Pixel.prototype ={
	drawBoard : function(number){
		
		for ( var i = 0; i< number; i++){
			$('#drawZone').append('<div class=\'pixel\'></div>');

		}
		$('.pixel').css({'background-color' : this.color,
						 'width' : this.width,
						 'height': this.height,
						 'float' : 'left' });
	}
}


