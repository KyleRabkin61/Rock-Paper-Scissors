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
let roundNumber = 1
let result = 'Who Will Win?'

function playGame(playerChoice) {

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

// result javascript

    if (playerChoice === computerChoice) {
        result = "It's a tie!"
        roundNumber++;
    }
    else if ((playerChoice === 'rock' && computerChoice === 'scissors') || 
    (playerChoice === 'paper' && computerChoice === 'rock') || 
    (playerChoice === 'scissors' && computerChoice === 'paper')) {
        result = 'You Win!'
        roundNumber++
        playerScore++
    } 
    else {
        result = 'Computer Wins!'
        roundNumber++
        computerScore++
    }
    document.getElementById('result').innerText = `${result}`
    document.getElementById('roundNumber').innerText = `${roundNumber}`

}

// resetgame function will set everything back to normal, from the round number returning to one, the player/computer scores to 0, the result message to who will win, and the display-choice-pictures back to question marks.

function resetGame() {
    document.getElementById('playerDisplayPicture').src = 'imgs/question-mark.png'
    document.getElementById('computerDisplayPicture').src = 'imgs/question-mark.png'
    document.getElementById('playerScore').innerText = `${playerScore}`
    document.getElementById('computerScore').innerText = `${computerScore}`
    document.getElementById('roundNumber').innerText = ` ${roundNumber}`
    document.getElementById('winner').textContent = `${result}`
}