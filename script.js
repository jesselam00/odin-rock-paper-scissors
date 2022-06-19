const choices = ["rock","paper","scissors"]
var computerSelection = null
var playerSelection = null

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
            return "Tie! Rock ties with rock"
       } 
       else if (computerSelection === "paper") {
            return "You Lose! Paper beats Rock"
       }
       else if (computerSelection === "scissors") {
            return "You Win! Rock beats Scissors"
       }
       else {
        console.error("Oh dear the playRound has gone horribly wrong.")
        return 0
       }
    }
    if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return "You Win! Paper beats rock"
        } 
        else if (computerSelection === "paper") {
            return "Tie! Paper ties with paper"
        }
        else if (computerSelection === "scissors") {
            return "You Lose! Scissors beats paper"
        }
        else {
         console.error("Oh dear the playRound has gone horribly wrong.")
         return 0
        }
     }
     if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            return "You Lose! Rock beats scissors"
        } 
        else if (computerSelection === "paper") {
            return "You Win! Scissors beats paper"
        }
        else if (computerSelection === "scissors") {
            return "Tie! Scissors ties with scissors"
        }
        else {
         console.error("Oh dear the playRound has gone horribly wrong.")
         return 0
        }
     }
}

playerSelection = "scisSors"
computerSelection = computerPlay()
console.log(computerSelection)
console.log(playRound(playerSelection,computerSelection))