//main.js	
$(document).ready(function(){
	var pixelStudio= {
		init : function(){
			pix.drawBoard(5000);
			paint.buttonUI(paint);
			pen.buttonUI(pen);
			rubber.buttonUI(rubber);
			eraser.buttonUI(eraser);
			colorPicker.init(colorPicker.color);
			adderColor.adderUI(adderColor);
			adderColor.addColor(colorUser);


		},
		run : function(){
		
		
			
		}
				// if (obj.active === true && obj.name ==='paint'){
				// 	paint.paint("blue");

				// }
			
				// if ( obj.active === true && obj.name ==='pen'){
				// 	pen.pen("yellow");
				// 	$('.pixel').unbind('mousemove');
				// 	paint.active = false;

				// }
				// if (obj.active === true && obj.name ==='rubber'){
				// 	rubber.rub();
				// 	$('.pixel').unbind('mousemove');
				// 	paint.active = false;
				// 	pen.active = false;
				// }
				

	};
	
	pixelStudio.init();
	pixelStudio.run();		
});
	
	var pix = new Pixel("20" ,"20");
	var paint = new Paint("paint");
	var pen = new Pen("pen");
	var rubber = new Rubber('rubber');
	var eraser = new EraseAll('eraser');
	var adderColor = new AdderColor('color')
	var colorPicker = new Palete(['#6E6E6E','#000000','#FF0000','#FFFF00','#00FF00','#B404AE'],'20','20');
	var colorUser = new Palete([],'20','20');

