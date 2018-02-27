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

// Event Listeners
// Generating a random example of fact at start, when page loaded
document.addEventListener('DOMContentLoaded', function() {
	// isExmp = true, bcs that gonna be an examp of fact view for user
	getFactByNumber(getRandomNumber(0, 1000), true);
});
window.addEventListener('resize', setBodyRelevantHeight); // when window change it size, so I change height of body
document.getElementById("number").addEventListener("input", validateInput); // validate input
document.getElementById("getFact").addEventListener("click", getFact); // get and post fact

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
			// If its not exmp, so print fact (bcs I dont get promise here, I get value, bcs the Fetch has been started yet)
			if (!isExmp) printFact(num, result, isExmp);
			/* Checking status and if it's ok return the response(fact)
			 if (result.status == 200 && isExmp) return result.text(); */
			else if (result.status == 200) return result.text();
		})
		.then((fact) => {
			// Just printing the fact and number in HTML.
			if (isExmp) printFact(num, fact, isExmp);
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