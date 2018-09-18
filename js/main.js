$(document).ready(function(){

	function scrollHeader() {
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

	function liNumber() {
		var i = 0;
		$('.b-3-list .li-name').find('span b').each(function(){
			i++;
			$(this).text(i);
		});
	}
	liNumber();

	$('.reviews-slider').slick();

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

	$(window).scroll(function(){
		scrollHeader();
	});

});