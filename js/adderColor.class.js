function AdderColor(name, color){
	this.name = name;
	this.color  = color;
}
AdderColor.prototype = {
	adderUI : function(obj){
		$('#toolsZone').append('<form class=\'tosubmit\'></form>');
		$('.tosubmit').append('<input class=\'adder\'></input>');
		$('.tosubmit').append('<button type=\'submit\'>ok</button>');
	},
	addColor : function(obj){
		$('.tosubmit').submit(function(evt){
			evt.preventDefault();
			var $color = $('.adder').val();
			obj.color.push($color);
			for (var i = 0; i < obj.color.length; i++) {
				$('.userColor'+i).remove();
				$('#toolsZone').append("<div class= userColor"+i+" data="+obj.color[i]+"></div>")
				$('.userColor'+i).css({
					'background-color': obj.color[i],
					'width':obj.width,
					'height':obj.height,
				})
				$('.userColor'+i).on('click', function(){
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
			
			console.log(obj.color)

		});
	}
}