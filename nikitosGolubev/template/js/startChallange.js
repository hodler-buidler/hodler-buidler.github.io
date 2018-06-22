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
			challangeInputs[input].value = ''; // and empty its value to not to see old ones if user click on simple create btn
		}
	}
	makeInvisibleSmth(event.target, '.createChallange', 'delete'); // look at main.js
}

/*** Helper functions ***/