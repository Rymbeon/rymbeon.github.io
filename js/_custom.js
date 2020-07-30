document.addEventListener("DOMContentLoaded", function() {
	$('body').on('click', '.menu-mobile-triger', function (event) {

		if ($(this).hasClass('open')) {
			$('nav').hide('fast');
			$(this).removeClass('open');
			$('header').removeClass('color');
			$('body').css('overflow', 'auto');
		} else {
			$('nav').show('fast');
			$(this).addClass('open');
			$('header').addClass('color')
			$('body').css('overflow', 'hidden ');
		}
	});
	$('input[name="tel"]').inputmask({"mask": "+380 ( 99 ) 999 99 99"});
});
