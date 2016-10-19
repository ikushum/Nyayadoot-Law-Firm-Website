	

$(document).ready(function(){ 


	$(window).scroll(function() { 

	 if ($(document).scrollTop() > 250) { /*-----If the user scrolls more than 150px----*/
		$("#menu2").fadeIn(500);
		$("p.menu").css('color','black');

		$("p.menu" ).hover(function() {		
         	$(this).css("color", "#769CFB");
		} , function(){
			$(this).css("color", "black");
		});

	  };

	  if ($(document).scrollTop() < 250) { /*-----If the user scrolls less than 150px----*/
		$("#menu2").fadeOut(500);
		$("p.menu").css('color','white');

		$("p.menu" ).hover(function() {		
         	$(this).css("color", "#769CFB");
		} , function(){
			$(this).css("color", "white");
		});

	  };

	});

	$('text').hover(function(){ /*-----for button hover effect----*/
 		$(this).stop(true,true).toggleClass('buttonHover',250);
    });

});