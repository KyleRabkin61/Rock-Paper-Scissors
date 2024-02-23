// username script

let playerName = prompt('Enter username.')

while (playerName === null || playerName === '')[
    playerName = prompt('Please enter valid username.')
]
    document.getElementById('userName').innerText = `${playerName}'s`
    document.getElementById('userNameBattle').innerText = `${playerName}'s`

// button script

function rockChoice() {
    document.getElementById('playerDisplayPicture').src = 'imgs/rock.png'
}
function paperChoice() {
    document.getElementById('playerDisplayPicture').src = 'imgs/paper.png'
}
function scissorChoice() {
    document.getElementById('playerDisplayPicture').src = 'imgs/scissors.png'
}

// reset script

function resetGame() {
    document.getElementById('playerDisplayPicture').src = 'imgs/question-mark.png'
    document.getElementById('playerDisplayPicture').src = 'imgs/question-mark.png'
}