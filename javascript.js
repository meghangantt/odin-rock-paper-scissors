let wins = 0, losses = 0, ties = 0, rounds = 0;

let winsMsg = document.querySelector('.winsMsg');
winsMsg.textContent = `Wins: ${wins}`;

let lossesMsg = document.querySelector('.lossesMsg');
lossesMsg.textContent = `Losses: ${losses}`;

let tiesMsg = document.querySelector('.tiesMsg');
tiesMsg.textContent = `Ties: ${ties}`;

let buttons = document.querySelector('.btn');

const rockBtn = document.querySelector('.btn.rock');
rockBtn.onclick = () => tryToPlay("Rock", getComputerChoice());

const paperBtn = document.querySelector('.btn.paper');
paperBtn.onclick = () => tryToPlay("Paper", getComputerChoice());

const scissorsBtn = document.querySelector('.btn.scissors');
scissorsBtn.onclick = () => tryToPlay("Scissors", getComputerChoice());

let gameOver;

function tryToPlay(playerSelection, computerSelection) {
    if (gameOver) {
        resultMsg.textContent = 'Press "Start New Game" to play again!';
    } else {
        playRound(playerSelection, computerSelection);
    }
}

let resultMsg = document.querySelector('.resultMsg');
resultMsg.textContent = "Choose your weapon to start the game!";

const newGameBtn = document.querySelector('.btn.newGame');
newGameBtn.style.cssText = 'background: #E5E28B';
newGameBtn.onclick = () => newGame();

function newGame() {
    gameOver = false;
    wins = 0;
    winsMsg.textContent = `Wins: ${wins}`;
    losses = 0;
    lossesMsg.textContent = `Losses: ${losses}`;
    ties = 0;
    tiesMsg.textContent = `Ties: ${ties}`;
    rounds = 0;
    resultMsg.textContent = "Choose your weapon to start the game!";
}

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

function playRound(playerSelection, computerSelection) {
    rounds += 1;
    let roundResult;
    if (playerSelection===computerSelection) {
        tieRound(playerSelection);
    } else if (computerSelection=="Rock") {
        (playerSelection=="Paper") ? winRound(playerSelection, computerSelection)
            : loseRound(playerSelection, computerSelection);
    } else if (computerSelection=="Paper") {
        (playerSelection=="Scissors") ? winRound(playerSelection, computerSelection)
            : loseRound(playerSelection, computerSelection);
    } else if (computerSelection=="Scissors") {
        (playerSelection=="Rock") ? winRound(playerSelection, computerSelection)
            : loseRound(playerSelection, computerSelection);
    }
    checkForWinner();
}

function winRound(playerSelection, computerSelection) {
    resultMsg.textContent = 
        `${playerSelection} beats ${computerSelection.toLowerCase()}! You win this round!`;
    wins += 1;
    winsMsg.textContent = `Wins: ${wins}`;
}

function loseRound(playerSelection, computerSelection) {
    resultMsg.textContent = 
        `${computerSelection} beats ${playerSelection.toLowerCase()}. You lose this round.`;
    losses += 1;
    lossesMsg.textContent = `Losses: ${losses}`;
}

function tieRound(playerSelection) {
    if (playerSelection==="Scissors") {
        resultMsg.textContent = 
            `Two ${playerSelection.toLowerCase()}. This one's a tie!`;
    } else {
        resultMsg.textContent = 
            `Two ${playerSelection.toLowerCase()}s. This one's a tie!`;
    }
    ties += 1;
    tiesMsg.textContent = `Ties: ${ties}`;
}

function checkForWinner() {
    let haveAWinner = (rounds===5 || wins===3 || losses===3) ? true : false;
    if (haveAWinner) {
        endGame();
    }
}

function endGame() {
    gameOver = true;
    if (wins > losses) {
        resultMsg.textContent = `You win the game ${wins} to ${losses}!`;
    } else if (losses > wins) {
        resultMsg.textContent = `You lose the game ${losses} to ${wins}.`;
    } else {
        resultMsg.textContent = `This game was a tie: ${losses} to ${wins} after 5 rounds.`;
    }
}