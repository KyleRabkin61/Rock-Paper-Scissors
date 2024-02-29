// username script

let playerName = prompt('Enter username.')

while (playerName === null || playerName === '') [
    playerName = prompt('Please enter valid username.')

    // If the username is invalid, (either empty input or user clicks cancel on the prompt) the prompt will reappear asking for a valid input.

]
document.getElementById('userName').innerText = `${playerName}'s`
document.getElementById('userNameBattle').innerText = `${playerName}'s`

let playerScore = 0
let computerScore = 0
let roundsPlayed = 1
let roundNumber = 1
let result = 'Who Will Win?'

document.getElementById('finalResult').classList.toggle('d-none')

// resetgame function will set everything back to normal, from the round number returning to one, the player/computer scores to 0, the result message to who will win, and the display-choice-pictures back to question marks.

function resetGame() {
    playerScore = 0
    computerScore = 0
    roundsPlayed = 1
    roundNumber = 1
    result = 'Who Will Win?'
    document.getElementById('playerScore').innerText = `${playerScore}`;
    document.getElementById('computerScore').innerText = `${computerScore}`;
    document.getElementById('rockButton').classList.remove('d-none');
    document.getElementById('paperButton').classList.remove('d-none');
    document.getElementById('scissorsButton').classList.remove('d-none');
    document.getElementById('whatQuestion').classList.remove('d-none');
    document.getElementById('hr').classList.remove('d-none');
    document.getElementById('rounds').innerText = 'Round';
    document.getElementById('roundNumber').innerText = `${roundNumber}`;
    document.getElementById('playerDisplayPicture').src = 'imgs/question-mark.png';
    document.getElementById('computerDisplayPicture').src = 'imgs/question-mark.png';
    
    document.getElementById('result').textContent = `${result}`;
    document.getElementById('finalResult').classList.add('d-none');
}


function playGame(playerChoice) {

    if (roundsPlayed === 5) {
        document.getElementById('rockButton').classList.toggle('d-none')
        document.getElementById('paperButton').classList.toggle('d-none')
        document.getElementById('scissorsButton').classList.toggle('d-none')
        document.getElementById('whatQuestion').classList.toggle('d-none')
        document.getElementById('hr').classList.toggle('d-none')
        document.getElementById('whatRound').innerText = 'Game Over!'
        }
    if (roundsPlayed === 5 && playerScore > computerScore) {
        document.getElementById('finalResult').classList.toggle('d-none')
        document.getElementById('finalResult').innerText = `With ${playerName}'s score as ${playerScore} and the computer's score as ${computerScore}, the winner is ${playerName}!`
    }
    else if (roundsPlayed === 5 && playerScore < computerScore) {
        document.getElementById('finalResult').classList.toggle('d-none')
        document.getElementById('finalResult').innerText = `With ${playerName}'s score as ${playerScore} and the computer's score as ${computerScore}, the winner is the computer!`
    }
    else if (roundsPlayed === 5 && playerScore === computerScore) {
        document.getElementById('finalResult').classList.toggle('d-none')
        document.getElementById('finalResult').innerText = `With ${playerName}'s score as ${playerScore} and the computer's score as ${computerScore}, the game comes to a tie!`
    }

    // establishes what happens if player chooses rock, paper, or scissors.

    if (playerChoice === 'rock') {
        document.getElementById('playerDisplayPicture').src = 'imgs/rock.png'
    }
    else if (playerChoice === 'paper') {
        document.getElementById('playerDisplayPicture').src = 'imgs/paper.png'
    }
    else if (playerChoice === 'scissors') {
        document.getElementById('playerDisplayPicture').src = 'imgs/scissors.png'
    }

    // the computer choice picks a number between 0 and 2 (integer) and depending on what number it chooses, it will get either rock (0), paper (1), or scissors (2). 

    let computerChoice
    let randomNumber = Math.floor(Math.random() * 3)
    switch (randomNumber) {
        case 0:
            document.getElementById('computerDisplayPicture').src = 'imgs/rock.png'
            computerChoice = 'rock'
            break;
        case 1:
            document.getElementById('computerDisplayPicture').src = 'imgs/paper.png'
            computerChoice = 'paper'
            break;
        case 2:
            document.getElementById('computerDisplayPicture').src = 'imgs/scissors.png'
            computerChoice = 'scissors'
            break;
    }

    // result javascript

    if (playerChoice === computerChoice) {
        result = "It's A Tie!"
        roundNumber++
        roundsPlayed++
    }
    else if ((playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')) {
        result = 'You Win!'
        roundNumber++
        playerScore++
        roundsPlayed++
    }
    else if ((playerChoice === 'rock' && computerChoice === 'paper') ||
    (playerChoice === 'paper' && computerChoice === 'scissors') ||
    (playerChoice === 'scissors' && computerChoice === 'rock')){
        result = 'Computer Wins!'
        roundNumber++
        computerScore++
        roundsPlayed++
    }
    document.getElementById('result').innerText = `You chose ${playerChoice}, computer chose ${computerChoice}. ${result}`
    document.getElementById('roundNumber').innerText = ` ${roundNumber}`
    document.getElementById('playerScore').innerText = ` ${playerScore}`
    document.getElementById('computerScore').innerText = ` ${computerScore}`
}