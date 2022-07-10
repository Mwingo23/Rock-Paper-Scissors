let playerScore = Math.floor(Math.random) * 3 +1;
let computerScore = Math.floor(Math.random) * 3 + 1

function playRound(playerSelection, computerSelection) {
    const playerSelection = ('Rock, Paper, Scissors');
    const computerSelection = ('Rock, Paper, Scissors');
}
if (playerSelection == 'Rock' && computerSelction == 'Rock'){
    console.log('ITS A TIE!')
} else if ( playerSelection == 'Rock' && computerSelection == 'Scissors') {
    playerScore++;
    console.log('YOU WON!')
} else {
    computerScore++
    console.log('YOU LOSE!')
}

if (playerSelection == 'Paper' && computerSelection == 'Paper') {
    console.log('ITS A TIE!')
} else if (playerSelection == 'Paper' && computerSelection == 'Scissors') {
    playerScore++;
    console.log('YOU WON!')
} else {
    computerScore++;
    console.log('YOU LOSE!')
}

if (playerSelection == 'Scissors' && computerSelection == 'Scissors') {
    console.log('ITS A TIE!')
} else if (playerSelection == 'Scissors' && computerSelection == 'Paper') {
    playerScore++;
    console.log('YOU WON!')
} else {
    computerScore++;
    console.log('YOU LOSE!')
}

for (let i = 0; i < 5; i++) {
    playRound();
    console.log(playRound());
    console.log(`Your Score: ${playerScore} - Computer Score: ${computerScore}`);
}