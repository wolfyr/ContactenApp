// get input element
let filterInput = document.getElementById('userInput');
// Create a EventListener for the filterInput variable
filterInput.addEventListener('keyup', filterNames);



/*Function to check if the name is in the list
and if not removes non matching names with css*/
function filterNames(){
  // Get the input value and store it in a variable
  let filterValue = document.getElementById('userInput').value.toUpperCase();

  // Safe the UL so I can get the to the LI
  let ul = document.getElementById('contacten');
  // Get al li elements with a class of collection-header to compare them to the input
  let li = ul.querySelectorAll('li.collection-item');

  // A loop to compare the input with all the li collection-header elements
  for(let i = 0;i < li.length; i++){
    let a = li[i].getElementsByTagName('a')[0];

    // If the input matches do nothinh
    if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1){
      li[i].style.display = '';
    // If the input does not match set the css style to none
    } else {
      li[i].style.display = 'none';
    }
  }

}



/*
Wat is nodig om mensen toe te voegen via de button

1. Het button HTML element in een var opslaan

2. Een EventListener maken voor de button die de input toevoegd.

3. Functie voor de EventListener

Wat moet de functie doen?

Input pakken en deze toevoegen aan het juiste html element.

1. Sla de eerste letter van de input value van het HTML element op in een var en maak deze toUpperCase

2. Sla de volledige input op in een variable

3. Sla de UL op in een var zodat we aan de li collection-header kunnen komen

4. Sla alle li collection-header op in een var om te vergelijken met de eerste letter van de input

5. Loop die alle Li collection-header naloopt en matched met de eerste letter van de input


Wat moet er in de loop gebeuren?

1. Controller of de letter eerste letter van de input overeen komt met de huidige Li collection-header

2. Als dit niet het geval is doe niks en ga naar de volgende index van de li headers

3. Als het wel het zelfde is voeg de volledige input toe aan de betreffende collection-header li

*/

let addUserButton = document.getElementById('addUser');

addUserButton.addEventListener('click', addNewUser);

function addNewUser(){

  //Get the input and save in in a variable
  let newNameInput = document.getElementById('userInput').value;

  var li = "<li>" + newNameInput + "</li>"
  //Safe the UL in a variable
  let ul = document.getElementById('contacten');

  /*Take all h5 elemtens with and class of contactIndex to
  compare it to the first letter of the input to match the
  H5 with a class of contactIndex*/
  let contactIndex = ul.querySelectorAll('h5.contactIndex');

  /*Loop to go to all the H5 with a class of contactIndex
  and compare the input to it. If its the same
  add it to the list else go on to the H5 with a class of contactIndex*/
  for(let i = 0;i < contactIndex.length; i++){
    let a = contactIndex[i];

    if(a.innerHTML == newNameInput.charAt(0).toUpperCase()){
      ul.innerHTML += li;

    }
  }


}
