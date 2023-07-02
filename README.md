# rock-paper-scissors

Live Preview: https://brendhatasca.github.io/rock-paper-scissors/

JavaScript Project

1. Have the computer return ramdomly rock, paper or scissors
2. Get input from user who can choose rock, paper or scissors
3. Compare two outputs to declare winner
4. Keep score for each round
5. Play 5 rounds then declare final winner

Challenges

At some point the browser was alerting 'undefined' and couldn't figure out why.
The solution was inside the game() function:
it turns out that I wrote 'alert( playRound() )' when I had already alerted whatever was inside playround() so it was like I was writing alert(undefined).
Solution:
instead of:
alert( playRound() ); 
wrote:
playRound();

This part
function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('Choose your player! Rock, paper or scissors?'); 
        playerSelection = playerSelection.toLowerCase(); 
        let computerSelection = getComputerChoice(); 
        alert('The computer chose ' + computerSelection);
        playRound(playerSelection, computerSelection);
        roundScore();
}}
was also a challenge as it wasn't alerting the prompt before
