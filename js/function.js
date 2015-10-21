// function....
function initTool(obj){ // init acive object to false for can choose one
	for (var i = 0; i < obj.length; i++) {		
		obj[i].active = false;
	};
}
function checkIfActive(obj, objToGiveColor, tblObjName){ // active one by one object
	for (var i = 0; i < obj.length; i++) {	
		if (obj[i].active === true && obj[i].name === tblObjName[0]){
			obj[i].paint(objToGiveColor.color); // active the tool paint stay clicked and paint
		}
		if (obj[i].active === true && obj[i].name === tblObjName[1]){
			obj[i].pen(objToGiveColor.color); // active the tool pen click for draw one pix
		}
		if (obj[i].active === true && obj[i].name === tblObjName[2]){
			obj[i].rub(); // active tool rub click for precise rub
		}
		if (obj[i].active === true && obj[i].name === tblObjName[3]){
			obj[i].eraseAll(); // active tool erase for clear all board
		}
	};
}