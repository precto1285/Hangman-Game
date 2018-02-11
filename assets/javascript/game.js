//Variables of my classmates names***
var name = ["Anthony", "Philippe", "Dan", "Jan", "Guillermo", "Travell"];
//Variables of my letters***
var letter = ["a" "b" "c" "d" "e" "f" "g" "h" "i" "j" "k" "l" "m" "n" "o" "p" "q" "r" "s" "t" "u" "v" "w" "x" "y" "z"];

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
    else if (i < gamestart.length; - 1){
        console.log(Whoops!)
    }
    else {
        console.log("Sorry, Game Over.")
        attemptCount = attemptCount -1
    }

}
else{

}