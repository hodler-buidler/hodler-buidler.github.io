/* FUNCTIONS WHICH START AT THE BEGINNING OF THE CODE TO FORM HTML, SET RIGHT STYLES AND ETC.*/
fullscreen(); // setting a height to some tabs which has to be fullscreen

/* Important varriables and constants */

/* Add event listeners */

// when window changes it size, so I change height of fullsceen elements
window.addEventListener('resize', fullscreen);

/*** Events Functions ***/

// Makes some element visible(set a flex property to display) BY selector
// If selector isn't unique, so it takes first exemplar of its element
function makeVisibleFlex(selector) {
	document.querySelector(selector).style.display = "flex";
}

// Makes some elemnt insisible after clicking on some delete btn
// You should pass into this func delete btn class name and a selector of element that should be hidden
function makeInvisibleSmth(toRemoveElementSelector, deleteBtnClassName) {
	// Check if elem contains a class of delete btn
	if (event.target.classList.contains(deleteBtnClassName)) 
		document.querySelector(toRemoveElementSelector).style.display = "none";
}

// A function which sets a fullscreen heigh to block(which has class .fullscreen)
function fullscreen() {
	// Getting .fullscreen elems
	let fullscreenTabs = document.querySelectorAll(".fullscreen");
	// Setting them a css style heigh, where the value is current window height
	fullscreenTabs.forEach(function(value) {
		value.style.height = window.innerHeight+"px";
	});
}