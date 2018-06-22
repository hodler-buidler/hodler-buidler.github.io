/* 
	!!! LOOK confirmation.js to be aware of aims that can be used and functions that would be used 
	with this aims. You can also set your own aims and functions there to create new situations in which 
	confirmation is required but with different behaviour.
*/

/*** Event listeners ***/

// Events which based on clicking on elements with particular class name
document.getElementById('body').addEventListener('click', (event) => {
	showConfirmationToEndChallangeInAdvance(event);
});

/*** Event functions ***/

// Function that shows confirmation tab to ask user if he really wants to end challange
function showConfirmationToEndChallangeInAdvance(event) {
	let obj = event.target;
	// If user clicked directly on endChallange btn
	if (obj.classList.contains('endChallangeBtn')) {
		// Finding chllange which should be ended. (Controls are contained inside it)
		let currentChallange = findParentByClassName(obj, 'challange');

		let aim = aims.endChallange; // target of confirmation, look confirmation.js
		confirmation(aim, currentChallange); // calling confirmation, look confirmation.js
	}
}

/*
	Function that ends challange, removes it visually, moves it to completed challanges
	currentChallange - challange which should be ended
*/
//!!! XXX --- This func requires interaction with DB so AJAX in demand, use it further --- XXX
function endChallangeInAdvance(currentChallange) { 
	currentChallange.parentNode.removeChild(currentChallange); // removing currentChallange from DOM
	// If there no chalanges left, so print message that this page is empty
	if (!document.querySelector('.challanage')) showNothingBlc('#challanagesContainer', true); 
}