const choices = ["rock","paper","scissors"]
var computerChoice = null

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
computerChoice = computerPlay()
console.log(computerChoice)