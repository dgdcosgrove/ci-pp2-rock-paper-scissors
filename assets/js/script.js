// Wait for DOM content to load before running the game
// Get clickable images "buttons" and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByClassName("control-img");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "rock") {
                alert("You clicked Rock!");
            } else if (this.getAttribute("data-type") === "paper") {
                alert("You clicked Paper!");
            } else if (this.getAttribute("data-type") === "scissors") {
                alert("You clicked Scissors!");
            } else {
                alert("You didn't make a choice");
            }
        })
    }
})

function runGame() {

}

function computerChoice() {

}

function checkWinner() {

}

function incrementUser() {

}

function incrementComputer() {

}

function resultMessage() {

}

function resultExhibit() {

}