
            //global variables/arrays

            var man = ["m", "a", "n"]
            var woman = ["w", "o", "m", "a", "n"]
            var boy = ["b", "o", "y"]
            var girl = ["g", "i", "r", "l"]
            var myArray = [man, woman, boy, girl];
            
            var underScore = "";

            var winCount = 0;
            var loseCount = 0;
            var wrongGuess = 0;
     

            //Chooses a random word from myArray

            var choice = myArray[Math.floor(Math.random() * myArray.length)];
                        
            //replace random word with blanks...

            for(var i = 0; i < choice.length; i++){
                underScore += "_ "
            }
            document.getElementById("blanks").innerHTML = underScore;
         
            // create a way for the user input letter choices.

            var userInput = prompt("pick a letter from a-z");
             

                    // create a way for picking letters in a string and compare them to user input
                
                    for(var i = 0; i < choice.length; i++){
                    if(userInput == choice.charSet){
                        alert("Eureka!");
                        underScore[i] += userInput; 
                        }
                    else{
                        alert("Sorry, Try again");
                        userInput.push(wrongGuess);                    
                        }
                        document.getElementById("wrongGuesses");
                    }
                        
            /* use for loop to have the system go through each letter to see if the 
            user input matches an index in the random string 
     
            // for correct guesses, use for loop to replace blanks with correct letter/s.


            //when all letters are filled before or at 10 attempts, user wins!
            if (){
                alert("YOU WIN!");
            }
            
            
            //when number of choices exceeds 10 attempts, user loses
            else{
                alert("Sorry, You have been Hung");
            }*/