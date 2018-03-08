
//global variables/arrays

var Philippe = {
    "p": "unselected", 
    "h": "unselected", 
    "i": "unselected", 
    "l": "unselected", 
    "i": "unselected", 
    "p": "unselected", 
    "p": "unselected", 
    "e": "unselected"
    };
console.log(Philippe);
var Anthony = {
    "a": "unselected", 
    "n": "unselected", 
    "t": "unselected", 
    "h": "unselected", 
    "o": "unselected", 
    "n": "unselected", 
    "y": "unselected"
    };
console.log(Anthony);
var Guillermo = {
    "g": "unselected", 
    "u": "unselected", 
    "i": "unselected", 
    "l": "unselected", 
    "l": "unselected", 
    "e": "unselected", 
    "r": "unselected", 
    "m": "unselected",  
    "o": "unselected"
    };
console.log(Guillermo);
var Jan = {
    "j": "unselected", 
    "a": "unselected", 
    "n": "unselected"
    };
console.log(Jan);
var Dan = {
    "d": "unselected", 
    "a": "unselected", 
    "n": "unselected"
    };
console.log(Dan);
var Travell = {
    "t": "unselected", 
    "r": "unselected", 
    "a": "unselected", 
    "v": "unselected", 
    "e": "unselected", 
    "l": "unselected", 
    "l": "unselected"
    };
console.log(Travell);
var Cameron = {
    "c": "unselected", 
    "a": "unselected", 
    "m": "unselected", 
    "e": "unselected", 
    "r": "unselected", 
    "o": "unselected", 
    "n": "unselected"
    };
console.log(Cameron);
var Diego = {
    "d": "unselected", 
    "i": "unselected", 
    "e": "unselected", 
    "g": "unselected", 
    "o": "unselected"
    };
console.log(Diego);
var myArray = [Philippe, Anthony, Guillermo, Jan, Dan, Travell, Cameron, Diego];

var letterState = [];
console.log(letterState);
var dupeLetters = 0;

var numGuess = 10;

var winCount = 0;
var loseCount = 0;
var correctGuess = 0;
var wrongGuess = [];
console.log(wrongGuess);
var correctAnswer = "";
console.log(correctAnswer);
var compChoice = "";










console.log(myArray);
console.log(letterState);
console.log(dupeLetters);
console.log(numGuess);
console.log(winCount);
console.log(loseCount);
console.log(wrongGuess);
console.log(correctGuess);
console.log(correctAnswer);



//Chooses a random word from myArray



//replace random word with blanks...



alert("HANGMAN!!!");
//__________________________________________________________________________________________________________________________________________
// create a way for picking letters in a string and compare them to user input

function startGame() {
    compChoice = myArray[Math.floor(Math.random() * myArray.length)];
    console.log(compChoice);
    var underScore = "";
    console.log(underScore);
    wrongGuess.length = 0;
    numGuess = 10;
    letterState.length = 0;
    

    for (var i = 0; i < compChoice.length; i++) {
        underScore += "_ ";
        letterState.length[i] = "unselected";
    }
    document.getElementById("blanks").innerHTML = underScore;

}

startGame();

document.onkeyup = function (event) {
    var userInput = event.key;

    userInput = userInput.toLowerCase();
    dupeLetters = 0;
    for (var i = 0; i < compChoice.length; i++) {
        if (userInput === compChoice[i].key && compChoice[i].value === "blanks") {
            var gotcha = correctAnswer += compChoice[i];
            document.getElementById("blanks").innerHTML = gotcha ;
            console.log(gotcha);
            console.log(compChoice[i].key);
            console.log(compChoice[i].value);
        }
        else if (userInput === compChoice[i].key && compChoice[i].value === "unselected") {
            compChoice[i].value = "blanks";
            dupeLetters++;
            numGuess--;
            document.getElementById("guessesLeft").innerHTML = numGuess;
        }
        else if (compChoice[i].value === "blanks") {
            correctAnswer += compChoice[i];

        }
        else {
            correctAnswer += "_ " ;
        }

    }

    if (dupeLetters > 0) {
        compChoice[userInput].value = "correct";
        correctGuesses += dupeLetters;

    }

    document.getElementById("blanks").innerHTML = correctAnswer;

    if (compChoice.length === correctGuess) {
        alert("You Win!!");
        startGame();
    }
        var isPartofSolution = false;
    for(var i=0; i<compChoice.length; i++){
        if(userInput === compChoice[i].key){
            isPartofSolution = true;
        }
        console.log(isPartofSolution);
    }
    if (dupeLetters === 0 && !isPartofSolution) {
        wrongGuess.push(userInput);
        numGuess--;
        document.getElementById("guessesLeft").innerHTML = numGuess;
        var wrongLetterDisplay = "";
        console.log(wrongLetterDisplay);
        for (var i = 0; i < wrongGuess.length; i++) {
            wrongLetterDisplay += wrongGuess[i] + " ";
        }
        document.getElementById("wrongGuess").innerHTML = wrongLetterDisplay;
    }

    if (numGuess === 0) {
        loseCount++;
        alert("Nice Try!");
        document.getElementById("loseCount").innerHTML = loseCount;
        startGame();
    }
}

//Sigh...I couldn't de-bug it! It is so frustrating!!!!!!!!!!!!!!!!!!!!!!! :(


/*       original attempt:        
                        if(compChoice === man){
                        document.onkeyup = function(event) {
                               var userInput = event.key;
                            if (userInput === man[0]){
                                    var ansM = userInput += underScore[0];
                                document.getElementById("blanks").innerHTML = ansM;    
                            }
                            if (userInput === man[1]){
                                    var ansA = userInput += underScore[1];
                                document.getElementById("blanks").innerHTML = ansA;   
                            }
                            if (userInput === man[2]){
                                    var ansN =userInput += underScore[2];
                                document.getElementById("blanks").innerHTML = ansN;    
                            }
                            else{
                                console.log("Sorry, Try again");
                                document.getElementById("wrongGuess").innerHTML = wrongGuess + userInput;                    
                                }       
                        }
                        }

                        if(compChoice === woman){
                        document.onkeyup = function(event) {
                                var userInput = event.key;    
                            if (userInput === woman[0]){
                                    var ansW = userInput += underScore[0];
                                document.getElementById("blanks").innerHTML = ansW;   
                            }
                            if (userInput === woman[1]){
                                    var ansO = userInput += underScore[1];
                                document.getElementById("blanks").innerHTML = ansO;   
                            }
                            if (userInput === woman[2]){
                                    var ansM = userInput += underScore[2]
                                document.getElementById("blanks").innerHTML = ansM;    
                            }
                            if (userInput == woman[3]){
                                    var ansA =userInput += underScore[3]
                                document.getElementById("blanks").innerHTML = ansA;    
                            }
                            if (userInput === woman[4]){
                                    var ansN = userInput += underScore[4]
                                document.getElementById("blanks").innerHTML = ansN;   
                            }else{
                                console.log("Sorry, Try again");
                                document.getElementById("wrongGuess").innerHTML = wrongGuess + userInput;                    
                                } 
                        }   
                        }                        
                        
                        if(compChoice === boy){
                        document.onkeyup = function(event) {
                                var userInput = event.key;
                            if (userInput === boy[0]){
                                    var ansB = userInput += underScore[0]
                                document.getElementById("blanks").innerHTML = ansB;   
                            }
                            if (userInput === boy[1]){
                                    var ansO = userInput += underScore[1]
                                document.getElementById("blanks").innerHTML = ansO;   
                            }
                            if (userInput === boy[2]){
                                    var ansY = userInput += underScore[2]
                                document.getElementById("blanks").innerHTML = ansY;    
                                }
                            else{
                                console.log("Sorry, Try again");
                                document.getElementById("wrongGuess").innerHTML = wrongGuess + userInput;                    
                                }
                        }
                        }
                        
                        if (compChoice === girl){
                        document.onkeyup = function(event) {
                                var userInput = event.key;                     
                            if (userInput === girl[0]){
                                    var ansG = userInput += underScore[0]
                                document.getElementById("blanks").innerHTML = ansG;   
                            }
                            if (userInput === girl[1]){
                                    var ansI = userInput += underScore[1]
                                document.getElementById("blanks").innerHTML = ansI;   
                            }
                            if (userInput === girl[2]){
                                    var ansR = userInput += underScore[2]
                                document.getElementById("blanks").innerHTML = ansR;    
                            }
                            if (userInput === girl[3]){
                                    var ansL = userInput += underScore[3]
                                document.getElementById("blanks").innerHTML = ansL;    
                            }
                            else{
                                console.log("Sorry, Try again");
                                document.getElementById("wrongGuess").innerHTML = wrongGuess + userInput;                    
                                }                           
                        }
                        }
                        
                            
                        

/*
            if (all the letters have been guessed correctly) {
                alert("You Got it!");
                winCount + 1;
            }    
            
            if (wrongGuess == 10){
                console.log("Sorry, You have been Hung");
                loseCount + 1;
            }
            
*/
