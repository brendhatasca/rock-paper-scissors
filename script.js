// add function so that 
// 'rock beats scissors' can be displayed
// on the screen

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
const scoreMessage = document.getElementById('announce-winner');
const divScore = document.getElementById('round-result');

divScore.textContent = `Player ${playerScore} x ${computerScore} Computer`;
body.append(divScore);

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
        roundWinner = 'player';
    } 
    else if ( (playerSelection == computerSelection) ) {
        roundWinner = 'Tie';
    } else {
        computerScore += 1;
        roundWinner = 'computer';
    }
    updateScoreMessage(roundWinner, playerSelection, computerSelection);
}

// Display score
function roundScore() {
    divScore.textContent = `Player ${playerScore} x ${computerScore} Computer`;
    body.append(divScore);
}

// Changes message according to who won the round
// 'Rock beats Paper'
function updateScoreMessage(roundWinner, playerSelection, computerSelection) {
    if (roundWinner == 'player') {
        scoreMessage.textContent = `You win! ${capitalizeFirstLetter(playerSelection)} beats ${capitalizeFirstLetter(computerSelection)}`;
    } else if (roundWinner == 'computer') {
        scoreMessage.textContent = `You lose! ${capitalizeFirstLetter(computerSelection)} beats ${capitalizeFirstLetter(playerSelection)}`;
    } else {
        scoreMessage.textContent = "Tie!"
    }
}


// Finish game once score is 5
// Creates button to Play Again
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
        displayWinner.textContent = "You won the game! Humankind might not be doomed after all.";
    } else {
        displayWinner.textContent = "You lost the game! The Age of Ultron is coming.";
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

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
