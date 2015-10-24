function AdderColor(name){
	this.name = name;
}
AdderColor.prototype = {
	adderUI : function(obj){
		$toolsZone.append('<h2> Choose your color (put color or color code) </h2>')
		$toolsZone.append('<form class=\'tosubmit\'></form>'); // create toolzone for user
		$tosubmit  = $('.tosubmit');
		$tosubmit.append('<input class=\'adder form-control\' placeholder=\'put #colorcode or color\'></input>');// create input for colorUser
		$adder = $('.adder');
		$tosubmit.append('<button type=\'submit\' class=\'btn btn-default\'>ok</button>');// create validate button
	},
	addColor : function(obj){
		$tosubmit.submit(function(evt){
			// on validate color ....
			
			evt.preventDefault(); // stop refresh on a page
			var $color = $adder.val();// stack value of user must be a validate color
			obj.color.push($color);// push this value on User Palete's
			
			for (var i = 0; i < obj.color.length; i++) {
				
				$('.userColor'+i).remove(); // remove previous Palete of user
				
				$tosubmit.append("<div class= 'userColor"+i+" color'data="+obj.color[i]+"></div>"); // set new color of user

				$userColor = $('.userColor'+i); // stack this color

				$userColor.css({
					'background-color': obj.color[i],
					'width':obj.width,
					'height':obj.height,
				})// set the palete UI

				$userColor.on('click', function(){
					self.color = $(this).attr('data');
					checkIfActive([paint,pen,arrounder,rubber, eraser],self,['paint','pen','arrounder','rubber','eraser'])// check if tool is actif if is put the color on obj 2" param
				});
				uiSelector()// bordering when select color	
			};
		});
	}
};