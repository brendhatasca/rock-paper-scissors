// makes computer choose between rock paper scissors

function getComputerChoice(rockPaperScissors) {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

console.log(getComputerChoice());

// first round
let computerSelection = getComputerChoice();
const playerSelectionPrompt = prompt('Choose your player! Rock, paper or scissors?').toLowerCase();
const playerSelection = playerSelectionPrompt;

function playRound(playerSelection) {
    
    if ( (playerSelection == "paper" && computerSelection === "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "rock" && computerSelection == "scissors") ) {
        return ("You win! " + playerSelection + " beats " + computerSelection);
    } 
    else if ( (playerSelection == computerSelection) ) {
        return ("It's a tie! You both chose " + playerSelection);
    } else {
        return ("You lost! " + computerSelection + " beats " + playerSelection);
    }
}
alert( playRound(playerSelection, computerSelection) );