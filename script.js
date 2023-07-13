let computerChoice;
let playerChoice;


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
    } else if (computer == 'paper' && player == 'scissors') {
        return 'The player is the winner'
    }
}


function game() {
    getComputerChoice()
    console.log(`The computer's choice is: ${computerChoice}`)
    playerChoice = prompt('rock, paper, or scissors').toLowerCase();
    console.log(`The player's choice is: ${playerChoice}`)
    console.log(`Who Wins: ${letsGo(computerChoice, playerChoice)}`)

    getComputerChoice()
    playerChoice = prompt('rock, paper, or scissors').toLowerCase();
    console.log(`The player's choice is: ${playerChoice}`)
    console.log(`The computer's choice is: ${computerChoice}`)
    console.log(`Who Wins: ${letsGo(computerChoice, playerChoice)}`)

    getComputerChoice()
    console.log(`The computer's choice is: ${computerChoice}`)
    playerChoice = prompt('rock, paper, or scissors').toLowerCase();
    console.log(`The player's choice is: ${playerChoice}`)
    console.log(`Who Wins: ${letsGo(computerChoice, playerChoice)}`)

    getComputerChoice()
    console.log(`The computer's choice is: ${computerChoice}`)
    playerChoice = prompt('rock, paper, or scissors').toLowerCase();
    console.log(`The player's choice is: ${playerChoice}`)
    console.log(`Who Wins: ${letsGo(computerChoice, playerChoice)}`)

    getComputerChoice()
    console.log(`The computer's choice is: ${computerChoice}`)
    playerChoice = prompt('rock, paper, or scissors').toLowerCase();
    console.log(`The player's choice is: ${playerChoice}`)
    console.log(`Who Wins: ${letsGo(computerChoice, playerChoice)}`)

}
game()