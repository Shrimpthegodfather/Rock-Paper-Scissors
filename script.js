// Generates a random choice of ROCK, PAPER, and SCISSORS by the computer
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
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
function getHumanChoice() {
    let humanChoice = prompt("Which hand?").toLowerCase();
    return humanChoice;
}

// Track of the players score
let humanScore = 0;
let computerScore = 0;
let totalRounds = 0;

// Play 5 rounds 
function playGame() {
    // Logic for playing round by round
    function playround(humanChoice, computerChoice) {
    
        if (humanChoice === computerChoice) {
            humanScore++;
            computerScore++;
        }
        if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            humanScore++;
        }
        else {
            computerScore++;
        }
    }

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playround(humanSelection, computerSelection);

    totalRounds++;

    if (totalRounds === 5) {
        if (humanScore > computerScore) {
            return "The winner is you!"
        }
        if (humanScore < computerScore) {
            return "The winner is bot!"
        }
        else {
            return "Draw!"
        }
    }
    else {
        playGame();
    }
}

console.log(playGame());



