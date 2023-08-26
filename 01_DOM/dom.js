/*
! DOM
  - Document Object Model
  - only available through the browser

 - document: HTML page
   - it is used as a global variable (do not overwrite this!)
 - object: document is represented as an object containing each element (nodes)
   - lists, divs, images, etc...
 - model: it represents the arrangement of these elements, or nodes, on the page     

 Basic Structure: 
 - Document
  - HTML
   - Head
    - Meta
    - Title
   - Body
    - Header
    - Div
     - Anything inside a div
*/
// console.log('Hello from dom.js');

// document object
console.log(document);
console.log(document.URL); // print a string that shows my current URL
console.log(document.location); // print out an object containing information about my webpage
console.log(document.title); // DOM Practice
document.title = "DOM Lesson Updated";
console.log(document.title); // "DOM Lesson Update"

// Create new element(s)
/*
 1. create the new empty element
 2. edit that new element
  - adding text
  - changing styling
 3. add the element to the webpage
 */ 
// STEP 1: Create the new element
let h1 = document.createElement('h1'); // <h1><h1>
console.log(h1);

/*
 h1 variable now has access to various properties:
  - innerHTML: store and allow us to insert HTML into this element
  - innerText: return or allow us to edit the text within this element
  - textContent: will return the full text
  ex:
   <p>Hello<b>World</b></p>
   - innerText would return "Hello"
   - textContent would return "Hello World"
*/
// STEP 2: Editing the element's properties
h1.innerText = "Creating my first DOM element!"; // <h1></h1>
console.log(h1);

// STEP 3: Adding elements to the webpage
console.log(document.body); 
//! document.body = h1; NO GO!!!
document.body.appendChild(h1);
// .appendChild() method will add our new element to the bottom of the body tag

h1.innerText = "Editing my first DOM element!";

// style an element
h1.style.color = "blue"; // edit the style property, specifically the color style, and set it to blue
h1.style.textAlign = "center" // text-align:center;

h1.style = "text-shadow: 2px 2px 2px yellow"; // this will override the styling with a text shadow

h1.className = "blue-with-shadow example-element"; // give the h1 tag a class
h1.id = "first-element"; // assign an id to this element

console.log(h1.classList); // shows a list of classes on the h1 element (an array of classes)


/*
 1. create new element
 2. edit the new element
 3. add the element to the webpage
*/

let subHeading = document.createElement('h3'); // <h3></h3>

subHeading.innerText = 'What should I do before leaving town?';
subHeading.style.color = 'pink';

document.body.appendChild(subHeading); // parent.appendChild(newChild);

//! Finding Elements
// Find Multiple Elements
/*
 HTML Collection
  - an array-like object
  - allow access to index, properties, and methods to help us navigate and modify it
  - does NOT allow us to modify multiple elements at once
  - CAN loop through it
  can use the .length property to get the number of items it contains

 Accessing multiple elements requires these methods:
  - getElementsByTagName()
  - querySelectorAll()
  - getElementsByClassName()
*/

let listItems = document.getElementsByTagName('li');
console.log(listItems);

console.log(listItems[0]);
let bathroom = listItems[0];
bathroom.style.color = "darkred";

//! ERROR: style not defined on the "li" object
//li.style.color = "darkblue";

for (let item of listItems) {
  console.log(item); // what IS item?
  item.style.color = "darkblue";
  item.style.textAlign = "center";
}

/*
 *.querySelector()
  - grab the first instance of an element matching your selector, or null if nothing is found
  - you can target by either ID, Class (CSS Class NOT JS), or Element
   - will need # for ID
   - will need . for Class (CSS Class)
*/

//? This will only grab the FIRST instance of our selector
let toDoList = document.querySelector('#list-title');
console.log(toDoList);

toDoList.style.textAlign = 'center';

//* .querySelectorAll()
let nodeListLi = document.querySelectorAll('li');
console.log(nodeListLi); // return a NodeList: similar to an HTML Collection, though it IS an array not an array-like object


//! Event Listeners
/*
 Allow us to execute a function when a specific event occurs

 These events may include:
  - pressing a key down
  - lifting a key up
  - clicking
  - submitting a form

 .addEventListener()
  - DOM node method
  - requires an event to "listen for" as well as a callback function, which will run when that event happens
*/

// first up, we need to know WHAT is listening for an event
let button = document.getElementById('submit'); //* this does NOT want a # in it, the method already knows it is looking for an ID
let input = document.querySelector('input');
// next, we are going to begin listening for some event, and have a callback function ready
//console.log(button);
//console.log(input);
//? function buttonClick() {
//?
//?}


button.addEventListener("click", (currentEvent)=>{
  console.log(currentEvent);
  console.log('Someone clicked the button');
  console.log(input.value); // input.value is going to contain the text from a user in our input field
  let newListItem = document.createElement('li');
  newListItem.innerText = input.value;
  let unorderedList = document.getElementById('ul-to-do');
  unorderedList.appendChild(newListItem);
});

/*
TODO Add an item input by the user to our todo list
 have access to our button
 *need some way to access that user input field
 *  - specifically the text FROM the input field ("that item")
 *  - add the item to our todo list
 the button to do something when we click it
 
*/