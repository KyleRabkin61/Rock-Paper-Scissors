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
document.getElementById('rounds').innerText = 'Round: ';
document.getElementById('roundNumber').innerText = `${roundNumber}`;

function playGame(playerChoice) {

    // this script establishes what happens when the rounds the game has gone on for has reached five. when this happens, the game will be over, removing the buttons to play another round, as well as replace the round text with game over. It also establishes a winner/loser/tie depending on the scores. if the player wins, confetti pops out!

    if (roundsPlayed === 5) {
        document.getElementById('rockButton').classList.toggle('d-none')
        document.getElementById('paperButton').classList.toggle('d-none')
        document.getElementById('scissorsButton').classList.toggle('d-none')
        document.getElementById('whatQuestion').classList.toggle('d-none')
        document.getElementById('hr').classList.toggle('d-none')
        document.getElementById('round').innerText = 'Game Over!'
        document.getElementById('round').classList.remove('my-5')
        }
    if (roundsPlayed === 5 && playerScore > computerScore) {
        document.getElementById('finalResult').classList.toggle('d-none')
        document.getElementById('finalResult').innerText = [`With ${playerName}'s score as ${playerScore} and the computer's score as ${computerScore}, the winner is ${playerName}!`]
        var end = Date.now() + (1 * 1000);

        var colors = ['#424874', '#dcd6f7', '#a6b1e1',];

        (function frame() {
        confetti({
            particleCount: 2,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: colors
        });
        confetti({
            particleCount: 2,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: colors
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
        }());
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

    // the computer choice picks a number between 0 and 2 (integer) and depending on what number it chooses, it will get either rock (0), paper (1), or scissors (2). this will also change the image for the computer choice, depending on what it picks.

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

    // this script displays what each outcome will look like, whether it is a win, lose, or a tie for the user. for each outcome, the round number increases by one. for a win, the player score will increase by one and for a loss, the computer score will increase by one. for a tie, neither score will increase.

    if (playerChoice === computerChoice) {
        result = "It's A Tie!"
        roundNumber++
        roundsPlayed++
    }
    else if ((playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')) {
        winMsgs = ['You won this round!', 'You win!', 'This round goes to you!']
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

    result = winMsgs[Math.floor(math.random() * winMsgs.length)]

    document.getElementById('result').innerText = `You chose ${playerChoice}, computer chose ${computerChoice}. ${result}`
    document.getElementById('roundNumber').textContent = ` ${roundNumber}`
    document.getElementById('playerScore').innerText = ` ${playerScore}`
    document.getElementById('computerScore').innerText = ` ${computerScore}`
}

// resetgame function will reset the game by reseting the scores, placing the buttons back, and the rounds played.

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
    document.getElementById('round').innerHTML = `Round <span id="roundNumber">1</span>`;
    document.getElementById('round').classList.add('my-5')
    document.getElementById('playerDisplayPicture').src = 'imgs/question-mark.png';
    document.getElementById('computerDisplayPicture').src = 'imgs/question-mark.png';
    document.getElementById('result').textContent = `${result}`;
    document.getElementById('finalResult').classList.add('d-none');
}
