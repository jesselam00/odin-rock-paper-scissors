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
        replayButton.style.display = "inline"
        rockButton.disabled = true
        scissorsButton.disabled = true
        paperButton.disabled = true
    }
    else if (computerScore === 5) {
        resultText += " YOU LOST THE GAME!"
        replayButton.style.display = "inline"
        rockButton.disabled = true
        scissorsButton.disabled = true
        paperButton.disabled = true
    }
    resultsDiv.textContent = resultText
    return roundOutcome
}

function resetGame(e) {
    replayButton.style.display = "none"
    playerScore = 0
    playerScoreDiv.textContent = `Player Score: ${playerScore}`
    computerScore = 0
    computerScoreDiv.textContent = `Computer Score: ${computerScore}`
    rockButton.disabled = false
    scissorsButton.disabled = false
    paperButton.disabled = false
    resultsDiv.textContent = "Select Rock, Paper, or Scissors!"
}


function playSound(e) {
    let soundToPlay = null
    if (this.classList.contains("rock")) {
        soundToPlay = "rock"
    }
    else if (this.classList.contains("paper")) {
        soundToPlay = "paper"
    }
    else {
        soundToPlay = "scissors"
    }
    const audio = document.querySelector(`audio[class="${soundToPlay}"]`)
    audio.currentTime = 0
    audio.play()
}

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
playButtons.forEach(playButton => playButton.addEventListener("click",playSound))
const resultsDiv = document.querySelector(".results")
const replayButton = document.querySelector(".replay-button")
replayButton.addEventListener("click", resetGame)