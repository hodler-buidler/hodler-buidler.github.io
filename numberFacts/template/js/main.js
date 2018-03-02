/**** 
	TO GET RANDOM FACTS BY NUMBER I WILL USE http://numbersapi.com/
****/

// Set body a current window height to center container with fact searching
setBodyRelevantHeight();

// Varriables, constants, arrays, objects
// false - default
const factCategory = [false, 'year', 'date', 'math']; // its all categories of facts from http://numbersapi.com
const siteURL = "http://numbersapi.com/"; // site which contains facts
const errorMessage = "Oops, Something went wrong, error!"; // error message (if smth went wrong)
// A map which contains guides(images) of how to enable fetch in browsers
// !!!IMORTANT!!! KEY here is VALUE of ATTRIBUTE guideType which must contain every .browser element
const browserGuidesImg = new Map([
	["chrome", "<img src='template/images/chrome.png' alt='' />"],
	["firefox", "<img src='template/images/firefox.png' alt='' />"],
	["opera", "<img src='template/images/opera.png' alt='' />"]
	]); 

// Event Listeners
// Generating a random example of fact at start, when page loaded
document.addEventListener('DOMContentLoaded', function() {
	// isExmp = true, bcs that gonna be an examp of fact view for user
	getFactByNumber(getRandomNumber(0, 1000), true);
});
window.addEventListener('resize', setBodyRelevantHeight); // when window change it size, so I change height of body
document.getElementById("number").addEventListener("input", validateInput); // validate input
document.getElementById("getFact").addEventListener("click", getFact); // get and post fact
document.getElementById("browsers").addEventListener("click", showGuide); // shows a guide to user to how to enable the fetch
document.querySelector("body").addEventListener("click", removeBubble); // removes bubble(makes it invisible)

// STARTER FUNCTIONS
/* 
	A function that sets current window height to body to center container with fact searching
	It works in couple with event listener(window resize) to make body height relevant all the time
	independently from user actions.
	Also it starts at the beggining of script to set body a current window height
*/
function setBodyRelevantHeight() {
	let windowHeightPx = window.innerHeight;
	document.querySelector('body').style.height = windowHeightPx+"px"; // setting the height to body
}

// EVENT FUNCTIONS

// A function which shows guide on how to enable a fetch request in users browser
function showGuide(event) {
	if (event.target.classList.contains('browserName')) {
		/* Its type of bubble(id attribute), I made it to save opportunity to create other bubbles 
		with different css*/
		const bubbleType = "#bubbleOne";
		/* Here I get a browser name(which is pointed in element) and concat to it a word "Guide" to make a bubble header
		In different bubbles, u have to define it's own header by something(here its text in .browserName class)*/
		const bubbleHeader = event.target.innerText + " Guide";
		// Just open bubble and set header, nothing special
		openBubble(bubbleType);
		setBubbleHeader(bubbleType, bubbleHeader);

		/* Here I define varriable (browserGuideTypeAttrValue) which contains an parrent attribute (.browser) called guideType
		It will help me, to get the img from haystack created above*/
		let browserGuideTypeAttrValue = event.target.parentNode.getAttribute('guideType');
		// Getting img from its Map by key(attr guideType)
		let guideImg = browserGuidesImg.get(browserGuideTypeAttrValue);

		// Creating an element which will contain img with guide
		let guideImgWrapper = document.createElement("div");
		// Setting a class name to it
		guideImgWrapper.className = "guideImg";
		// And put guide img into this element
		guideImgWrapper.innerHTML += guideImg;
		// Finally, append everything(only an element with guide img) to main content of bubble
		appendBubbleContent(bubbleType, guideImgWrapper);
	}
}

// A function that validates input (ONLY INTEGER)
function validateInput(event) {
	let value = event.target.value; // input value
	let lastLetter = value.substr((value.length - 1), 1); // last typed letter
	// IF length > 1
	if (value.length) {
		// In integer type first letter can be "-", so this RegExp satisfy it
		// And if its not an integer or "-" it empty value
		if (value.length === 1 && !lastLetter.match(/[0-9\-]/i)) {
			event.target.value = "";
		}
		// In number is not integer but length is bigger than 1 - empty input 
		if (!Number.isInteger(+value) && value.length > 1) {
			event.target.value = "";
		}
		// So, here I dont check for "-", and just remove last typed letter if its not a number
		if (!lastLetter.match(/[0-9]/i) && value.length > 1) {
			event.target.value = value.substr(0, (value.length - 1));
		}
	}
}

// A function that works after the click on add btn and it validates input a little a post fact if its OK
function getFact(event) {
	let input = document.getElementById('number');
	let value = input.value;
	// If input value is not integer, so I make it empty (bcs someone can paste text and previous function doesn't save from it)
	if (!Number.isInteger(+value) && value.length > 1) input.value = "";
	else {
		// if it's Ok, lets post fact
		getFactByNumber(+value);
	}
}

// HELPER FUNCTIONS

// A function that print get fact by request and print it
function getFactByNumber(num, isExmp) {
	// isExmp - if its an onload start of func
	// category = cat
	// taking a random cat index, by cats length
	let randomCatIndex = getRandomNumber(0, (factCategory.length - 1));
	let randomCat = factCategory[randomCatIndex]; // getting a cat

	// Vallidating cat and number, bcs in some occasions they can't be matched, if OK, run request
	if (validateNumberAndCat(num, randomCat, isExmp)) {
		// Create a URL address to make AJAX request
		let url = createURL(num, randomCat);
		console.log(url);

		// A get request to take a fact
		fetch(url)
		.then((result) => {
			// Checking status and if it's ok return the response(fact)
			if (result.status == 200) return result.text();
		})
		.then((fact) => {
			// Just printing the fact and number in HTML.
			printFact(num, fact, isExmp);
		})
		.catch((e) => {
			// IF something went wrong, print error message
			printFact("Err!", errorMessage, isExmp)
		});
	}
}

// A function which validates if it's possible to match category with typed number
// For instance: -121 doesn't really fit year or date
function validateNumberAndCat(num, cat, isExmp) {
	/*
		I cheking here 2 occasions.
		1) Before (main OR) - its for date. It can be only in range from 1 to 31
		2) After (main OR) - its for year. It cant be negative 
	*/
	if (((num <= 0 || num > 31) && cat === "date") || (num < 0 && cat === "year")) {
		// if category matches wrong with number, so I run function getFactByNumber again to generate new category
		getFactByNumber(num, isExmp);
		// And return false (compulsory!!!!)
		return false;
	}
	return true;
}

// Creating a URL to make an AJAX request
function createURL(num, cat) {
	// IF category if default(it's false), so I paste to URL only a number
	// Else I use both category and number
	if (!cat) return siteURL+num;
	else return siteURL+num+"/"+cat;
}

// Printing fact into #fact div
function printFact(num, fact, isExmp) {
	// getting container that will contain fact and number, which is created in advance
	let container = document.getElementById("fact");
	// Remove children to add new ones
	if (!isExmp) clearElement("#fact");
	// Creating 2 container one of them is for number, other for fact
	let numContainer = document.createElement('div');
	let factContainer = document.createElement('div');
	// Creating DOM text nodes from number and fact text
	fact = document.createTextNode(fact), num = document.createTextNode(num);

	// Setting css(decoration) classes to containers which have data
	numContainer.className = "typedNumber";
	factContainer.className = "factText";

	// If it's an example (started onload)
	if (isExmp) {
		// So I create a DOM element span
		let exmp = document.createElement('span');
		// Set him special CSS class name
		exmp.className = "exmp";
		// And put there a text node, which says that its example
		exmp.appendChild(document.createTextNode("(Example!!!) "));
		// Then I just put it to fact text container
		factContainer.appendChild(exmp);
	}
	// Put text nodes with data into fact and num containers
	numContainer.appendChild(num);
	factContainer.appendChild(fact);

	// Finaly put created elements to HTML to container with id #fact, which is created in advance
	container.appendChild(numContainer);
	container.appendChild(factContainer);
}

/***
	BUBBLE FUNCTIONS
	typeID - Its type of bubble(id attribute), I made it to save opportunity to create other bubbles 
		with different css.
	header - bubble header
	content - all bubble content which is a purpose of creating this bubble
***/

// Opens bubble, and clear its content
function openBubble(typeID) {
	let bubble = document.querySelector(typeID); // getting bubble
	// Clear all content
	clearElement(`${typeID} .bubbleContent`);
	// Making bubble visible
	bubble.style.display = "flex";
}

function setBubbleHeader(typeID, header) {
	let bubble = document.querySelector(typeID); // getting bubble
	// Setting header
	document.querySelector(`${typeID} .bubbleHeader`).innerText = header;
}

function appendBubbleContent(typeID, content) {
	let bubble = document.querySelector(typeID); // getting bubble
	// Appending content
	document.querySelector(`${typeID} .bubbleContent`).appendChild(content);
}

// Removing(hiding) the bubble
function removeBubble(event) {
	// Check if user clicked on removeBubbleBtn
	if (event.target.classList.contains('removeBubble')) {
		// Getting first parrent of btn
		let bubbleWrapper = event.target.parentNode;
		// Than a loop which will finally take a main parent(bubble wrapper)
		while (!bubbleWrapper.classList.contains('bubble_w')) {
			bubbleWrapper = bubbleWrapper.parentNode;
		}
		// And then just make it invisible
		bubbleWrapper.style.display = "none";
	}
}

// Removes all children from element by selector
function clearElement(selector) {
	let elem = document.querySelector(selector); // getting element
	let children = Array.from(elem.children); // getting its children and turn from HTMLCollection to Array
	// removing child with each itteration
	children.forEach(function(value) {
		elem.removeChild(value);
	});
}

// Return a random number in some range(from min to max)
function getRandomNumber(min,max) {
	min = parseInt(min), max = parseInt(max); // convert string to number
	return Math.floor(Math.random() * (max - min + 1)) + min; // generating random number and round up it
}