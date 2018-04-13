        //Array of Words
        var wordsList = ['kitchen', 'backyard', 'frontyard', 'garage', 'bedroom', 'television', 'stove', 'table', 
        'chair', 'couch', 'lamp', 'attic', 'bookshelf', 'closet', 'bathroom', 'sink'];
        //Word Picked by the computer
        var chosenWord = '';
        //This is the letters that are in the chosenWord
        var lettersInChosenWord = [];
        //number of blanks we show based on the word picked
        var numBlanks = 0
        //Holds a mix of blank and solved Letters
        var blanksAndSuccess = [];
        //Holds all wrong guesses
        var wrongGuesses = [];

        //Game counters
        var winCounter = 0;
        var lossCounter = 0;
        var numGuesses = 9;



        // create a function to start game();
        function startGame(){
            
            //reset the guesses back to 0.
            numGuesses = 9;

            //mystery word is chosen randomly from wordlist.
            chosenWord = wordsList[Math.floor(Math.random() * wordsList.length)];
            //The word is broken into individual letter.
            lettersInChosenWord = chosenWord.split("");
            //We count the number of letters in the word.
            numBlanks = lettersInChosenWord.length;

            //Print the solution in console for testing
            console.log(chosenWord);
            
            // we reset the guess and success array at each round
            blanksAndSuccesses = [];
            // we reset the wrong guesses from the presious round.
            wrongGuesses = [];

            //Fill up the blanksAndSuccesses with blanks based on the same number of letters on the chosen word
            for (var i = 0; i < numBlanks; i++){
                blanksAndSuccesses.push(" _");
            }
            
            //Print the initial blanks on Console.
            console.log(blanksAndSuccesses);

            //Reprints the gessesLeft to 9
            document.getElementById("guesses-left").innerHTML = numGuesses;

            //Prints the blanks at the beginning of each round in the HTML
            document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(" ");

            //Clears the wrong guesses from the previous round
            document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");
        }
        
        
        //create a function that checks and compares the letters picked by the user
        function checkLetters(letter) {
            //Boolean will be toggled based on whther or not a user letter is found in the word.
            var letterInWord = false;

            //Check if a ltter exists inside the array.
            for (var i = 0; i < numBlanks; i++) {
                if (chosenWord[i] === letter){
                    //if the letter exists then toggle this boolean to true
                    letterInWord = true;
                }
            }

            //If the letter exists, then find where it is
            if(letterInWord) {

                //Loop through the word.
                for(var j=0; j < numBlanks; j++) {

                    //Populate the blanksAndSuccesses with every instance of the letter.
                    if (chosenWord[j] === letter) {
                        //Set specific space in blanks and letter equal to the letter
                        blanksAndSuccesses[j] = letter;
                    }
                }
                //logging for testing.
                console.log(blanksAndSuccesses);
            }
            //If the letter doesn't match
            else {
                // then we add the letter to the list of wrong letters and we minus 1 from letters guessed
                wrongGuesses.push(letter);
                numGuesses--;
            }
        }

        // Create roundComplete() function
        function roundComplete() {

            //Log an initial status update in the console telling us how many wins, losses and guesses are left
            console.log("WinCount: " + winCounter + " | LossCount: " + lossCounter + " | NumGuesses: " + numGuesses);
        
            //Update html to reflect the new number of guesses.
            document.getElementById("guesses-left").innerHTML = numGuesses;
            //Print the array of guesses and blanks onto the page.
            document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(" ");
            //Print the wrong guesses onto the page.
            document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");

            //If we have gotten all the letters to match the solution...
            if (lettersInChosenWord.toString() === blanksAndSuccesses.toString()){
                //add to the win counter and post message you win!
                winCounter++;
                alert("You Win")

                //Update the win counter in the HTML and reset game
                document.getElementById("win-counter").innerHTML = winCounter;
                startGame();
            }
            //If we run out of guesses..
            else if (numGuesses === 0) {
                //Add to the loss counter
                lossCounter++;
                //message you lose
                alert("You Lose");

                //Update the loss counter in the HTML
                document.getElementById("loss-counter").innerHTML = lossCounter;
                //Restart game
                startGame();
            }
        }

        //Starts the Game:
        startGame();

        //Initiate the function for capturing key clicks
        document.onkeyup = function(event) {
            //convert all key clicks to lowercase letters.
            var letterGuessed = String.fromCharCode(event.which).toLowerCase();
            //Runs the code to check for correctness.
            checkLetters(letterGuessed);
            //Rujns the code after each round is done.
            roundComplete();
        };
