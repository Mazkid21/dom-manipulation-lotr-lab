console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');


// Part 1


function makeMiddleEarth() {
  var middleEarth = document.createElement("section");
  middleEarth.setAttribute("id", "middle-earth");

  document.body.append(middleEarth); 

  for (i=0; i < lands.length; i++) {
    var article = document.createElement("article");
    var landName = document.createElement("h1"); 
    landName.innerText = lands[i]; 
    article.append(landName);
    middleEarth.append(article); } 

    document.body.append(middleEarth);

  // create a section tag with an id of middle-earth
  // inside, add each land as an article tag
  // inside each article tag include an h1 with the name of the land
  // append middle-earth to your document body
}

makeMiddleEarth();


// Part 2

function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the first article tag on the page)
  var list = document.createElement("ul");
  var article = document.getElementsByTagName("article");
     article[0].append(list);
   
   for (i=0; i < hobbits.length; i++) {
    var listItems = document.createElement("li");
   
   listItems.append(hobbits[i]);
   listItems.className = "hobit";
    list.append(listItems);

    var at = listItems.setAttribute("class", "People"); 
     

} 
  

  // give each hobbit a class of hobbit
}

makeHobbits();

// Part 3

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
    var frodo = document.querySelector("li");
    var div = document.createElement("div");
    
       div.setAttribute("id", "the-ring");
  // give the div a class of 'magic-imbued-jewelry'
       div.setAttribute("class", "magic-imbued-jewelry");
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
    
       div.addEventListener("click", nazgulScreech);
 // add the ring as a child of Frodo

       frodo.appendChild(div);  
 
}

keepItSecretKeepItSafe();
// Part 4


function makeBuddies() {
  // create an aside tag
  var article = document.getElementsByTagName("article");
  var aside = document.createElement("aside");
  var listBud = document.createElement("ul");
   var budLi = document.createElement("li");
    for (i=0; i < buddies.length; i++); {
   budLi.append(buddies[0]); }
  // attach an unordered list of the 'buddies' in the aside
   
  var buddy = buddies[i];
 
  var name = document.createTextNode(buddy);
      
      listBud.append(budLi);
      aside.append(listBud);
      article[1].appendChild(aside);
    
  // insert your aside as a child element of rivendell
  //aside.appendChild(lands[1]);
}

makeBuddies();

// Part 5


function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
}


// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
}


// Part 7


function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
}


// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
}


// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
}


// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
}


// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
}


// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
}
