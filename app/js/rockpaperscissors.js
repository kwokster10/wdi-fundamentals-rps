////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    if (move === ("rock" || "paper" || "scissors")) {
        return move;
    } else {
        return getInput();
    }
}

function getComputerMove(move) {
    if (move === ("rock" || "paper" || "scissors")) {
        return move;
    } else {
        return randomPlay();
    }
}

function getWinner(playerMove,computerMove) {
    var winner;
    if (playerMove === computerMove) {
    	winner = "tie";
    	//I realized the below looks very messy but separating it looked very repetitive. 
    } else if (((playerMove === "scissors") && (computerMove === "paper")) || ((playerMove === "rock") && (computerMove === "scissors")) || ((playerMove === "paper") && (computerMove === "rock"))) {
    	winner = "player";
    } else {
    	winner = "computer";
}   return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    for (var i = 0; ((playerWins===5)||(computerWins===5)); i += 1) {
        if (winner === "player") {
            playerWins += 1;
        } else if (winner === "computer") {
            computerWins += 1;
        } else {
            console.log('Try again!');
        }
    }
    return [playerWins, computerWins];
}

