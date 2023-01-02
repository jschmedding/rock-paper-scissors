
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
let playerSelection;
function playRound(playerSelection, computerChoice) {
    playerSelection = window.prompt('rock, paper, or scissors?')
    if (playerSelection.toLowerCase() === "rock" && computerChoice === "paper") {
        return console.log("playerLose1");
    } else if (playerSelection.toLowerCase() === "rock" && computerChoice === "scissors") {
        return console.log("playerWin1");
    } else if (playerSelection.toLowerCase() === "paper" && computerChoice === "rock") {
        return console.log("playerWin2");
    } else if (playerSelection.toLowerCase() === "paper" && computerChoice === "scissors") {
        return console.log("playerLose2");
    } else if (playerSelection.toLowerCase() === "scissors" && computerChoice === "paper") {
        return console.log("playerWin3");
    } else if (playerSelection.toLowerCase() === "scissors" && computerChoice === "rock") {
        return console.log("playerLose3");
    } else {
        return console.log("Draw!");
    }
}
// playRound(playerSelection, computerChoice)
let win = 0;
function roundWin() {
    return [console.log(`You win! ${playerSelection.toLowerCase()}  beats  ${computerChoice}!`), win++]
}
function roundLoss() {
    return console.log(`You lose! ${computerChoice} beats ${playerSelection.toLowerCase()}!`);
}
// // console.log(playRound(playerSelection, computerChoice));

// // Game function
// function game() {
//     for (let i = 0; i < 5;) {
        
//         playRound(playerSelection, computerChoice);
//         if (playRound(playerSelection, computerChoice) === playerWin) {
//             i++;
//             roundWin();
//         }
//         else if (playRound(playerSelection, computerChoice) === playerLose) {
//             i++;
//             return roundLoss();
//         }
//         else {
//             console.log("Draw!");
//         }
//         // if (playRound(playerSelection, computerChoice) == "Draw!") {
//         //     return [i--, console.log("Draw!")]
//         // }
//         // instead of decrement, try only incrementing on win/loss
//     }
//     if (i = 5 && win >= 3) {
//         console.log("You win the game!")
//     } else if (i = 5 && win < 3){
//         console.log("You lose the game!")
//     } else {
//         console.log("Time for the next round!")
//     }
// }

// game();