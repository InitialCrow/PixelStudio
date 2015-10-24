// main....
$('document').ready(function(){
	pixelStudio.init(pix,1800,userConfig, paint,pen,arrounder,rubber,eraser,colorPicker,adderColor,colorUser,inspirate);// params : (size, Pixel,userConfigtool, Painttool, Pentool, Rubbertool, Erasertool, Paletetool,AdderColortool, PaleteUsertool,inspirateModetool) last for create your palete

});
var pix = new Pixel("20" ,"20");// set pixel size
var userConfig = new UserConfig('userconfigurater')
var paint = new Paint("paint");// create your paint tool
var pen = new Pen("pen");// create your pen tool
var arrounder = new Arround('arrounder')// create your Arround tool
var rubber = new Rubber('rubber');// create your rubber tool
var eraser = new EraseAll('eraser');// create erasetool
var colorPicker = new Palete(['#6E6E6E','#000000','#FF0000','#FFFF00','#00FF00','#B404AE'],'20','20');// create deafault color
var adderColor = new AdderColor('color')// create posibility to add color
var colorUser = new Palete([],'20','20');// create your color whith AdderColor
var inspirate = new InspirationMode('InspirationMode');// create the inspirate Mode
