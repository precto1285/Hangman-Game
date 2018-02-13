/* //Variables of my classmates names***
var name = ["Anthony", "Philippe", "Dan", "Jan", "Guillermo", "Travell"];
//Variables of my letters***
var letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var attemptCount = [10]

//This is where the computer will pick a name from the array
var gamestart = name[Math.floor(Math.random() * name.length)];
console.log(gamestart);

//User controls
document.onkeyup = function(event){
    var attempt = event.key.toLowerCase();
}

//This is where the users choice of letter is evaluated against the name randomly picked by the computer. 

if (var i=0; i < gamestart.length; i++){
    if(attempt === gamestart[i]){
        console.log(Gotcha!)
       return; 
        }
    }
    else if (i < gamestart.length; - 1){
        console.log(Whoops!)
    }
    else {
        console.log("Sorry, Game Over.")
        attemptCount = attemptCount -1
    }

}

*/


 // taken from https://www.youtube.com/watch?v=dvSKEXmYtMM

 var wordblanks = ['anthony', 'travell', 'dan', 'jan', 'guillermo', 'cameron'];
 var wins = 0;
 var loss = 0;
 var wrongLetter = [];
 var guessesLeft = 10;
 var underScores = [];
 var userGuesses = [];
 var ranWord = [];
 var winCounter = 0;


 //Function
 function startGame(){
     // picks random word
     ranWord = wordblanks[Math.floor(Math.random() * wordblanks.length)];
     console.log('Random Word = ' + ranWord);
     for(var i = 0; i < ranWord.length; i++)
     {
         underScores.push('_');
     }
     //Printing underscores to the screen
     document.getElementById('wordblanks').textContent = underScores.join(" ");
     console.log(underScores)
     //reset
     wrongLetter = [];
     guessesLeft = 10;

     //HTML
     document.getElementById('guessesLeft').textContent = guessesLeft;
 }

// function created to alert a winner or loser depending on the guesses of letters inputted    
function winLose(){
 if(winCounter === ranWord.length){
     alert('Winner!');
      
 }
 else if(guessesLeft === 0){
     alert('You Lose!');
     
 }

}

//User Guesses
document.onkeyup = function(event){
 userGuesses = event.key;
 //Checking if the letter exist inside of the word.
 if(ranWord.indexOf(userGuesses) > -1){
     for(var i = 0; i < ranWord.length; i++){
         if(ranWord[i] === userGuesses){
             underScores[i] = userGuesses;
             console.log(underScores);
             winCounter++;
             winLose();
         }
     }
 }
 else{
     wrongLetter.push(userGuesses)
     guessesLeft--;
     console.log(wrongLetter);   
     winLose();
 }
}        

 //Main

 startGame();

 //
 console.log(ranWord[0]);
