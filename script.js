// Track of the players score
let humanScore = 0;
let computerScore = 0;
let totalRounds = 0;


// Computer picks rock/paper/scissors
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0) {
        return "rock";
    }
    else if (computerChoice === 1) {
        return "paper";
    }
    else {
        return "scissors";
    } 
}

// Human Picks
function getHumanChoice() {
    let humanChoice = prompt("Which hand?").toLowerCase();
    return humanChoice;
}

// Each round
function playRound(humanChoice, computerChoice) {
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
        return;
    }
    computerScore++;
}

// Round-by-round game using function calls only 
function playGame() {
    if (totalRounds >= 5) {
        if (humanScore > computerScore) {
            return "You WIN!";
        }
        else if (humanScore < computerScore) {
            return "YOU LOSE! CLANKER WON!";
        }
        else {
            return "DRAW!";
        }
    }

    totalRounds++;

    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    console.log("Human choice: " + humanChoice);
    console.log("Clanker choice: " + computerChoice);

    playRound(humanChoice, computerChoice);

    console.log("Score: " + humanScore + " - " + computerScore);
    
    return playGame();
}

alert(playGame());



