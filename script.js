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

// Function to get the Machine's choice with a math random and conditions

function getMachineChoice() {

    let randomNumber = Math.floor(Math.random() * 3);
    //console.log("DEBBUG - the random number for the machine is : " + randomNumber);

    let choice = 
        randomNumber === 0 ? rock :
        randomNumber === 1 ? paper : scissors;

    //console.log("DEBBUG - the machine choose : " + choice);

    return choice;

}

// Function to get the player's choice with a prompt. I've decided to use a number as input in order to avoid case sensitive issues
// Like the assignement said, we assume that player is going to give good inputs so we don't code anything in order to avoid player's errors...

function getHumanChoice() {

    let number = prompt("Make a choice ! Type the corresponding number of your choice : \n 1 - Rock\n 2 - Paper\n 3 - Scissors");

    let choice = 
        number === "" ? alert("you didn't type anything please try again") :
        number === "1" ? rock :
        number === "2" ? paper :
        number === "3" ? scissors : alert("You didn't type a good number");

    //console.log("DEBBUG - the player choose : " + choice);

    return choice;

}

// The function that plays a round, comparing machine and player strings and add it to the score

function PlayRound(machineChoice, playerChoice) {

    let comparison = `${machineChoice} ${playerChoice}`;

    //console.log("DEBBUG - comparison string : " + comparison);

    if (machineChoice === playerChoice) {
        alert(`${machineChoice} and ${playerChoice} it's a draw...`)
        //console.log("DEBBUG - result is : Draw...");
        return 
    }
    
    comparison === "rock paper" ? humanScore++ :
    comparison === "rock scissors" ? computerScore++ :

    comparison === "paper rock" ? computerScore++ :
    comparison === "paper scissors" ? humanScore++ :

    comparison === "scissors rock" ? humanScore++ : computerScore++;

    return;
}

// function that runs the whole game for 5 rounds using a FOR

function playGame() {

    for (i = 1; i < 6; i++) {

        console.log("- - - - - ROUND : " + i + " - - - - -");

        machineChoice = getMachineChoice();
        playerChoice = getHumanChoice();

        console.log("Computer choose : " + machineChoice);
        console.log("You choose : " + playerChoice);

        PlayRound(machineChoice, playerChoice);
        console.log("Computer's score : " + computerScore + " // human's score : " + humanScore);

        if (i === 5) {
            let winner = 
                (computerScore > humanScore) ? "Computer wins!" : 
                (computerScore < humanScore) ? "Human wins!" : "0 to 0, it's a draw..."
            console.log(winner);
        }

    }

}

// call the main function
playGame();




