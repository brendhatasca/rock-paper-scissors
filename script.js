let playerScore = 0;
let computerScore = 0;


function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
if ( (playerSelection == "paper" && computerSelection === "rock") ||
(playerSelection == "scissors" && computerSelection == "paper") ||
(playerSelection == "rock" && computerSelection == "scissors") ) {
    playerScore += 1;
    alert("You win! " + playerSelection + " beats " + computerSelection);
} 
else if ( (playerSelection == computerSelection) ) {
    alert("It's a tie! You both chose " + playerSelection);
} else {
    computerScore += 1;
    alert("You lost! " + computerSelection + " beats " + playerSelection);
}}


function roundScore() {
    alert('Scoreboard: Player ' + playerScore + ' x ' + computerScore + ' Computer');
}

function checkWinner() {
    if (playerScore > computerScore) {
        return 'You beat the machine! The world isn\'t doomed after all.';
    }
    else if (playerScore == computerScore) {
        return 'Tie! Humans and robots are equally smart.'
    }
    else{
        return 'The computer wins. The Age of Ultron is coming.';
    }    
}


function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('Choose your player! Rock, paper or scissors?'); 
        playerSelection = playerSelection.toLowerCase(); 
        let computerSelection = getComputerChoice(); 
        alert('The computer chose ' + computerSelection);
        playRound(playerSelection, computerSelection);
        roundScore();
}}


game();
alert( checkWinner() );


    