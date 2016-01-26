$(document).ready(function() {

	function visibleElements() {
		$('.js-visible').each(function() {
			if ($(window).scrollTop() + $(window).height() >= $(this).offset().top + ($(this).outerHeight()/2) ) {
				$(this).addClass('is-visible');
			};
		});
	};

	function sectionFixed() {
		if ($(window).scrollTop() + $(window).height()/2 >= $('.section').first().offset().top + ($('.section').first().outerHeight()/2)) {
			$('.js-sections').removeClass('bg-scroll');
			$('.js-sections').addClass('bg-fixed');
			if ($(window).scrollTop() + $(window).height()/2 >= $('.section').last().offset().top + ($('.section').last().outerHeight()/2)) {
				$('.js-sections').removeClass('bg-fixed')
			};
		}
		else {
			$('.js-sections').removeClass('bg-fixed');
		}
		console.log($(window).scrollTop() + $(window).height()/2, $('.section').first().offset().top + ($('.section').first().outerHeight()/2), $('.section').last().offset().top + ($('.section').last().outerHeight()/2))
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