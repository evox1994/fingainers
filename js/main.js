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

	function liNumber(){
		var i = 0;
		$('.b-3-list .li-name').find('span b').each(function(){
			i++;
			$(this).text(i);
		});
	}
	liNumber();

	function filter(){
		if ( $('.filter li.active').length ) {
			var f = $('.filter li.active').data('filter');

			$('.b-9-list li').removeClass('active');
			setTimeout(function(){
				$('.b-9-list li').css('display','none');
				$(f).css('display','inline-block');
				setTimeout(function(){$(f).addClass('active');},100);
			},300);
		} else {
			$('.b-9-list li').css('display','inline-block');
			setTimeout(function(){$('.b-9-list li').addClass('active');},100);
		}
	}
	filter();

	function filterMore() {
		setTimeout(function(){
			if ( $('.b-9-list').find('li.active').length > 6 ) {
				$('.b-9 .more-btn').css('display','inline-block');
			} else {
				$('.b-9 .more-btn').css('display','none');
			}
		},300);
	}
	filterMore();

	$('.filter li').click(function(){
		if ( $(this).hasClass('active') ) {
			$(this).removeClass('active');
		} else {
			$('.filter li').removeClass('active');
			$(this).addClass('active');
		}
		filter();
		filterMore();
	});

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

});