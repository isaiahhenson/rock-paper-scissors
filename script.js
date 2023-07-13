let computerChoice;

function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 30) + 1

    if (randomNum <= 10) {
        computerChoice = 'rock'
    } else if (randomNum <= 20) {
        computerChoice = 'paper'
    } else {
        computerChoice = 'scissors'
    }
}
getComputerChoice()
console.log(`The computer's choice is: ${computerChoice}`)

let playerChoice;

function getPlayerChoice() {
    let randomNum = Math.floor(Math.random() * 30) + 1

    if (randomNum <= 10) {
        playerChoice = 'rock'
    } else if (randomNum <= 20) {
        playerChoice = 'paper'
    } else {
        playerChoice = 'scissors'
    }
}
getPlayerChoice()
console.log(`The player's choice is: ${playerChoice}`)

function letsGo(computer, player) {
    if (computer === player) {
        return 'TIE GAME!'
    } else if (computer == 'rock' && player == 'scissors' || player == 'paper') {
        return 'The computer is the winner!'
    } else if (computer == 'scissors' && player == 'rock') {
        return 'The player is the winner!'
    } else if (computer == 'scissors' && player == 'paper') {
        return 'The computer is the winner!'
    } else if (computer == 'paper' && player == 'rock') {
        return 'The computer is the winner!'
    } else if ( computer == 'paper' && player == 'scissors'){
        return 'The player is the winner'
    }
}

console.log(`Who Wins: ${letsGo(computerChoice, playerChoice)}`)
