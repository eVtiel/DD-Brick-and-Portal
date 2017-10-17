$(document).ready(function() {
	$('#fullpage').fullpage({
		navigation: true,
		navigationPosition: 'left',
		animateAnchor: true,
		scrollingSpeed: 600,
		autoScrolling: true,

      afterLoad: function(){
      	var pagePos = $('body').attr('class'); 

      	if (pagePos == 'fp-viewing-1') {
      		$("#img-1").addClass("empireimg-1");	// add 10% move up to empire img
      		$("#img-1").removeClass("empireimg-2");	// return back empire image 
      		$(".seccond-page p").addClass("fadeIn");	// add fage in text 2 page
      		$(".redBorder p").removeClass("textFadeOut"); // return WE ARE to the border
      		$(".bnp1").removeClass("fadeInUp");	// add fade out to the 2d text to boder
      		$(".redBorder").removeClass("redBorderAfter");	// return main red border
      		$(".redBorderTop").removeClass("redBorderTopAfter");	// returm main red TOP border
				$(".redBorder").removeClass("redBorderHover");	//	fix problem with holded hover
				$(".redBorderTop").removeClass("redBorderTopAfterHover");	//fix problem with holded hover
      		$(".imImg").removeClass("imImgHover");
      		$(".img-2").removeClass("img-2Hover");
      		$(".img-3").removeClass("img-3Hover");
      		$(".img-4").removeClass("img-2Hover");
      		$(".img-5").removeClass("img-3Hover");
      		$('.hidentext').css('opacity', '0');
      		$('.viev').removeClass('bounceInRight');
     			$('.viev').removeClass('vievRight');


      	}else if (pagePos == 'fp-viewing-2') {
      		$("#img-1").addClass("empireimg-2");	// add empire image move out
      		$("#img-1").removeClass("empireimg-1");	// remove old position empire img
      		$(".redBorder p").addClass("textFadeOut");	// add WE ARE fade out
      		$(".bnp1").addClass("fadeInUp");	// add 2d text to border
      		$(".bnp2").removeClass("fadeInUp");
      		$(".redBorder").addClass("redBorderAfter");	// add pose 1 to the red border
      		$(".redBorderTop").addClass("redBorderTopAfter");	// add pose 1 to the red TOP border
      		$(".forImg").addClass("fadeIn bounceInUp");
      		$(".redBorder").removeClass("redBorderAfter2nd");
      		$(".redBorderTop").removeClass("redBorderTopAfter2nd");
      	}else if (pagePos == 'fp-viewing-3'){
      		$(".redBorder").addClass("redBorderAfter2nd");
      		$(".redBorderTop").addClass("redBorderTopAfter2nd");
      		$(".bnp1").removeClass("fadeInUp");
      		$(".bnp2").addClass("fadeInUp");
      		$(".bnp3").removeClass("fadeInUp");
      	}else if (pagePos == 'fp-viewing-4'){
      		$(".redBorder").removeClass("redBorderAfter2nd");
      		$(".redBorderTop").removeClass("redBorderTopAfter2nd");
      		$(".bnp2").removeClass("fadeInUp");
      		$(".bnp3").addClass("fadeInUp");
      		$(".bnp4").removeClass("fadeInUp");
      	}
      	else if (pagePos == 'fp-viewing-5'){
      		$(".redBorder").addClass("redBorderAfter2nd");
      		$(".redBorderTop").addClass("redBorderTopAfter2nd");
      		$(".bnp3").removeClass("fadeInUp");
      		$(".bnp4").addClass("fadeInUp");
      	}else {
      		$("#img-1").removeClass("empireimg-1"); // remove old position empire img 
        	}

	$('.redBorderAfter').hover(function() {
     	$('.redBorderTopAfter').addClass('redBorderTopAfterHover');
     	$('.redBorderAfter').addClass('redBorderHover');
     	$('.bnp-boder').addClass('bnp-boderHover');
     	$('.img-2').addClass('img-2Hover');
     	$('.img-4').addClass('img-2Hover');
     	$('.img-3').addClass('img-3Hover');
     	$('.img-5').addClass('img-3Hover');
     	$('.imImg').addClass('imImgHover');
     	$('.hidentext').css('opacity', '1');
     	$('.viev').addClass('bounceInRight');
     	$('.viev').addClass('vievRight');

	},function() {
     	$('.redBorderAfter').removeClass('redBorderHover');
     	$('.redBorderTopAfter').removeClass('redBorderTopAfterHover')
     	$('.bnp-boder').removeClass('bnp-boderHover');
     	$('.img-2').removeClass('img-2Hover');
     	$('.img-4').removeClass('img-2Hover');
     	$('.img-3').removeClass('img-3Hover');
     	$('.img-5').removeClass('img-3Hover');
     	$('.imImg').removeClass('imImgHover');
     	$('.hidentext').css('opacity', '0');
     	$('.viev').removeClass('bounceInRight');
     	$('.viev').removeClass('vievRight');
	}

	);

   	}


	});


});






