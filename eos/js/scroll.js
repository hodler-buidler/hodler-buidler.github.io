/***
	This JS file is responsible for all type of scrolling on site.
	(different btn that changes current user location on site by scroll)
	!Scroll must be smooth
***/

/* Event Listeners */
// A btn .below, which scrolls to the child of body (For instance: tab1 to tab2)
window.addEventListener("scroll", scrollBelow);

/* Event functions */

// A function which scrolls the window height
let previousScrollYPosition = window.scrollY;
// Defines if scroll from top was performed (to prevent endless loop)
let isScrolled = false;
function scrollBelow(event) {
	// If user hasnt performed scroll movement yet and consequently previous scroll animation hasnt been performed yet
	// To prevent endless loop
	if (!isScrolled) {
		// Scroll only if the page is scrolled LESS now than window size
		// (to prevent scrolling from bottom to top if user loaded the page that was already scrolled at that moment)
		if ((window.scrollY < window.innerHeight)) {
			let scrollDurationMs = 500; // Scroll animation time(Milliseconds)
			// Scrolling....
			doScrolling(window.innerHeight, scrollDurationMs);
			// Setting to true, as we performed scroll now and we shouldnt repeat it anymore(if user wont scroll to top of the document)
			isScrolled = true;
		}
	}
	// Rewriting scroll position
	previousScrollYPosition = window.scrollY;
	// If user scrolled to the top of the document he can use scroll animation again
	if (!window.scrollY) isScrolled = false;
}

/* Helper functions */

/*** 
	AN ANSWER FROM STACKOVERFLOW
	https://stackoverflow.com/questions/17722497/scroll-smoothly-to-specific-element-on-page
***/
function doScrolling(elementY, duration) { 
  var startingY = window.pageYOffset;
  var diff = elementY - startingY;
  var start;

  // Bootstrap our animation - it will get called right before next frame shall be rendered.
  window.requestAnimationFrame(function step(timestamp) {
    if (!start) start = timestamp;
    // Elapsed milliseconds since start of scrolling.
    var time = timestamp - start;
    // Get percent of completion in range [0, 1].
    var percent = Math.min(time / duration, 1);

    window.scrollTo(0, startingY + diff * percent);

    // Proceed with animation as long as we wanted it to.
    if (time < duration) {
      window.requestAnimationFrame(step);
    }
  })
}