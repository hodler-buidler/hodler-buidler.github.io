function scrolling() {
	var scrolled = $(window).scrollTop();	
	var scroll_fade_in = 1000;

	if (scrolled > scroll_fade_in) {
		$("#scroll_up").fadeIn(400);
	}
	else {
		$("#scroll_up").css("display", "none");
	}
}

function scroll_up() {
	var delay = 700;

	$('body, html').animate({
      scrollTop: 0
    }, delay);
}