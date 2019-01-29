function menu(element) {
	var sections = $("section");
	var id_search = $(this).attr("id");
	var px_to_header = Number($("header").innerHeight());
	var delay = 1000;

	for (var i = 0; i < sections.length; i++) {
		var needle_class = $(sections[i]).attr("class");
		if (needle_class !== id_search) {
			px_to_header += ($(sections[i]).innerHeight());
		}
		else {
			break;
		}
	}

	$('body, html').animate({
      scrollTop: px_to_header
    }, delay);
}