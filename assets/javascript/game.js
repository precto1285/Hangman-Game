
            //global variables/arrays

            var man = ["m", "a", "n"]
            var woman = ["w", "o", "m", "a", "n"]
            var boy = ["b", "o", "y"]
            var girl = ["g", "i", "r", "l"]
            var myArray = [man, woman, boy, girl];
            
            var underScore = "";

            var numGuess = 10;

            var winCount = 0;
            var loseCount = 0;
            var wrongGuess = [];


            //Chooses a random word from myArray

            var compChoice = myArray[Math.floor(Math.random() * myArray.length)];
                        
            //replace random word with blanks...

            for(var i = 0; i < compChoice.length; i++){
                underScore += "_ "
                document.getElementById("blanks").innerHTML = underScore;
            }
//__________________________________________________________________________________________________________________________________________
                    // create a way for picking letters in a string and compare them to user input
                    
                document.onkeyup = function(event) {
                    var userInput = event.key;
                        if(compChoice === man){
                            if (userInput === man[0]){
                                document.getElementById("blanks").innerHTML = userInput += underScore[0];    
                            }
                            if (userInput === man[1]){
                                document.getElementById("blanks").innerHTML = userInput += underScore[1];   
                            }
                            if (userInput === man[2]){
                                document.getElementById("blanks").innerHTML = userInput += underScore[2];    
                            }
                            else{
                                console.log("Sorry, Try again");
                                document.getElementById("wrongGuess").innerHTML = wrongGuess;                    
                                }       
                        }
                        if(compChoice === woman){
                            if (userInput === woman[0]){
                                document.getElementById("blanks").innerHTML = userInput += underScore[0];   
                            }
                            if (userInput === woman[1]){
                                document.getElementById("blanks").innerHTML = userInput += underScore[1];   
                            }
                            if (userInput === woman[2]){
                                document.getElementById("blanks").innerHTML = userInput += underScore[2];    
                            }
                            if (userInput == woman[3]){
                                document.getElementById("blanks").innerHTML = userInput += underScore[3];    
                            }
                            if (userInput === woman[4]){
                                document.getElementById("blanks").innerHTML = userInput += underScore[4];   
                            }else{
                                console.log("Sorry, Try again");
                                document.getElementById("wrongGuess").innerHTML = wrongGuess;                    
                                } 
                        }   
                        if(compChoice === boy){
                            if (userInput === boy[0]){
                                document.getElementById("blanks").innerHTML = userInput += underScore[0];   
                            }
                            if (userInput === boy[1]){
                                document.getElementById("blanks").innerHTML = userInput += underScore[1];   
                            }
                            if (userInput === boy[2]){
                                document.getElementById("blanks").innerHTML = userInput += underScore[2];    
                                }
                            else{
                                console.log("Sorry, Try again");
                                document.getElementById("wrongGuess").innerHTML = wrongGuess;                    
                                }
                        }
                        if (compChoice === girl){                     
                            if (userInput === girl[0]){
                                document.getElementById("blanks").innerHTML = userInput += underScore[0];   
                            }
                            if (userInput === girl[1]){
                                document.getElementById("blanks").innerHTML = userInput += underScore[1];   
                            }
                            if (userInput === girl[2]){
                                document.getElementById("blanks").innerHTML = userInput += underScore[2];    
                            }
                            if (userInput === girl[3]){
                                document.getElementById("blanks").innerHTML = userInput += underScore[3];    
                            }
                            else{
                                console.log("Sorry, Try again");
                                document.getElementById("wrongGuess").innerHTML = wrongGuess;                    
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
