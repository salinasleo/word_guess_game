var possibleWords = ["Saturn", "Jupiter", "Dark Matter", "Supernova", "Black Hole", "Asteroid", "Spaceship" ,
"Milky Way", "Universe", "Nebula", "Comet", "Planet", "Galaxy", "Sun", "Earth", "Gravity", "Light Year", 
"Andromeda", "Moon", "Solar Eclipse", "Interstellar", "Extraterrestrial", "Shooting Star", "Meterorite"];

//initialize variables

var wins=0;
var lettersguessed = ["+"];
var tries=0;
var correctLetters=0;
randomWord = possibleWords[Math.floor(Math.random() * possibleWords.length)];
var currentPressedLetter = " ";



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
  console.log("Current randomWord is " + randomWord);
 
      parseLetters(randomWord) ;
      updateScore();
      remainingTries();
    });

  
    function parseLetters(randomWord) {
      //delete all of it and recreate with updated format
      document.querySelector("#word").innerHTML = " ";
      correctLetters=0;

      for (y=0; y<randomWord.length ; y++){
     //  console.log("iteration number " + y);
         //  if (y === 0) {console.log("answer length is " + randomWord.length);}
             var letterPos = [];
               z=y+1;
               letterPos[y] = randomWord.charAt(y);
               console.log("correct letters " + correctLetters + " out of " + randomWord.length);
               if (letterPos[y] === " ") {letterPos[y] = "_" };
               // console.log("letter " + z + " is " + letterPos[y]);
               var populateThis = "position" + z;
               currentLetter = letterPos[y];
               // console.log(populateThis);
               var targetDiv = document.getElementById("word");
               var setDiv = document.createElement("div");
              //  console.log(setDiv);
               setDiv.id = populateThis;
               setDiv.textContent = currentLetter;
               if (letterPos[y] === "_") {
                 setDiv.setAttribute("class", "spacebar")
                 correctLetters++; 
                  }
               else {
                 for (i=0; i<lettersguessed.length; i++) {
                   console.log("length of letters guessed array is " + lettersguessed.length);
                   if (currentLetter.toLowerCase() === lettersguessed[i]) {
                    setDiv.setAttribute("class", "visible"); 
                    correctLetters++; 
                    i= lettersguessed.length;
                   
               }
               else setDiv.setAttribute("class", "invisible1");
              }}
               targetDiv.appendChild(setDiv);
               updateScore();
     }
    }



document.onkeyup = function(event) {
  readme = event.key.toLowerCase();
    currentPressedLetter = readme;
    lettersguessed.push(readme);
    // console.log("letter guessed first " + lettersguessed[0]);
    // console.log("frst two letter guessed " + lettersguessed[0] + lettersguessed[1]);
    // console.log("first three letter guessed "  + lettersguessed[0] + lettersguessed[1] + lettersguessed[2]);
    tries = tries+1;
    console.log("tries so far" + tries);
    console.log(currentPressedLetter);
    parseLetters(randomWord);
    remainingTries();
    // return tries;
    // return left;
    }
                
    function updateScore() {
      if (correctLetters === randomWord.length) {
        wins++;
        // document.querySelector("#word").innerHTML = "";
        tries=0;
        lettersguessed.length = 0;
        lettersguessed[0] ="+";
        correctLetters=0;
        randomWord = possibleWords[Math.floor(Math.random() * possibleWords.length)];
        console.log("Current randomWord is " + randomWord);
        currentPressedLetter = "";
        parseLetters(randomWord);
      }

      document.querySelector("#score").innerHTML = "Wins so far: " + wins;
    }
 
    function remainingTries() {
     document.querySelector("#guesses").innerHTML = "Guesses Left: " + (10 - tries);
   }
   
