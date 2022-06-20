const choices = ["rock","paper","scissors"]
let computerSelection = null
let playerSelection = null

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
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    if (playerSelection === "rock") {
       if (computerSelection === "rock") {
            alert("Tie! Rock ties with rock")
            return "tie"
       } 
       else if (computerSelection === "paper") {
            alert("You Lose! Paper beats Rock")
            return "lose"
       }
       else {
            alert("You Win! Rock beats Scissors")
            return "win"

       }
    }
    if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            alert("You Win! Paper beats rock")
            return "win"
        } 
        else if (computerSelection === "paper") {
            alert("Tie! Paper ties with paper")
            return "tie"
        }
        else {
            alert("You Lose! Scissors beats paper")
            return "lose"
        }
     }
     if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            alert("You Lose! Rock beats scissors")
            return "lose"
        } 
        else if (computerSelection === "paper") {
            alert("You Win! Scissors beats paper")
            return "win"
        }
        else {
            alert("Tie! Scissors ties with scissors")
            return "tie"
        }
     }
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
function game() {
    let playerScore = 0
    let computerScore = 0
    let gameContinue = true
    let roundState = null
    while(gameContinue) {
        if (playerScore === 3) {
            alert("You win the game of Rock Paper Scissors! The score was " + playerScore + "-" + computerScore)
            gameContinue = false
            return true
        }
        else if (computerScore == 3) {
            
            console.log("Player score: " + playerScore)
            console.log("Computer score: 3")
            alert("You lost the game of Rock Paper Scissors! The score was " + playerScore + "-" + computerScore)
            gameContinue = false
            return false
        }

        playerSelection = prompt("Enter rock, paper or scissors: ")
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

game()