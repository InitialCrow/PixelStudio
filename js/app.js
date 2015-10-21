// pixelStudio .. 0.2
var pixelStudio= {
		init : function(obj,size, obj1, obj2, obj3, obj4, obj5, obj6, obj7){
			obj.drawBoard(size);// draw a board for paint
			obj1.buttonUI(obj1);// create UI button
			obj2.buttonUI(obj2);// create UI button
			obj3.buttonUI(obj3);// create UI button
			obj4.buttonUI(obj4);// create UI button
			obj5.init(obj5.color);// create default palete
			obj6.adderUI(obj6);// create adder UI 
			obj6.addColor(obj7);// init adder function
		}
};

