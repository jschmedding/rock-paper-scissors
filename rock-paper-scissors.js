
/* Function to create computer's choice in one round */
function getComputerChoice() {
   return Math.floor(Math.random() * 3);
}

const randChoice = getComputerChoice();
let computerChoice;
if (randChoice === 0) {
    computerChoice = "rock";
} else if (randChoice === 1) {
    computerChoice = "paper";
} else {
    computerChoice = "scissors";
}
// Test function
// getComputerChoice();
// console.log(computerChoice);


/* Play one round */
let playerWin;
let playerLose;
let playerSelection;

function playRound(playerSelection, computerChoice) {
    
    if (playerSelection.toLowerCase() === "rock" && computerChoice === "paper") {
        return playerLose;
    } else if (playerSelection.toLowerCase() === "rock" && computerChoice === "scissors") {
        return playerWin;
    } else if (playerSelection.toLowerCase() === "paper" && computerChoice === "rock") {
        return playerWin;
    } else if (playerSelection.toLowerCase() === "paper" && computerChoice === "scissors") {
        return playerLose;
    } else if (playerSelection.toLowerCase() === "scissors" && computerChoice === "paper") {
        return playerWin;
    } else if (playerSelection.toLowerCase() === "scissors" && computerChoice === "rock") {
        return playerLose;
    } else {
        return "Draw!";
    }
}
let win = 0;
function roundWin() {
    win++;
    console.log("You win! " + playerSelection + " beats " + computerChoice + "!");
}
function roundLoss() {
    console.log(`You lose! ${computerChoice} beats ${playerSelection.toLowerCase()}!`);
}
// console.log(playRound(playerSelection, computerChoice));

// Game function
function game() {
    for (let i = 0; i < 5;) {
        let playerSelection = window.prompt('rock, paper, or scissors?')
        playRound(playerSelection, computerChoice);
        if (playRound(playerSelection, computerChoice) === playerWin) {
            i++;
            return roundWin();
        }
        else if (playRound(playerSelection, computerChoice) === playerLose) {
            i++;
            return roundLoss();
        }
        else {
            console.log("Draw!");
        }
        // if (playRound(playerSelection, computerChoice) == "Draw!") {
        //     return [i--, console.log("Draw!")]
        // }
        // instead of decrement, try only incrementing on win/loss
    }
    if (i = 5 && win >= 3) {
        console.log("You win the game!")
    } else if (i = 5 && win < 3){
        console.log("You lose the game!")
    } else {
        console.log("Time for the next round!")
    }
}

game();