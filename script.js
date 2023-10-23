const rps = ['rock', 'paper', 'scisor'];
let score = 0;
let games = 0;
let tie = 0;

function getComputerChoice () {
    return rps[~~(Math.random() * rps.length)];
}

function playRound (playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        games = games + 1
        tie = tie + 1
        return playerSelection + ' and ' + computerSelection + ' That is a tie! Score: ' + score;
    } if (
        (playerSelection == 'scisor' && computerSelection == 'paper') ||
        (playerSelection == 'rock' && computerSelection == 'scisor') ||
        (playerSelection == 'paper' && computerSelection == 'rock') 
    ) {
        games = games + 1
        score = score + 1;
        return playerSelection + ' beats ' + computerSelection + ' you win! Score is: ' + score;
    } if (
        (playerSelection == 'scisor' && computerSelection == 'rock') ||
        (playerSelection == 'rock' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'scisor') 
    ) {
        games = games + 1
        return playerSelection + ' loses to ' + computerSelection + ' you lose! Score is: ' + score;
    }
}

function game() {    
const playerSelection = prompt ('Rock, paper or scisor?').toLowerCase();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
if (games < 2) {
    const playerSelection = prompt ('Rock, paper or scisor?').toLowerCase();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection) + ' // Round 2');
} if (games < 3 && games > 1) {
    const playerSelection = prompt ('Rock, paper or scisor?').toLowerCase();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection) + ' // Round 3');
} if (games < 4 && games > 2) {
    const playerSelection = prompt ('Rock, paper or scisor?').toLowerCase();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection) + ' // Round 4');
} if (games < 5 && games > 3) {
    const playerSelection = prompt ('Rock, paper or scisor?').toLowerCase();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection) + ' Final Round');
} if (games === 5) {
    console.log('GG WP! Player: ' + score + ' Computer: ' + (games - score - tie))
} 
}
game()