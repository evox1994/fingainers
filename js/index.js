$(document).ready(function(){

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

	function Article(){
		var page_href = location.href;
		$('.news-share-block input').val(page_href);
		$('.popup-article').removeClass('active');
		if ( location.hash ) {
			var el = location.hash;
			$(el).addClass('active');
			$('body').addClass('active');
			$(el).find('.popup-article-wrap').animate({opacity: 1}, 1000);
		} else {
			$('body').removeClass('active');
			$('.popup-article').removeClass('active');
			$('.popup-article-wrap').css('opacity',0);
		}
	}
	Article();

	function articleScroll(){
		var st = $('.popup-article').scrollTop();
		if ( st > 60 ) {
			$('.article-scroll-btn').addClass('active');
		} else {
			$('.article-scroll-btn').removeClass('active');
		}
	}
	articleScroll();

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

	$('.b-9-list .li-btn').click(function(){
		location.hash = $(this).attr('href');
		return false;
	});

	$('.article-nav a').click(function(){
		location.hash = $(this).attr('href');
		return false;
	});

	$(window).bind('hashchange',function(){
		Article();
	});

	$('.article-close').click(function(){
		if ("pushState" in history){
			history.pushState("", document.title, window.location.pathname + window.location.search);
			$('body').removeClass('active');
			$('.popup-article').removeClass('active');
			$('.popup-article-wrap').css('opacity',0);
		} else {
			des = $('.b-9-list').offset().top - 300;
			location.hash = "";
        	setTimeout(function(){$('body,html').animate({scrollTop: des},1)},1);
		}
	});

	$('.reviews-slider').slick();

	$('.popup-article').scroll(function(){
		articleScroll();
	});

	$('.article-scroll').click(function(){
		$('.popup-article').animate({scrollTop: 0},500);
	});

});