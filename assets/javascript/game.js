
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

            var choice = myArray[Math.floor(Math.random() * myArray.length)];
                        
            //replace random word with blanks...

            for(var i = 0; i < choice.length; i++){
                underScore += "_ "
            }
            document.getElementById("blanks").innerHTML = underScore;
         
            // create a way for the user input letter choices.


             

                    // create a way for picking letters in a string and compare them to user input

                   document.onkeyup= function(event) {
                        var userInput = event.key;
                    
                    
                    

                    for(var i = 0; i < choice.length; i++){
                                                
                        if(choice == man){
                            if (userInput == man[0]){/*replace underscore with user input*/}
                            if (userInput == man[1]){/*replace underscore with user input*/}
                            if (userInput == man[2]){/*replace underscore with user input*/}    
                        }
                        else{
                        alert("Sorry, Try again");
                        wrongGuess.push(userInput);                    
                        }
                        document.getElementById("wrongGuesses");
                        
                        if(choice == woman){
                            if (userInput == woman[0]){/*replace underscore with user input*/}
                            if (userInput == woman[1]){/*replace underscore with user input*/} 
                            if (userInput == woman[2]){/*replace underscore with user input*/} 
                            if (userInput == woman[3]){/*replace underscore with user input*/} 
                            if (userInput == woman[4]){/*replace underscore with user input*/} 

                        }
                        else{
                            alert("Sorry, Try again");
                            wrongGuess.push(userInput);                    
                            }
                            document.getElementById("wrongGuesses");
                        
                        if(choice == boy){
                            if (userInput == boy[0]){/*replace underscore with user input*/}
                            if (userInput == boy[2]){/*replace underscore with user input*/}
                            if (userInput == boy[3]){/*replace underscore with user input*/}                         
                        }
                        else{
                                alert("Sorry, Try again");
                                wrongGuess.push(userInput);                    
                                }
                                document.getElementById("wrongGuesses");

                        if(choice == girl){
                            if (userInput == girl[0]){/*replace underscore with user input*/}
                            if (userInput == girl[1]){/*replace underscore with user input*/}   
                            if (userInput == girl[2]){/*replace underscore with user input*/}   
                            if (userInput == girl[3]){/*replace underscore with user input*/}                           
                        }
                        else{
                                alert("Sorry, Try again");
                                wrongGuess.push(userInput);                    
                                }
                                document.getElementById("wrongGuesses");
                        }
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