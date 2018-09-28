$(document).ready(function(){

	function scrollHeader(){
		var st = $(window).scrollTop();
		
		if ( $(window).width() > 768 ) {
			if ( st > 162 ) {
				$('.header').addClass('active');
				$('.page-nav').addClass('active');
			} else {
				$('.header').removeClass('active');
				$('.page-nav').removeClass('active');
			}
		} else {
			$('.header').removeClass('active');
			if ( st > 62 ) {
				$('.page-nav').addClass('active');
			} else {
				$('.page-nav').removeClass('active');
			}
		}
	}
	scrollHeader();

	$('.radio-btn').click(function(){
		if ( $(this).hasClass('active') ) {
			$(this).removeClass('active');
		} else {
			$(this).addClass('active');
		}
		$(this).removeClass('error');
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
	$('.fancybox').fancybox();

	$('.popup-background').click(function(){
		$.fancybox.close();
	});

	$('input').on('input',function(){
		$(this).removeClass('error');
	});
	$('textarea').on('input',function(){
		$(this).removeClass('error');
	});

	$('form button[type="submit"]').click(function(){
		if ( $(this).closest('form').find('.radio-btn').hasClass('active') ) {
			$(this).closest('form').find('input').each(function(){
				if(!$(this).val().length) { 
					event.preventDefault(); 
					$(this).addClass("error"); 
				} else { 
					$(this).removeClass("error"); 
				} 
			});
			$(this).closest('form').find('textarea').each(function(){
				if(!$(this).val().length) { 
					event.preventDefault(); 
					$(this).addClass("error"); 
				} else { 
					$(this).removeClass("error"); 
				} 
			});
		} else {
			$(this).closest('form').find('.radio-btn').addClass('error');
			event.preventDefault();
		}
	});

	$('.news-share-block').click(function(){
		var span = $(this).find('span');
		$(this).find('input').select();
		document.execCommand('copy');
		$(this).find('span').text('Готово');
		setTimeout(function(){
			span.text('Скопировать');
		},3000);
	});

	$('.scroll-btn').click(function(){
		var block = $(this).attr('href');
		var des = $(block).offset().top - 50;

		$('body,html').animate({scrollTop: des}, 800);
		return false;
	});

});