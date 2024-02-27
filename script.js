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
let roundsPlayed = 0
let roundNumber = 1
let result = 'Who Will Win?'

// button script

function playGame(playerChoice) {

    const computerChoice = Math.floor(Math.random() * 3)
    switch (computerChoice) {
        case 0:
            document.getElementById('computerDisplayPicture').src = 'imgs/rock.png'
            return 'rock'
        case 1:
            document.getElementById('computerDisplayPicture').src = 'imgs/paper.png'
            return 'paper'
        case 2:
            document.getElementById('computerDisplayPicture').src = 'imgs/scissors.png'
            return 'scissors'
    }

    // let playerChoice = ['rock', 'paper', 'scissors']

    // if (playerChoice = 'rock') {
    //     document.getElementById('playerDisplayPicture').src = 'imgs/rock.png'
    // }
    // else if (playerChoice = 'paper') {
    //     document.getElementById('playerDisplayPicture').src = 'imgs/paper.png'
    // }
    // else if (playerChoice = 'scissors') {
    //     document.getElementById('playerDisplayPicture').src = 'imgs/scissors.png'
    // } 
    
    document.getElementById('winner').innerText = `${result}`

    if (playerChoice === computerChoice) {
        result = "It's a tie!"
   
    }
    else if ((playerChoice === 'rock' && computerChoice === 'scissors') || 
    (playerChoice === 'paper' && computerChoice === 'rock') || 
    (playerChoice === 'scissors' && computerChoice === 'paper')) {
        result = 'You Win!'
    } 
    else {
        result = 'Computer Wins!'
    }

   

}

// reset script

function resetGame() {
    document.getElementById('playerDisplayPicture').src = 'imgs/question-mark.png'
    document.getElementById('computerDisplayPicture').src = 'imgs/question-mark.png'
    document.getElementById('playerScore').innerText = `${playerScore}`
    document.getElementById('computerScore').innerText = `${computerScore}`
    document.getElementById('roundNumber').innerText = ` ${roundNumber}`
    document.getElementById('winner').textContent = `${result}`
}