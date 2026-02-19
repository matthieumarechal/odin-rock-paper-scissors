// create 2 variables : machine and player

let machine;
let player;

// create 3 variables for the game : Rock Paper Scissors

const rock = "rock";
const paper = "paper";
const scissors = "scissors";

// we randomly assign Rock Paper Scissors to the Machine

let randomNumber = Math.floor(Math.random() * 3);

machine = 
    randomNumber === 0 ? rock :
    randomNumber === 1 ? paper : scissors;

console.log("DEBBUG - the machine choose : " + machine);

// Ask for the player his choice about Rock Paper Scissors
// We pass our two player choice variables through the comparators and, based on that, we announce who wins the game.
// We reset the variables Machine and Player
// Ask to the player if he wants to play again ?
// Play again or end the game