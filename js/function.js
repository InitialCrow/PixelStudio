// variable environement...
var j;// just simple count
var intervalID;// ID of my interval anim

// function....
function painting(color, radius){
	var isdrag = false;
	var click = false;

	$pixel.on('mousedown', function(){
		click = true;
		$(this).css({'background-color': color,
					 'border-radius':radius});
	}).on('mousemove', function(){
		isdrag = true;
		if ( click === true && isdrag === true){	
			$(this).css({'background-color' : color,
						 'border-radius':radius});
		}	
	}).on('mouseup', function(){
		click = false;
		isdrag = false;
	});
}
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
			obj[i].arround(objToGiveColor.color); // active the tool for draw roundpixel
		}		
		if (obj[i].active === true && obj[i].name === tblObjName[3]){
			obj[i].rub(); // active tool rub click for precise rub
		}
		if (obj[i].active === true && obj[i].name === tblObjName[4]){
			obj[i].eraseAll(); // active tool erase for clear all board
		}
		if (obj[i].active === true && obj[i].name === tblObjName[5]){
			obj[i].inspirate(obj[i]); // active tool 
		}
	};
}
function changecolors(obj) { // change color begin infinit loop increment of x
	if (obj.active === true){
		j = 1;
   		intervalID = setInterval(change, 30);// stack the interval for can be stop
	}  
}
function change() { // run infinit loop of increment
	if (j === 1) {
        color = "#"+((1<<24)*Math.random()|0).toString(16); // set random color
        j = 2;
    } else {
        color = "#"+((1<<24)*Math.random()|0).toString(16);// set random color
        j = 1;
    }
    $body.css('background-color', color);	   
}
function stopColor() {// stop anim
	clearInterval(intervalID);
}