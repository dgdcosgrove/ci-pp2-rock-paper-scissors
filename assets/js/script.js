// Declare global variables for player, computer
// Declare result varibale assign it a value from DOM inorder to manipluate its innerText
let player;
let computer;

// Wait for DOM content to load before running the game
// Get clickable images "buttons" and add event listeners to them
document.addEventListener("DOMContentLoaded", function() {
    let choices = document.getElementsByClassName("control-img");

    for (player of choices) {
        player.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "rock") {
                player = "Rock";
            } else if (this.getAttribute("data-type") === "paper") {
                player = "Paper";
            } else if (this.getAttribute("data-type") === "scissors") {
                player = "Scissors";
            }
// Call computerChoice and checkWinner functions once player choice is made
            computerChoice();
            checkWinner();
        });
    }
});

// computerChoice funtion, generates a random number between 1-3 and assigns it a string
function computerChoice () {
   let randNumb = Math.floor(Math.random() * 3) + 1;
   if (randNumb === 1) {
        computer = "Rock";
   } else if (randNumb === 2) {
        computer = "Paper";
   } else if (randNumb === 3) {
        computer = "Scissors";
   }
}

/** checkWinner function, compares player choice and computer choice,
 *  assigns innerText to results <p> tag according to result, calls incrementUser and
 * incrementComputer functions as required to update scoreboard.
 */
function checkWinner() {
    let result = document.getElementById("result-p");
    if (player === computer) {
        result.innerHTML="Same choice made, It's a Draw! &#128529;";
    } else if (player === "Paper" && computer === "Rock") {
        result.innerHTML="Paper covers Rock, You Win! &#128512;";
        incrementUser();
    } else if (player === "Rock" && computer === "Scissors") {
        result.innerHTML="Rock breaks Scissors, You Win! &#128512;";
        incrementUser();
    } else if (player === "Scissors" && computer === "Paper") {
        result.innerHTML="Scissors cuts Paper, You Win! &#128512;";
        incrementUser();
    } else if (player === "Scissors" && computer === "Rock") {
        result.innerHTML="Rock breaks Scissors, You Lose! &#128546;";
        incrementComputer();
    } else if (player === "Paper" && computer === "Scissors") {
        result.innerHTML="Scissors cuts Paper, You Lose! &#128546;";
        incrementComputer();
    } else if (player === "Rock" && computer === "Paper") {
        result.innerHTML="Paper covers Rock, You Lose! &#128546;";
        incrementComputer();
    }    
}

// incrementUser function, called once user has a wnniing choice and adds 1 to user side of scoreboard
function incrementUser() {
    let playerScore = parseInt(document.getElementById("player-score").innerText);
    document.getElementById("player-score").innerText = ++playerScore;
}

// incrementComputer function, called once computer has a winning choice and adds 1 to computer side of scoreboard
function incrementComputer() {
    let computerScore = parseInt(document.getElementById("computer-score").innerText);
    document.getElementById("computer-score").innerText = ++computerScore;
}