// create 2 variables to store the machine's choice and player's choice

let machineChoice;
let playerChoice;

// create 2 variables for scoring

let computerScore = 0;
let humanScore = 0;

// create 3 variables for the game : Rock Paper Scissors

const rock = "rock";
const paper = "paper";
const scissors = "scissors";

// we randomly assign Rock Paper Scissors to the Machine

function getMachineChoice() {

    let randomNumber = Math.floor(Math.random() * 3);
    console.log("DEBBUG - the random number for the machine is : " + randomNumber);

    let choice = 
        randomNumber === 0 ? rock :
        randomNumber === 1 ? paper : scissors;

    console.log("DEBBUG - the machine choose : " + choice);

    return choice;

}

// Ask for the player his choice with a number about Rock Paper Scissors

function getHumanChoice() {

    let number = prompt("Make a choice ! Type the corresponding number of your choice : \n 1 - Rock\n 2 - Paper\n 3 - Scissors");

    let choice = 
        number === "" ? alert("you didn't type anything please try again") :
        number === "1" ? rock :
        number === "2" ? paper :
        number === "3" ? scissors : alert("You didn't type a good number");

    console.log("DEBBUG - the player choose : " + choice);

    return choice;

}

// We pass our two players choices variables through the comparators and, based on that, we announce who wins the game.

function PlayRound(machineChoice, playerChoice) {

    let comparison = `${machineChoice} ${playerChoice}`;

    console.log("DEBBUG - comparison string : " + comparison);

    if (machineChoice === playerChoice) {
        alert(`${machineChoice} and ${playerChoice} it's a draw...`)
        console.log("DEBBUG - result is : Draw...");
        return 
    }
    
    comparison === "rock paper" ? humanScore++ :
    comparison === "rock scissors" ? computerScore++ :

    comparison === "paper rock" ? computerScore++ :
    comparison === "paper scissors" ? humanScore++ :

    comparison === "scissors rock" ? humanScore++ : computerScore++;

    return;
}

function playGame() {

    machineChoice = getMachineChoice();
    playerChoice = getHumanChoice();
    PlayRound(machineChoice, playerChoice);
    console.log("DEBBUG - computer's score : " + computerScore + " human's score : " + humanScore);

}


for (i = 1; i < 6; i++) {
    
    console.log("DEBBUG - round : " + i);

    playGame();
    
    if (i === 5) {
       let winner = (computerScore > humanScore) ? "Computer wins!" : "Human wins!";
       console.log(winner);
    }
    
}



