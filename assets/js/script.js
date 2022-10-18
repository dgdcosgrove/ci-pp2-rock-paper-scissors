// Wait for DOM content to load before running the game
// Get clickable images "buttons" and add event listeners to them
let player;
let computer;

document.addEventListener("DOMContentLoaded", function() {
    let choices = document.getElementsByClassName("control-img");

    for (player of choices) {
        player.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "rock") {
                player="Rock"
                console.log(player);
            } else if (this.getAttribute("data-type") === "paper") {
                player="Paper"
                console.log(player);
            } else if (this.getAttribute("data-type") === "scissors") {
                player="Scissors"
                console.log(player);
            }
            computerChoice();
            checkWinner();
        })
    }
})

function computerChoice (){
   let randNumb = Math.floor(Math.random() * 3) + 1;
   if (randNumb === 1) {
        computer = "Rock";
        console.log(computer);
   } else if (randNumb === 2) {
        computer = "Paper";
        console.log(computer);
   } else if (randNumb === 3) {
        computer = "Scissors";
        console.log(computer);
   }
}

function checkWinner() {

    if (player === computer) {
        console.log("Draw!")
    } else if (player === "Paper" && computer === "Rock") {
        console.log("You Win!")
    } else if (player === "Rock" && computer === "Scissors") {
        console.log("You Win!")
    } else if (player === "Scissors" && computer === "Paper") {
        console.log("You Win!")
    } else if (player === "Scissors" && computer === "Rock") {
        console.log("You Lose!")
    } else if (player === "Paper" && computer === "Scissors") {
        console.log("You Lose!")
    } else if (player === "Rock" && computer === "Paper") {
        console.log("You Lose!")
    }
    
}