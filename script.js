// Generates a random choice of ROCK, PAPER, and SCISSORS by the computer
function getComputerChoice(max) {
    let computerChoice = Math.floor(Math.random() * max);
    if (computerChoice === 0) {
        return console.log("Rock");
    }
    else if (computerChoice === 1) {
        return console.log("Paper");
    }
    else if (computerChoice === 2) {
        return console.log("Scissor");
    } 
}

// Player Input
function getHumanChoice(hand) {
    let humanChoice = prompt("Which hand?");
    return humanChoice;
}




