function getComputerChoice() {
    let min = Math.ceil(1)
    let max = Math.ceil(3)
    let choiceNum = Math.floor(Math.random() * (max - min + 1) + min)
    let choice = ""

    if(choiceNum === 1) {
        choice = "rock"
    }
    else if(choiceNum === 2) {
        choice = "paper"
    }
    else if(choiceNum === 3) {
        choice = "scissors"
    }
    else choice = "error"

    return choice
}

function playRound() {
    
}

const playerSelection = "rock"
const computerSelection = getComputerChoice()
console.log(computerSelection)