# rock-paper-scissors
JavaScript Project


notes: 

only when you remove the loop thing the game works

loop that doesnt work

for (let i = 0; i < 1000; i++) {
    const computerSelection = getComputerChoice(); //added
    let playerSelectionPrompt = prompt('Choose your player! Rock, paper or scissors?').toLowerCase();
    const playerSelection = playerSelectionPrompt;

    let roundResult = playRound(playerSelection, computerSelection);
    alert(roundResult);
}
