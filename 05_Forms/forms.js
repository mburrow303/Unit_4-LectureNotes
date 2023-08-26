// TODO when I submit my form, add the pizza from the user into the table body, this will be in the format of:
//? | 2 | Matt | Medium | Pepperoni

// grab some information from my webpage
let form = document.querySelector('form'); // <form>
let table = document.querySelector('tbody'); // <tbody>

// keep track of whatever order number I am on, starting from 1 when the page loads
let currentOrder = 1; // will increment this by 1 each time we add a new order

function displayOrder(event) {
 // by default, the submit event on a from refreshes the page
 event.preventDefault(); // this method stops the default behavior of the event
 console.log(event);
 console.log(event.target); // this is the element being targeted by the event which is happening (form element)
 console.log(form); // the form element
 console.log(form.orderName); // an entire input field
 console.log(form.orderName.value); // the name input by the user

 console.log(form.toppings.value); // the toppings input by the user

 console.log(form.size.value); // the value from the checked radio button
}

// listen for when the form is submitted
form.addEventListener('submit', displayOrder); 