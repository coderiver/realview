$(document).ready(function() {

	function visibleElements() {
		$('.js-visible').each(function() {
			if ($(window).scrollTop() + $(window).height() >= $(this).offset().top + ($(this).outerHeight()/2) ) {
				$(this).addClass('is-visible');
			};
		});
	};

	function sectionFixed() {
		$('.js-sections').each(function() {
			if ($(window).scrollTop() + $(window).height()/2 >= $(this).find('.section').first().offset().top + ($(this).find('.section').first().outerHeight()/2)) {
				$(this).removeClass('bg-scroll');
				$(this).addClass('bg-fixed');
				if ($(window).scrollTop() + $(window).height()/2 >= $(this).find('.section').last().offset().top + ($(this).find('.section').last().outerHeight()/2)) {
					$(this).removeClass('bg-fixed')
				};
			}
			else {
				$(this).removeClass('bg-fixed');
			}
		});
	}

	visibleElements();
	sectionFixed();

	$(window).scroll(function() {
		visibleElements();
		sectionFixed();
	});

	$('.js-scroll-to').click(function() {
		var id = $(this).data('scroll');

		$('html, body').animate({
			scrollTop: $('.js-scroll[data-block="' + id + '"]').offset().top
		}, 2000);

		return falst;

	});

});