let computerChoice;
let playerChoice;

//obtaining references to the DOM elements
let body = document.querySelector('body')

//creating element in the DOM
let divContainer = document.createElement('button')
let rockBtn = document.createElement('button')
let paperBtn = document.createElement('button')
let scissorsBtn = document.createElement('button')
let resultDiv = document.createElement('div')

//giving btn text content

rockBtn.textContent = 'ROCK'
paperBtn.textContent = 'PAPER'
scissorsBtn.textContent = 'SCISSORS'

//styling elements in the DOM
divContainer.style.height = "50%"
divContainer.style.width = "80%"
divContainer.style.position = "absolute";
divContainer.style.top = "50%";
divContainer.style.left = "50%";
divContainer.style.transform = "translate(-50%, -50%)";
divContainer.style.border = "2px solid black";
//div within the containerDiv
resultDiv.style.height = "30%"
resultDiv.style.width = "80%"
resultDiv.style.position = "absolute";
resultDiv.style.top = "28%";
resultDiv.style.left = "50%";
resultDiv.style.transform = "translate(-50%, -50%)";
resultDiv.style.border = "1px solid gray";

//appending element to the DOM
body.appendChild(divContainer);
divContainer.appendChild(rockBtn)
divContainer.appendChild(paperBtn)
divContainer.appendChild(scissorsBtn)
divContainer.insertBefore(resultDiv, rockBtn)


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


let playerTotalWins = 0
let computerTotalWins = 0

function game(playerChoice) {

    getComputerChoice()
    let npc = `The computer's choice is: ${computerChoice}`
    let player = `The player's choice is: ${playerChoice}`
    let results = `Who Wins: ${letsGo(computerChoice, playerChoice)}`

    if (computerTotalWins === 5) {
        return resultDiv.innerText = "Who Wins: The computer is the winner!"
    } else if (playerTotalWins === 5) {
        return resultDiv.innerText = 'Who Wins: The player is the winner'
    } else if (results == 'TIE GAME!') {
        playerTotalWins = playerTotalWins;
    } else if (results == "Who Wins: The computer is the winner!") {
        ++computerTotalWins
    } else if (results == 'Who Wins: The player is the winner') {
        ++playerTotalWins
    }


    console.log(results)


    console.log(computerTotalWins)
    console.log(playerTotalWins)


    let npcElement = document.createElement('p')
    let playerElement = document.createElement('p')
    let resultsElement = document.createElement('p')

    npcElement.textContent = npc
    playerElement.textContent = player
    resultsElement.textContent = results

    resultDiv.innerHTML = ""

    resultDiv.appendChild(npcElement)
    resultDiv.appendChild(playerElement)
    resultDiv.appendChild(resultsElement)

}


//adding event handlers to buttons

rockBtn.addEventListener("click", () => { playerChoice = rockBtn.innerText.toLowerCase(); game(playerChoice) })
paperBtn.addEventListener("click", () => { playerChoice = paperBtn.innerText.toLowerCase(); game(playerChoice) })
scissorsBtn.addEventListener("click", () => { playerChoice = scissorsBtn.innerText.toLowerCase(); game(playerChoice) })