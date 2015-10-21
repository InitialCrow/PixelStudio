var $drawZone  = $('body').append('<div id=\'drawZone\'></div>');

function PixelStudio(width, height, color){
	this.width = width || 50;
	this.heigth = height || 50;
	this.color = color || 'white';
}
PixelStudio.prototype = {
	drawing : function(number){
		divTbl = [];
		for ( var i = 0; i<number; i++){
			divTbl.push($drawZone.append('<div></div>'))
			console.log(divTbl)
			divTbl[i].color = "green"
		}
	}


}