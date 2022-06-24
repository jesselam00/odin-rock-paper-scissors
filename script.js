const choices = ["rock","paper","scissors"]
let computerSelection = null
let playerSelection = null
let roundOutcome = null
let playerScore = 0
let computerScore = 0

/** 
 * This function will randomly return "rock", "paper", or "scissors"
 * Generates a random number between 0 and 2
 * Return rock if 0
 * Return paper if 1
 * Return scissors if 2
*/
function computerPlay() {
    const randomNumber = Math.floor(Math.random()*3)
    switch(randomNumber) {
        case 0:
            return choices[0]
            break
        case 1:
            return choices[1]
            break
        case 2:
            return choices[2]
            break
        default:
            console.log("Oh dear the switch statement broke, check Line 23")
    }
}

function decideResults(outcome, playerSelection, computerSelection) {
    const playerSelectionUpper = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
    const computerSelectionUpper = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)
    if (outcome === "tie") {
        return `It's a tie! ${playerSelectionUpper} ties with ${computerSelectionUpper}.`
    }
    else if (outcome === "win") {
        return `You Win! ${playerSelectionUpper} beats ${computerSelectionUpper}!`
    }
    else {
        return `You Lose! ${computerSelectionUpper} beats ${playerSelectionUpper}...`
    }
}

/**
 * if player is rock:
 *      win if computer is scissors 
 *      tie if computer is rock
 *      lose if computer is paper
 * if player is paper:
 *      win if computer is rock
 *      tie if computer is paper
 *      lose if computer is scissors
 * if player is scissors:
 *      win if computer is paper
 *      tie if computer is scissors
 *      lose if computer is rock
 * @param {*} playerSelection 
 * @param {*} computerSelection 
 */
function playRound(e) {
    if (this.classList.contains("rock")) {
        playerSelection = "rock"
    }
    else if (this.classList.contains("paper")) {
        playerSelection = "paper"
    }
    else {
        playerSelection = "scissors"
    }
    computerSelection = computerPlay()
    if (playerSelection === "rock") {
       if (computerSelection === "rock") {
            roundOutcome = "tie"
       } 
       else if (computerSelection === "paper") {
            roundOutcome = "lose"
       }
       else {
            roundOutcome = "win"
       }
    }
    else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            roundOutcome = "win"
        } 
        else if (computerSelection === "paper") {
            roundOutcome = "tie"
        }
        else {
            roundOutcome = "lose"
        }
     }
    else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            roundOutcome = "lose"
        } 
        else if (computerSelection === "paper") {
            roundOutcome = "win"
        }
        else {
            roundOutcome = "tie"
        }
     }
    if (roundOutcome === "win") {
        playerScore += 1
        playerScoreDiv.textContent = `Player Score: ${playerScore}`
    }
    else if (roundOutcome === "lose") {
        computerScore += 1
        computerScoreDiv.textContent = `Computer Score: ${computerScore}`
    }
    let resultText = decideResults(roundOutcome,playerSelection,computerSelection)
    if (playerScore === 5) {
        resultText += " YOU WON THE GAME!!"
        replayButton.style.visibility = "visible"
    }
    else if (computerScore === 5) {
        resultText += " YOU LOST THE GAME!"
        replayButton.style.visibility = "visible"
    }
    resultsDiv.textContent = resultText
    return roundOutcome
}

/**
 * First to three points wins
 * Inside a while loop:
 * If player score is 3
 *      Win game, ask if they want to play again
 * If computer score is 3
 *      Lose game, ask if they want to play again
 * Prompt user for rock paper scissors and store in playerSelection
 * Call computerPlay and store in computerSelection
 * Call playRound using playerSelection and computerSelection
 * Return win or loss or tie, add to player or computer score accordingly
 * Restart while loop
 */
/*
function game() {
    
    let playerScore = 0
    let computerScore = 0
    let gameContinue = true
    let roundState = null
    while(gameContinue) {
        if (playerScore === 3) {
            alert("You win the game of Rock Paper Scissors! The score was " + playerScore + "-" + computerScore)
            gameContinue = confirm("Would you like to play again?")
            playerScore = 0
            computerScore = 0
            continue
        }
        else if (computerScore == 3) {
            alert("You lost the game of Rock Paper Scissors! The score was " + playerScore + "-" + computerScore)
            gameContinue = confirm("Would you like to play again?")
            playerScore = 0
            computerScore = 0
            continue
        }

        playerSelection = prompt("Enter rock, paper or scissors. The score is " + playerScore + " - " + computerScore)
        computerSelection = computerPlay()
        roundState = playRound(playerSelection,computerSelection)
        if (roundState === "tie") {
            continue
        }
        else if (roundState === "win") {
            playerScore += 1
            continue
        }
        else if (roundState === "lose") {
            computerScore += 1
            continue
        }
    }
}
*/

//alert("Welcome to Rock Paper Scissors! You will play against a Computer in a best out of 3. Let's play!")

const playerScoreDiv = document.querySelector(".player-score")
playerScoreDiv.textContent = `Player Score: ${playerScore}`
const computerScoreDiv = document.querySelector(".computer-score")
computerScoreDiv.textContent = `Computer Score: ${computerScore}`
const rockButton = document.querySelector(".rock")
rockButton.selection = "rock"
const paperButton = document.querySelector(".paper")
paperButton.selection = "paper"
const scissorsButton = document.querySelector(".scissors")
scissorsButton.selection = "scissors"
const playButtons = document.querySelectorAll(".play-button")
playButtons.forEach(playButton => playButton.addEventListener("click",playRound))
const resultsDiv = document.querySelector(".results")
const replayButton = document.querySelector(".replay-button")