
// Score keeper
let playerScore = 0;
let computerScore = 0;
let roundWinner = '';

// Generate pc choice
function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

// Select each button
const body = document.querySelector('body');
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');

// Add event listener for click
rockBtn.addEventListener('click', () => handleClick('rock'));
paperBtn.addEventListener('click', () => handleClick("paper"));
scissorsBtn.addEventListener('click', () => handleClick("scissors"));

// Use info from click to play a round
function handleClick(playerSelection) {
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    roundScore();
    endGame();
}

// 
function playRound(playerSelection, computerSelection) {
    if ( (playerSelection == 'paper' && computerSelection === "rock") ||
    (playerSelection == 'scissors' && computerSelection == "paper") ||
    (playerSelection == 'rock' && computerSelection == "scissors") ) {
        playerScore += 1;
        roundWinner = 'Player';
    } 
    else if ( (playerSelection == computerSelection) ) {
        roundWinner = 'Tie';
    } else {
        computerScore += 1;
        roundWinner = 'Computer';
}}

// Display score
function roundScore() {
    let divScore = document.getElementById('round-result');
    divScore.textContent = `Player ${playerScore} x ${computerScore} Computer`;
    body.append(divScore);
}

// Finish game once score is 5
function endGame() {
    if ((playerScore == 5) || (computerScore == 5)) {
    checkGameWinner();
    disableButtons();
    playAgain();
    }
}

// Overall game winner
function checkGameWinner() {
    let displayWinner = document.getElementById('game-winner'); 

    if (playerScore > computerScore) {
        displayWinner.textContent = "You win! Humankind might not be doomed after all.";
    } else {
        displayWinner.textContent = "You lose! The Age of Ultron is coming.";
    }
    body.append(displayWinner);
}

// Disable buttons once ones score is 5
function disableButtons() {
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
}

// Refresh page button pops up
function playAgain() {
    const refreshBtn = document.createElement('button');
    refreshBtn.textContent = "Play again";
    refreshBtn.classList.add('refresh-page');
    body.append(refreshBtn);
    refreshBtn.addEventListener('click', () => window.location.reload())
}


function game() {
    // for (let i = 0; i < 5; i++) {
    //     let playerSelection = prompt('Choose your player! Rock, paper or scissors?'); 
    //    playerSelection = playerSelection.toLowerCase(); 
        let computerSelection = getComputerChoice(); 
    //    alert('The computer chose ' + computerSelection);
        playRound(playerSelection, computerSelection);
    //    roundScore();
};

// Calls functions
//game();
//alert( checkWinner() );


    