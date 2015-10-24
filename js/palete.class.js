// Palete...
function Palete(color, width, height){
	this.color = color || 'black';
	this.width = width || '50';
	this.height = height || '50';
}
Palete.prototype = {
	init : function(color){
		for (var i = 0; i < color.length; i++) {
			var self = this; // stack the objectColor in self
			$toolsZone.append("<div class='color"+i+" color'  data="+color[i]+"></div>");// create palete and put the color in attribute data
			$classColor = $('.color'+i);
			$classColor.css({
				'background-color':this.color[i],
				'width':this.width,
				'height':this.height,
			});
			$classColor.on('click', function(){
				self.color = $(this).attr('data');
				checkIfActive([paint,pen,arrounder,rubber, eraser],self,['paint','pen','arrounder','rubber','eraser'])// check if tool is actif if is put the color on obj 2" param
				uiSelector()// bordering when select color
			});
		};		
	}	
};