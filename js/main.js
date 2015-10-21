// main....
$('document').ready(function(){
	pixelStudio.init(pix,1000,paint,pen,rubber,eraser,colorPicker,adderColor,colorUser);// params : (size, Pixel, Painttool, Pentool, Rubbertool, Erasertool, Paletetool,AdderColortool, PaleteUsertool) last for create your palete
});
var pix = new Pixel("20" ,"20");// set pixel size
var paint = new Paint("paint");// create your paint tool
var pen = new Pen("pen");// create your pen tool
var rubber = new Rubber('rubber');// create your rubber tool
var eraser = new EraseAll('eraser');// create erasetool
var colorPicker = new Palete(['#6E6E6E','#000000','#FF0000','#FFFF00','#00FF00','#B404AE'],'20','20');// create deafault color
var adderColor = new AdderColor('color')// create posibility to add color
var colorUser = new Palete([],'20','20');// create your color whith AdderColor
