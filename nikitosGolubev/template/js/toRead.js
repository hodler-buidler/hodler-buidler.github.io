/*** Event Listeners ***/

// On click on close or open btn
document.getElementById('body').addEventListener('click', openOrCloseToReadData);
// On click on remove btn
document.getElementById('body').addEventListener('click', removeToReadData);

/*** Event Functions ***/

/* Function that shows or hides data depend on what button was clicked */
function openOrCloseToReadData(event) {
	let obj = event.target; // current event element
	// If user clicked on open btn
	if (obj.classList.contains('openToReadData')) {
		let thisToReadDataBlock = getToReadBlock(obj); // getting current block which contains btn
		// finding and getting content that should be showed
		let thisToReadDataContent = findAndReturnTextContent(thisToReadDataBlock);

		// Class exchanging
		// Turning open btn into close btn
		obj.classList.remove('openToReadData');
		obj.classList.add('closeToReadData');
		// Making content visible
		thisToReadDataContent.style.display = "block";
	}
	// If user clicked on close btn
	else if (obj.classList.contains('closeToReadData')) {
		let thisToReadDataBlock = getToReadBlock(obj); // getting current block which contains btn
		// finding and getting content that should be hidden
		let thisToReadDataContent = findAndReturnTextContent(thisToReadDataBlock);

		// Class exchanging
		// Turning close btn into open btn
		obj.classList.remove('closeToReadData');
		obj.classList.add('openToReadData');
		// Making content invisible
		thisToReadDataContent.style.display = "none";
	}
}

// Function that removes toReadDataBlock(visually)
function removeToReadData(event) {
	let obj = event.target; // current event element
	// If user clicked on remove btn
	if (obj.classList.contains('removeToReadData')) {
		let thisToReadDataBlock = getToReadBlock(obj); // getting current block which contains btn
		// And removing him by method removeChild
		thisToReadDataBlock.parentNode.removeChild(thisToReadDataBlock);
	}
}

/*** Helper functions ***/

// Function that gets a toReadDataElement by clicked btn, as it its child
// btnElement - btn which was clicked by user (event.target obj. from event function)
function getToReadBlock(btnElement) {
	// Getting first parent node
	let nextParent = btnElement.parentNode;
	// Looping until toReadDataElement wouldn't be found
	while (!nextParent.classList.contains('toReadData')) {
		nextParent = nextParent.parentNode; // updating variable with new parent element
	}
	// returning toReadDataElement
	return nextParent;
}

// Function that finds content(text that should be showed/hidden) in array of children of toReadDataElement
function findAndReturnTextContent(toReadDataBlock) {
	// Getting HTMLCollection of children of toReadDataBlock and turn it into array
	let toReadDataBlockChildren = Array.from(toReadDataBlock.children);
	// looping through children
	for (let i = 0; i < toReadDataBlockChildren.length; i++) {
		// If element contains particular(.readContent) class name than returning it
		if (toReadDataBlockChildren[i].classList.contains('readContent')) return toReadDataBlockChildren[i];
	}
}