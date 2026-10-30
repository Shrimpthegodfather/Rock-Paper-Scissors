// Generates a random choice of ROCK, PAPER, and SCISSORS by the computer
function getComputerChoice(max) {
    let computerChoice = Math.floor(Math.random() * max);
    if (computerChoice === 0) {
        return console.log("rock");
    }
    else if (computerChoice === 1) {
        return console.log("paper");
    }
    else if (computerChoice === 2) {
        return console.log("scissors");
    } 
}

// Player Input
function getHumanChoice(hand) {
    let humanChoice = prompt("Which hand?").toLowerCase();
    return humanChoice;
}

// Track of the players score
let humanScore = 0;
let computerScore = 0;






