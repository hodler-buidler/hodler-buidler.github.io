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
		let currentChallange = findParentByClassName(event.target, 'challange');
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
	makeInvisibleSmth(event.target, '.createChallange', 'delete'); // look at main.js
}

/*** Helper functions ***/

// Finding particular parent by its className and its child
function findParentByClassName(childElement, parentClassNmae) {
	let parentResult = childElement.parentNode; // Getting first parent of child
	// Starting loop
	// If element doesnt contain needed className so loop next
	while (!parentResult.classList.contains(parentClassNmae)) {
		// If body is our parent so its something wrong here, = nothing found
		if (parentResult.tagName === "BODY") return false;
		// Getting next parent element
		parentResult = parentResult.parentNode;
	}
	return parentResult;
}