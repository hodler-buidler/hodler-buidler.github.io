var counter = 1;
var str = "123";

function slider(element) {
	//Получение ID блока который активен
	var slide = $(this);
	var id_slaid = slide.attr("class")
	id_slaid = id_slaid[id_slaid.length - 1];
	
	//Удаление блока и показ нового
	if (counter != id_slaid) {
		$(".s" + counter).fadeOut(1);
		$("." + counter).css("background", "#333");
		$("." + id_slaid).css("background", "#ff8b38");
		$(".s" + id_slaid).fadeIn(700);
		$(".s" + id_slaid).css("display", "flex");
	}
	//Появление блока
	counter = id_slaid;
}