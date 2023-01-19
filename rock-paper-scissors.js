
/* Function to create computer's choice in one round */
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice;
}
let computerChoice = getComputerChoice();
// const randChoice = getComputerChoice();
// let computerChoice;
// if (randChoice === 0) {
//     computerChoice = "rock";
// } else if (randChoice === 1) {
//     computerChoice = "paper";
// } else {
//     computerChoice = "scissors";
// }
// Test function
// getComputerChoice();
// console.log(computerChoice);

let win = 0;
let loss = 0;

/* Play one round */
let playerSelection;

function playRound(playerSelection, computerChoice) {
    if (playerSelection.toLowerCase() === "rock" && computerChoice === "paper") {
        return roundLoss();
    } else if (playerSelection.toLowerCase() === "rock" && computerChoice === "scissors") {
        return roundWin();
    } else if (playerSelection.toLowerCase() === "paper" && computerChoice === "rock") {
        return roundWin();
    } else if (playerSelection.toLowerCase() === "paper" && computerChoice === "scissors") {
        return roundLoss();
    } else if (playerSelection.toLowerCase() === "scissors" && computerChoice === "paper") {
         return roundWin();
    } else if (playerSelection.toLowerCase() === "scissors" && computerChoice === "rock") {
         return roundLoss();
    } else {
        console.log("Draw!");
    }
}

function roundWin() {
    [console.log(`You win! ${playerSelection}  beats  ${computerChoice}!`), win++]
}
function roundLoss() {
    [console.log(`You lose! ${computerChoice} beats ${playerSelection}!`), loss++];
}
// // console.log(playRound(playerSelection, computerChoice));

// // Game function
function game() {
    for (let i = 0; i < 5; i++){
        let computerChoice = getComputerChoice();
        getComputerChoice();
        playerSelection = window.prompt('rock, paper, or scissors?');
        playRound(playerSelection, computerChoice);
        }
    if (i = 5 && win > loss) {
       return console.log("You win the game!");
    } else {
       return console.log("You lose the game!");
    }
}

game();