function AdderColor(name){
	this.name = name;
}
AdderColor.prototype = {
	adderUI : function(obj){
		$toolsZone.append('<form class=\'tosubmit\'></form>'); // create toolzone for user
		$tosubmit  = $('.tosubmit');
		$tosubmit.append('<input class=\'adder\'></input>');// create input for colorUser
		$adder = $('.adder');
		$tosubmit.append('<button type=\'submit\'>ok</button>');// create validate button
	},
	addColor : function(obj){
		$tosubmit.submit(function(evt){
			// on validate color ....
			
			evt.preventDefault(); // stop refresh on a page
			var $color = $adder.val();// stack value of user must be a validate color
			obj.color.push($color);// push this value on User Palete's
			
			for (var i = 0; i < obj.color.length; i++) {
				
				$('.userColor'+i).remove(); // remove previous Palete of user
				
				$('#toolsZone').append("<div class= userColor"+i+" data="+obj.color[i]+"></div>"); // set new color of user

				$userColor = $('.userColor'+i); // stack this color

				$userColor.css({
					'background-color': obj.color[i],
					'width':obj.width,
					'height':obj.height,
				})// set the palete UI

				$userColor.on('click', function(){
					self.color = $(this).attr('data');
					checkIfActive([paint,pen,rubber, eraser],self,['paint','pen','rubber','eraser'])// check if tool is actif if is put the color on obj 2" param
				});	
			};
		});
	}
};