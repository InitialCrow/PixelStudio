// pixelStudio .. 0.5.1
var pixelStudio= {
		init : function(obj,size, obj1, obj2, obj3, obj4, obj5, obj6, obj7, obj8, obj9, obj10){
			obj.drawBoard(size);// draw a board for paint
			obj1.userConfig(obj)// set UserConfiguration obj must be the px boject
			obj2.h2ForToolsBox();// put h2 of object
			obj2.buttonUI(obj2);// create UI button
			obj3.buttonUI(obj3);// create UI button
			obj4.buttonUI(obj4);// create UI button
			obj5.buttonUI(obj5);// create UI button
			obj6.buttonUI(obj6);// create UI button
			obj7.init(obj7.color);// create default palete
			obj8.adderUI(obj8);// create adder UI 
			obj8.addColor(obj9);// init adder function
			obj10.buttonUI(obj10);// create UI button
		}
};

