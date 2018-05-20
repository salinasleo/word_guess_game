var possibleWords = ["Saturn", "Jupiter", "Dark Matter", "Supernova", "Black Hole", "Asteroid", "Spaceship" ,
"Milky Way", "Universe", "Nebula", "Comet", "Planet", "Galaxy", "Sun", "Earth", "Gravity", "Light Year", 
"Andromeda", "Moon"];

//initialize variables

wins=0;
randomWord = possibleWords[Math.floor(Math.random() * possibleWords.length)];



document.onkeyup = function(event) {
    var letterPressed = event.key.toLowerCase();
    console.log(letterPressed);

         console.log("Current randomWord is " + randomWord)
         function parseLetters(randomWord) {
           for (y=0; y<randomWord.length ; y++){
           console.log("iteration number " + y);
               if (y === 0) {console.log("answer length is " + randomWord.length);}
                  var letterPos = [];
                    z=y+1;
                    letterPos[y] = randomWord.charAt(y);
                    console.log("letter " + z + " is " + letterPos[y]);
                  var populateThis = "position" + z;
                  var populateWithThis = letterPos[y];
                    console.log(populateThis);
                    var targetDiv = document.getElementById(populateThis);
                    console.log(targetDiv);
                    targetDiv.textContent = populateWithThis;
                    targetDiv.setAttribute("class", "visible");
        }
        }
      parseLetters(randomWord) ;
    }
                
  
