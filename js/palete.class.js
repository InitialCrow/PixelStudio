function Palete(color, width, height){
	this.color = color || 'black';
	this.width = width || '50';
	this.height = height || '50';
}
Palete.prototype = {
	init : function(color){
		for (var i = 0; i < color.length; i++) {
			var self = this;
			$('#toolsZone').append("<div class=color"+i+" data="+color[i]+"></div>")
			$('.color'+i).css({
				'background-color':this.color[i],
				'width':this.width,
				'height':this.height,
			})

			$('.color'+i).on('click', function(){
				self.color = $(this).attr('data');
				if (paint.active === true){
					paint.paint(self.color);
				}
				if (pen.active === true){
					pen.pen(self.color);
				}
				if (rubber.active === true){
					rubber.rub();
				}
				
			})
		};
		
	}
	
}