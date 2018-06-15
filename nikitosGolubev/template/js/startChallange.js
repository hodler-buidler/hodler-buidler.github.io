/*** Variables, constants and objects ***/

// Object that contains inputs in create tab. Needed to shorten and to butify code further
let challangeInputs = {
	name: document.getElementById("challangeName"),
	days: document.getElementById("lastDays"),
	maxLostDays: document.getElementById("maxLostDays"),
	startDate: document.getElementById("startDate"),
	endDate: document.getElementById("endDate")
}

/*** Event listeners ***/

// A group of events which are related with click on body(so click on some particular class)
document.getElementById('body').addEventListener('click', (event) => {
	startSimilarChallange(event);
	hideCreateChallangeTab(event);
	showCreateChallangeTab(event);
});

/*** Event functions ***/

function startSimilarChallange(event) {
	let obj = event.target;
	// Check if user clicked on needed btn
	if (event.target.classList.contains('startSimilarChallange')) {
		// Getting current challange
		let currentChallange = findParentByClassName(event.target, 'challange'); // look main.js
		// If challange was found
		if (currentChallange) {
			// Getting data about challange which is contained in special attributes
			let challangeName = currentChallange.getAttribute('challangeName');
			let challangeDays = currentChallange.getAttribute('days');
			let challangeMaxLostDays = currentChallange.getAttribute('maxLostDays');

			// Getting current date which is by default will be suggested to user when to start challange
			let challangeStartDate = getCurrentFormatedDate();
			// Calculating expiring date
			let challangeEndDate = getCalculatedFormatedDate('+', challangeDays);

			// Setting values to inputs
			challangeInputs.name.value = challangeName;
			challangeInputs.days.value = challangeDays;
			challangeInputs.maxLostDays.value = challangeMaxLostDays;
			challangeInputs.startDate.value = challangeStartDate;
			challangeInputs.endDate.value = challangeEndDate;
		}
	}
}

// Show create challange tab
function showCreateChallangeTab(event) {
	// If right btn was clicked
	if (event.target.classList.contains('startSimilarChallange') || event.target.classList.contains('startChallange'))
		makeVisibleFlex('.createChallange'); // look at main.js
}

// Hides create challange tab
function hideCreateChallangeTab(event) {
	// If user clicked on delete btn
	if (event.target.classList.contains('delete')) {
		// Removing error states from inputs (otherwise they'll be visible on the next opening)
		for (let input in challangeInputs) {
			removeErrorMessage(challangeInputs[input], false);
		}
	}
	makeInvisibleSmth(event.target, '.createChallange', 'delete'); // look at main.js
}

/* 
	Removing error state from input
	obj - event or dom obj
	$isEvent - if its not event, this param should be false
*/
function removeErrorMessage(obj, $isEvent = true) {
	let input = obj;
	if ($isEvent) input = obj.target;
	// if input in error state currently
	if (isError(input)) {
		input.style.background = 'transparent'; // Making bg normal
		input.value = ''; // Removing error message value
		event.target.setAttribute('error', '0'); // Changing value on error attribute
	}
}

/*** Helper functions ***/

// Function that turn input into error state
function showError(input, errorMessage) { 
	input.style.background = 'rgba(255, 0, 0, 0.3)'; // painting bg into light red
	input.value = errorMessage; // changing value into error message
	input.setAttribute('error', '1'); // setting 1 to error attribute (show that its error input)
	return false;
}

// Defines if input is in error state
function isError(input) {
	// If its error input, so return true, otherwise - false
	if (input.getAttribute('error') === '1') return true;
	return false;
}