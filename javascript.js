function getComputerChoice() {
    let x = Math.floor(Math.random() * 3);
    let choice;
    if (x===0) {
        choice = "Rock";
    } else if (x===1) {
        choice = "Paper";
    } else {
        choice = "Scissors";
    }
    return choice;
}

let roundResult;
let winMessage;
let lossMessage;
let tieMessage;

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    winMessage = `${playerSelection} beats ${computerSelection.toLowerCase()}! You win!`;
    lossMessage = `${computerSelection} beats ${playerSelection.toLowerCase()}. You lose.`;
    tieMessage = `Two ${playerSelection.toLowerCase()}s. That's a tie!`;
    if (computerSelection==playerSelection) {
        roundResult = tieMessage;
    }
    else if (computerSelection=="Rock") {
        (playerSelection=="Paper") ? roundResult = "win" : roundResult = "loss";
    }
    else if (computerSelection=="Paper") {
        (playerSelection=="Scissors") ? roundResult = "win" : roundResult = "loss";
    }
    else if (computerSelection=="Scissors") {
        (playerSelection=="Rock") ? roundResult = "win" : roundResult = "loss";
    }
    return roundResult;
}

function game() {
    let wins = 0;
    let losses = 0;
    let rounds = 0;
    let userInput;
    while (rounds < 5 && wins < 3 && losses < 3) {
        userInput = prompt("Rock, paper, or scissors?");
        roundResult = playRound(userInput, getComputerChoice());
        if (roundResult=="win") {
            console.log(winMessage);
            wins++;
        } else if (roundResult=="loss") {
            console.log(lossMessage);
            losses++;
        } else {
            console.log(tieMessage);
        }
        rounds++;
    }
    let gameResult;
    (wins > losses) ? gameResult = "win" : 
    (wins < losses) ? gameResult = "loss" : gameResult = "tie";
    return(gameResult);
}