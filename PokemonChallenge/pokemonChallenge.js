let pokeNameNumber = document.getElementById('poke-name-number');
let pokeSprite = document.getElementById('sprite');
let pokeType1 = document.getElementById('type1');
let pokeType2 = document.getElementById('type2');
let form = document.querySelector('form');

function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

function displayPokemonData(pokemon) {
  console.log(pokemon);


  pokeNameNumber.innerText = `${capitalize(pokemon.name)} #${pokemon.id}`;
  pokeSprite.alt = pokemon.name;
  pokeSprite.src = pokemon.sprites.front_default;

  pokeType1.innerText = capitalize(pokemon.types[0].type.name);
  if(pokemon.types[1]) { // by just having a reference to a variable or value, we are asking "if this variable has ANY value that is truthy" (meaning non-zero and defined)
  pokeType2.innerText = capitalize(pokemon.types[1].type.name);
  pokeType2.style.visibility = 'visible';
  } else {
    // pokeType2.innerText = '';
    pokeType2.style.visibility = 'hidden';
  }
}

async function getPokemonData(pokemon) {
  let result = await fetch('https://pokeapi.co/api/v2/pokemon/' + pokemon);
  let pokeData = await result.json();

  displayPokemonData(pokeData);
}


// getPokemonData();
// this instead will run this function when my webpage loads
window.onload = (event) => {
  getPokemonData('bellsprout');
}

form.addEventListener('submit', e => {
  e.preventDefault();
  console.log(e.target.search.value);
  getPokemonData(e.target.search.value);
})



//? Our Work in a group prior to Jerome's example
/*let apiEndpoint = 'https://pokeapi.co/api/v2/pokemon/squirtle';

fetch(apiEndpoint)
 //.then(response => console.log(response))
 .then(response => response.json())
 // .json() method will translate my respone object into a readable JSON object which I can then treat as any other object within my code
 .then(data => {
  console.log(data);
  let pokeName;
  pokeName = document.getElementById('name');
  pokeName.innerText = data.name;


  
  let numberId = document.getElementById('number');
  numberId.innerText = `#${data.id}`;

  let pokeImage = document.createElement ('img');
  pokeImage.src = data.sprites.front_default;
  document.getElementById("sprite").appendChild(pokeImage);

  const locationContainer = document.getElementById('encounter');
  fetch(data.location_area_encounters)
 .then(response => response.json())
 .then(locations => {  
  console.log(locations);
  let displayLocation = document.getElementById('encounter');
  displayLocation.innerText = currentLocation.location_area.name;
  locationContainer.getElementById('encounter');
 })
})*/
