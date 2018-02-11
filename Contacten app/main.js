// krijg de input en sla deze op in een variabele
let filterInput = document.getElementById('userInput');
// Maak gebruik van een EventListener om de input in een functie te voeren
filterInput.addEventListener('keyup', filterNames);

/*Functie om te input te vergelijken met de list items
en deze te verwijderen als dat niet het geval is*/
function filterNames(){
  // Krijg de daadwerkelijke input
  let filterValue = document.getElementById('userInput').value.toUpperCase();

  // Krijg het UL element zodat je aan de il elementen kan komen
  let ul = document.getElementById('contacten');
  // Krijg de li van de ul elementen om later te vergelijken met de  input
  let li = ul.querySelectorAll('li.collection-item');

  // Maak een loop om door alle li elemten te gaan en deze te vergelijken met de input
  for(let i = 0;i < li.length;i++){
    let a = li[i].getElementsByTagName('a')[0];
    // Als de input matched met een li doe niks aan de CSS
    if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1){
      li[i].style.display = '';
    // Als de input niet matches met een li verwijder deze doormiddel van CSS
    } else {
      li[i].style.display = 'none';
    }
  }

}
