var possibleWords = ["Saturn", "Jupiter", "Dark Matter", "Supernova", "Black Hole", "Asteroid", "Spaceship" ,
"Milky Way", "Universe", "Nebula", "Comet", "Planet", "Galaxy", "Sun", "Earth", "Gravity", "Light Year", 
"Andromeda", "Moon", "Solar Eclipse", "Interstellar", "Extraterrestrial", "Shooting Star", "Meterorite"];

//initialize variables

wins=0;
randomWord = possibleWords[Math.floor(Math.random() * possibleWords.length)];
var letterFormat = "visible";

document.addEventListener("DOMContentLoaded", function(){
  // Handler when the DOM is fully loaded

  //add buttons for vowels and consonants
  var vowels = ["A", "E", "I", "O", "U"];
  var consonants = ["B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "X", "Y", "Z"];

  for (i=0; i<vowels.length ; i++){
    $("#vowels").append('<button CLASS=' + vowels[i] + '>' + vowels[i] + '</button>');
    letterBtn = $("<button>");
  }

  for (i=0; i<consonants.length ; i++){
    $("#consonants").append('<button CLASS=' + consonants[i] + '>' + consonants[i] + '</button>');
    letterBtn = $("<button>");
  }

  //initialize random word, parse out into letters
  // console.log("Current randomWord is " + randomWord)
         function parseLetters(randomWord) {
           for (y=0; y<randomWord.length ; y++){
          //  console.log("iteration number " + y);
              //  if (y === 0) {console.log("answer length is " + randomWord.length);}
                  var letterPos = [];
                    z=y+1;
                    letterPos[y] = randomWord.charAt(y);
                    if (letterPos[y] === " ") {letterPos[y] = "_" };
                    // console.log("letter " + z + " is " + letterPos[y]);
                    var populateThis = "position" + z;
                    var populateWithThis = letterPos[y];
                    // console.log(populateThis);
                    var targetDiv = document.getElementById("word");
                    var setDiv = document.createElement("div");
                    // console.log(setDiv);
                    setDiv.id = populateThis;
                    setDiv.textContent = populateWithThis;
                    if (letterPos[y] === "_") {setDiv.setAttribute("class", "spacebar")}
                    else setDiv.setAttribute("class", letterFormat);
                    targetDiv.appendChild(setDiv);
                    
        }
        }

        function updateScore() {
          document.querySelector("#score").innerHTML = "Wins so far: " + wins;
        }
    
        

      parseLetters(randomWord) ;
      updateScore();
    });
  
document.onkeyup = function(event) {
    var letterPressed = event.key.toLowerCase();
    console.log(letterPressed);
    for (y=0; y<randomWord.length ; y++){

      var letterPos = [];
       z=y+1;
      letterPos[y] = randomWord.charAt(y);
      var populateThis = "position" + z;
      console.log(populateThis);
      var populateWithThis = letterPos[y];
      var targetDiv = document.getElementById("word");
      console.log(targetDiv.populateThis);
      
      if (letterPressed === randomWord.charAt(y)) {
        targetDiv.populateThis.setAttribute("class", "invisible1");
      }      
    }
    }
                
