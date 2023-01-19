
/* Generate computer's choice */
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice;
}

let computerChoice = getComputerChoice();

let win = 0;
let loss = 0;

/* Play one round */
let playerSelection;
let result;

function playRound(playerSelection, computerChoice) {
    if (playerSelection.toLowerCase() === "rock" && computerChoice === "paper") {
        result = "loss";
    } else if (playerSelection.toLowerCase() === "rock" && computerChoice === "scissors") {
        result = "win";
    } else if (playerSelection.toLowerCase() === "paper" && computerChoice === "rock") {
        result = "win";
    } else if (playerSelection.toLowerCase() === "paper" && computerChoice === "scissors") {
        result = "loss";
    } else if (playerSelection.toLowerCase() === "scissors" && computerChoice === "paper") {
        result = "win";
    } else if (playerSelection.toLowerCase() === "scissors" && computerChoice === "rock") {
        result = "loss";
    } else {
        result = "tie";
    }
}

// Player wins round
function roundWin() {
    [console.log(`You win! ${playerSelection}  beats  ${computerChoice}!`), win++]
}

// Player loses round
function roundLoss() {
    [console.log(`You lose! ${computerChoice} beats ${playerSelection}!`), loss++];
}



// // Game function - play to 5 rounds (increments only on win/loss)
function game() {
    for (let i = 0; i < 5;) {
        computerChoice = getComputerChoice();
        playerSelection = window.prompt('rock, paper, or scissors?');
        playRound(playerSelection, computerChoice);
        if (result === "tie") {
            console.log("Draw!");
        } else if (result === "win") {
            i++;
            roundWin();
        } else if (result === "loss") {
            i++; 
            roundLoss();
        }
    }
    if (i = 5 && win > loss) {
       return console.log(`You won the game ${win} points to ${loss}!`);
    } else {
       return console.log(`You lost the game ${loss} points to ${win}!`);
    }
}

game();