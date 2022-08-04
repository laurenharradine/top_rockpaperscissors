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

function playRound(playerSelection, computerSelection) {
    let win = 0
    if (playerSelection === "rock" && computerSelection === "scissors") {
        win = 1
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        win = 1
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        win = 1
    }
    else if (playerSelection === computerSelection) {
        win = 2
    }
    else win = 0

    return win
}

function game() {
    let playerScore = 0
    let compScore = 0
    for (let i = 1; i <= 5; i++) {
        let playerSelection = getComputerChoice()
        let computerSelection = getComputerChoice()
        console.log("Round " + i + ":")
        console.log("Player chooses " + playerSelection)
        console.log("Computer chooses " + computerSelection)

        let winner = playRound(playerSelection, computerSelection)
        if (winner === 1) {
            console.log ("Player wins this round!")
            playerScore++
        } 
        else if (winner === 2) {
            console.log ("A draw! Try again")
            i--
        }
        else {
            console.log("Computer wins this!")
            compScore++
        }

        console.log("Score is " + playerScore + " - " + compScore)
    }

    console.log("Game over! Final score: " + playerScore + " - " + compScore)
    if (playerScore > compScore) console.log("PLAYER WINS!!!")
    else console.log("COMPUTER WINS :((((")
}

game()
