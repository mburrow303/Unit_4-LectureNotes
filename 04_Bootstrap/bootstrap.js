/*
? Create a new row and display it on my webpage in the given area (id=target)

 *1. create the div element for our new row
 *2. start creating new columns for our row
 *3. apply some classes to our columns/rows
 *4. add content to our columns
 *5. add our row to our webpage
*/

let row = document.createElement('div');
let column1 = document.createElement('div');
let column2 = document.createElement('div');
let column3 = document.createElement('div');

row.className = 'row'; // this overrides our "class" attribute on the element itself
column1.classList.add('col'); // this affects our classes as an array
column2.className = 'col';
column3.classList.add('col'); // .remove('col') will remove a given class from that element

// Add some text to my columns
column1.innerText = 'DOM Element Number 1';
column2.innerHTML = 'DOM Element Number 2';
column3.innerHTML = '<button type="button" class="btn btn-info">Info</button>';

// add my columns into my row, and my row onto the webpage
row.appendChild(column1);
row.appendChild(column2);
row.appendChild(column3);

// select my element with the id "target" from my document
let target = document.getElementById('target');
target.appendChild(row);