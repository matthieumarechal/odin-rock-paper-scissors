// create 2 variables : machine and player

let machineChoice;
let playerChoice;

// create 3 variables for the game : Rock Paper Scissors

const rock = "rock";
const paper = "paper";
const scissors = "scissors";

// we randomly assign Rock Paper Scissors to the Machine

let randomNumber = Math.floor(Math.random() * 3);
console.log("DEBBUG - the random number for the machine is : " + randomNumber);

machineChoice = 
    randomNumber === 0 ? rock :
    randomNumber === 1 ? paper : scissors;

console.log("DEBBUG - the machine choose : " + machineChoice);

// Ask for the player his choice about Rock Paper Scissors

let choice = prompt("Make a choice ! Type the corresponding number of your choice : \n 1 - Rock\n 2 - Paper\n 3 - Scissors");

playerChoice = 
    choice === "" ? alert("you didn't type anything please try again") :
    choice === "1" ? rock :
    choice === "2" ? paper :
    choice === "3" ? scissors : alert("You didn't type a good number");

console.log("DEBBUG - the player choose : " + playerChoice);

// We pass our two player choice variables through the comparators and, based on that, we announce who wins the game.
// We reset the variables Machine and Player
// Ask to the player if he wants to play again ?
// Play again or end the game