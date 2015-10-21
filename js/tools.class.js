function Tools(name){
	this.name = name || 'outil box';
	this.active = false;
}
Tools.prototype = {
	buttonUI : function(obj){
		$('#toolsZone').append('<button class='+obj.name+'>'+obj.name+'</button>')
		$('.'+obj.name).on('click', function(){
			chooseTool([paint,pen,rubber, eraser])
			obj.active = true;
			$('.pixel').unbind()	
			if (paint.active === true){
				paint.paint(colorPicker.color);
			}
			if (pen.active === true){
				pen.pen(colorPicker.color);
			}
			if (rubber.active === true){
				rubber.rub();
			}
			if (eraser.active === true){
				eraser.eraseAll();
			}


		});

	}
}