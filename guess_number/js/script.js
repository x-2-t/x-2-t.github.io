//Event Listeners
document.querySelector("#guessBtn").addEventListener("click", checkGuess);
document.querySelector("#resetBtn").addEventListener("click", initializeGame);

//Global variables
let randomNumber;
let attempts = 0;
let wins = 0; //tracks total # of wins
let losses = 0; //tracks total # of losses
initializeGame();

//starts a new game and also resets the attempts
function initializeGame() {
    randomNumber = Math.floor(Math.random() * 99) + 1;
    console.log("randomNumber: " + randomNumber);
    attempts = 0;
    //resets attempts left back to 7
    document.querySelector("#attemptsLeft").textContent = 7;

    //hiding the reset button
    document.querySelector("#resetBtn").style.display = "none";
    document.querySelector("#guessBtn").style.display = "inline";

    //adding focus to textbox
    document.querySelector("#playerGuess").focus();

    let playerGuess = document.querySelector("#playerGuess");
    playerGuess.focus(); //adding a focus textbox so you dont have to click the box
    playerGuess.value = "";  //clears the textbox

    let feedback = document.querySelector("#feedback");
    feedback.textContent = "";  //clears the feedback

    //clears previous guesses
    document.querySelector("#guesses").textContent = "";
}



function checkGuess() {
    let feedback = document.querySelector("#feedback");
    feedback.textContent = "";

    let guess = document.querySelector("#playerGuess").value;
    console.log("Player guess: " + guess);

    if (guess < 1 || guess > 99) {
        feedback.textContent = "Enter a number between 1 and 99";
        feedback.style.color = "red";
        return;
    }

    attempts++;
    console.log("Attempts: " + attempts);
    feedback.style.color = "blue";
    //calculates how many guesses left
    document.querySelector("#attemptsLeft").textContent = 7 - attempts;

    if (guess == randomNumber) {
        feedback.textContent = "You guessed it! You Won!";
        feedback.style.color = "green";
        wins++; // increases the total number of wins by 1
        //updates the total wins
        document.querySelector("#totalWins").textContent = wins;
        gameOver();
    } else {
        document.querySelector("#guesses").textContent += guess + " ";
        if (attempts == 7) {
            feedback.textContent = "Sorry, you lost! The correct number was " + randomNumber + "!";
            feedback.style.color = "red";
            losses++; //increased the losses
            //updates the total losses
            document.querySelector("#totalLosses").textContent = losses;
            gameOver();
        } else if (guess > randomNumber) {
            feedback.textContent = "Guess was too high";
        } else {
            feedback.textContent = "Guess was too low";
        }
    }
}

function gameOver() {
    let guessBtn = document.querySelector("#guessBtn");
    let resetBtn = document.querySelector("#resetBtn");

    guessBtn.style.display = "none"; //hides the guess button
    resetBtn.style.display = "inline"; //displays reset button
}