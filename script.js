// username script

let playerName = prompt('Enter username.')

while (playerName === null || playerName === '')[
    playerName = prompt('Please enter valid username.')
]
    document.getElementById('userName').innerText = `${playerName}'s`
    document.getElementById('userNameBattle').innerText = `${playerName}'s`



let playerScore = 0
let computerScore = 0
let roundsPlayed = 0
let roundNumber = 1

function computerChoice() {
    const randomNumber = Math.floor(Math.random() * 3)
    switch (randomNumber) {
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
    
}

// button script

function rockChoice() {
    document.getElementById('playerDisplayPicture').src = 'imgs/rock.png'
    }
function paperChoice() {
    document.getElementById('playerDisplayPicture').src = 'imgs/paper.png'
}
function scissorChoice() {
    document.getElementById('playerDisplayPicture').src = 'imgs/scissors.png'
    roundNumber
}

// reset script

function resetGame() {
    document.getElementById('playerDisplayPicture').src = 'imgs/question-mark.png'
    document.getElementById('computerDisplayPicture').src = 'imgs/question-mark.png'
    document.getElementById('playerScore').innerText = `${playerScore}`
    document.getElementById('computerScore').innerText = `${computerScore}`
    document.getElementById('roundNumber').innerText = `${roundNumber}`
}