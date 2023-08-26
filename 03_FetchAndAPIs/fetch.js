/*
? API
 *Application
 *Program
 *Interface

 Client to communicate with the server (database)
  - we can ask, or "request" something from an API, and it will search a database to give us back information

 Allow HTTP request and response lifecycle
  
 When receiving data from an API, it is typically formatted in JSON

 ? JSON
  *JavaScript
  *Object
  *Notation
  JSON is a lightweight way to store and transfer data
  relatively easy to understand

  ! Syntax
  {
    "key": "value",
    "key": true,
    "key": 0
  }

  - all of my keys in JSON format are goint to be strings, my values do not change
  - data is separated by a comma, HOWEVER we are not allowed to have a trailing comma (no comma on our last property)
  - cannot hold comments OR functions
*/

let apiEndpoint = 'https://pokeapi.co/api/v2/pokemon/squirtle';

/*
 ? Fetch
  - IS an API
  - is what allows us to gather information from an api, and get back some results
  - a function that takes in 1 argument, which will be the loation we want to get information from
  - handle the request AND response
  - returns a promise
    - we have access to our resolvers (.then, .catch)
*/

// fetch is provided to us by our !document!
fetch(apiEndpoint)
 //.then(response => console.log(response))
 .then(response => response.json())
 // .json() method will translate my respone object into a readable JSON object which I can then treat as any other object within my code
 .then(data => {
  console.log(data);
  // 1. create variable AND create a new element
  let pokeName;
  pokeName = document.createElement('h1');
  // 2. change the text of our header element
  pokeName.innerText = data.name;
  // 3. append the child onto the webpage
  document.body.appendChild(pokeName);
  
  /*
!    Challenge
?       Display onto the webpage ONE of the pokemon's ability names
?       as well as ONE of the images (sprites) of the pokemon
  */

// TODO display one of the ability names
let pokeAbility = document.createElement('h3');
pokeAbility.innerText = data.abilities[0].ability.name;
document.body.appendChild(pokeAbility);

/*
! Challenge 8/19/23
TODO Display all areas/locations where this pokemon can be encountered
* location_area_encounter
* use that url to get more information
*/
const locationContainer = document.createElement('div');
document.body.appendChild(locationContainer);
//? Get information from this location_area_encounter link
console.log(data.location_area_encounters);
fetch(data.location_area_encounters)
.then(response => response.json())
.then(locations => {  
console.log(locations);
//? figure out what *kind* of information I get from that link
//* Array of Objects
//? figure out how I want to diplay that information
locations.forEach(currentLocation => {
 console.log(currentLocation);
 
 let displayLocation = document.createElement('h4');
 displayLocation.innerText = currentLocation.location_area.name;// the name of my current location
 locationContainer.appendChild(displayLocation);
 })
});

// TODO display one of the sprites (images)
let pokeImage = document.createElement('img');
pokeImage.src = data.sprites.front_default;
document.body.appendChild(pokeImage);

/*
! Challenge

? create an unordered list containing every "move" a pokemon will learn
* "a pokemon" means whichever one you have chosen
*/
// Code here

let movesList = document.createElement('ul'); //? <ul></ul>
let moves = data.moves;

moves.forEach((current) => {
  //console.log(current.move.name);
  let li = document.createElement('li'); //? <li></li>
  li.innerText = current.move.name;
  movesList.appendChild(li);
})

document.body.appendChild(movesList);

})
.catch(error => console.error(error))
//.catch(console.error)
