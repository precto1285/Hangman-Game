window.onload = function(){


//create global variables
var names = ["Phil", "Robert", "Joseph", "Timothy", 
"Randy", "Jacob", "Adam", "Thomas", "Edward", "William", 
"Edgar", "Hank", "John", "Luke", "George", "Roger"];
var winCount = 0;
var loseCount = 0;
var guessesLeft = 10;
var compChoice = "";
var underScores = "";
var result = "";
var userChoice = "";
var wrongGuess = "";



//initiate game
function startGame() {

    compChoice = "";
    underScores = "";
    userChoice = "";;
    wrongGuess = "";
    guessesLeft = 10;
    //reset all

    //randomly choose a name from the array
    compChoice = names[Math.floor(Math.random() * names.length)];

    //fill in area with hidden name picked from variable
    result = compChoice.split("");
    console.log(result);
    for (var i = 0; i < result.length; i++) {
        underScores += "_ ";
        document.getElementById("blanks").innerHTML = underScores;
    }

    document.getElementById("guessesLeft").innerHTML = guessesLeft;
    document.getElementById("winCount").innerHTML = winCount;
    document.getElementById("loseCount").innerHTML = loseCount;

}


startGame();



document.onkeyup = function (event) {
    userChoice = event.key;
    console.log(userChoice);



    if(result.includes(userChoice)){
        console.log("true");
        underScores += userChoice;
        guessesLeft--;
        correctLetter = JSON.stringify(result);
        console.log(correctLetter);
        var replaceLetter = correctLetter.indexOf(userChoice);
        console.log(replaceLetter);
        //I still need to insert letter to underscore. only pulling interger at this moment.
        document.getElementById("blanks").innerHTML = replaceLetter;
        document.getElementById("guessesLeft").innerHTML = guessesLeft;

    }
    else{
        console.log("false");
        wrongGuess += userChoice;
        guessesLeft--;
        document.getElementById("guessesLeft").innerHTML = guessesLeft;
    }

/*
    //if: user choice equals any letter from underScore:  
    for (var i = 0; i < result.length; i++) {
        console.log("forloop");
        var secretLetter = result[i].toLowerCase();


        if (userChoice === secretLetter) {
            console.log("firing");
            //replace any "_ " with letter chosen 



            for (var i = 0; i < result.length; i++) {
                underScores += userChoice;
                guessesLeft--;
                document.getElementById("guessesLeft").innerHTML = guessesLeft;
            }
            

        }
        if (userChoice !== secretLetter) {
            console.log("user");
            wrongGuess += userChoice;
            guessesLeft--;
            document.getElementById("guessesLeft").innerHTML = guessesLeft;

        }
        
        
    } */

    //if: all underScores are replaced, alert You Won!, increment winCount by 1 and reset game.
    if (underScores.length === 0) {
        alert("You Won!")
        //wincount/lose count
        winCount++
        startGame();
    }

    //if: guessesLeft = 0, alert you lost!, increment loseCounty and reset game.
    if (guessesLeft === 0) {
        alert("You Lose!")
        //wincount/lose count
        loseCount++
        startGame();
    }

}

}