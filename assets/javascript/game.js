//Variables of my classmates names***
var name = ["Anthony", "Philippe", "Dan", "Jan", "Guillermo", "Travell"];
//Variables of my letters***
var letter = ["a" "b" "c" "d" "e" "f" "g" "h" "i" "j" "k" "l" "m" "n" "o" "p" "q" "r" "s" "t" "u" "v" "w" "x" "y" "z"];
//This is where the computer will pick a name from the array
var gamestart = name[Math.floor(Math.random() * name.length)];
console.log(gamestart);

//User controls
document.onkeyup = function(event){
    var attempt = event.key.toLowerCase();
}

function myFunction (){
    var gamestart;
    var res = gamestart.charArt()
}


//This is where the users choice of letter is evaluated against the name randomly picked by the computer. 

if (attempt === /*letter available in the name selected by the computer*/){
    // the computer adds the letter into the empty word
}
else{

}