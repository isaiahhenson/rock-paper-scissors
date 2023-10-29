let computerChoice;
let playerChoice;

//obtaining references to the DOM elements
let body = document.querySelector('body')

//creating element in the DOM
let divContainer = document.createElement('button')
let rockBtn = document.createElement('button')
let paperBtn = document.createElement('button')
let scissorsBtn = document.createElement('button')

//giving btn text content

rockBtn.textContent = 'ROCK'
paperBtn.textContent = 'PAPER'
scissorsBtn.textContent = 'SCISSORS'

//styling elements in the DOM
// divContainer.style.height = "50%"
divContainer.style.width = "80%"
divContainer.style.position = "absolute";
divContainer.style.top = "50%";
divContainer.style.left = "50%";
divContainer.style.transform = "translate(-50%, -50%)";
divContainer.style.border = "2px solid black";

//appending element to the DOM
body.appendChild(divContainer);
divContainer.appendChild(rockBtn)
divContainer.appendChild(paperBtn)
divContainer.appendChild(scissorsBtn)




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


function game(playerChoice) {
    getComputerChoice()
    console.log(`The computer's choice is: ${computerChoice}`)
    console.log(`The player's choice is: ${playerChoice}`)
    console.log(`Who Wins: ${letsGo(computerChoice, playerChoice)}`)

}

//adding event handlers to buttons

rockBtn.addEventListener("click", () => { playerChoice = rockBtn.innerText.toLowerCase(); game(playerChoice)})
paperBtn.addEventListener("click", () => { playerChoice = paperBtn.innerText.toLowerCase(); game(playerChoice)})
scissorsBtn.addEventListener("click", () => { playerChoice = scissorsBtn.innerText.toLowerCase(); game(playerChoice)})