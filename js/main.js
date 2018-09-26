$(document).ready(function(){

	function scrollHeader(){
		var st = $(window).scrollTop();
		
		if ( $(window).width() > 768 ) {
			if ( st > 162 ) {
				$('.header').addClass('active');
			} else {
				$('.header').removeClass('active');
			}
		} else {
			$('.header').removeClass('active');
		}
	}
	scrollHeader();

	$('.radio-btn').click(function(){
		if ( $(this).hasClass('active') ) {
			$(this).removeClass('active');
		} else {
			$(this).addClass('active');
		}
	});

	$('.mobile-btn').click(function(){
		if ( $(this).hasClass('active') ) {
			$(this).removeClass('active');
			$(this).closest('.header').find('.mobile-menu').removeClass('active');
			$('body').removeClass('active');
		} else {
			$(this).addClass('active');
			$(this).closest('.header').find('.mobile-menu').addClass('active');
			$('body').addClass('active');
		}
	});

	$('.close-btn').click(function(){
		$(this).closest('.header').find('.mobile-btn').removeClass('active');
		$(this).closest('.mobile-menu').removeClass('active');
		$('body').removeClass('active');
	});

	$('.header-nav a').click(function(){
		var block = $(this).attr('href');
		var des = $(block).offset().top - 50;

		if ( $(window).width() < 768 ) {
			$('.mobile-btn').removeClass('active');
			$('.mobile-menu').removeClass('active');
		}
		$('body,html').animate({scrollTop: des}, 800);
		return false;
	});

	$(window).scroll(function(){
		scrollHeader();
	});

	$('input[type="tel"]').inputmask('+7 (999) 999-99-99');

});