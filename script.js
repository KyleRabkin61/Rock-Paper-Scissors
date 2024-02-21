let playerName = prompt('Enter Name of user')

if (playerName === null) {
    prompt('Please enter a valid name')
}
else if (playerName === true) {
    document.getElementById('playerName').innerText = `${playerName}'s Score`
}



function rockChoice() {
    document.getElementById('pChoice').src = 'imgs/rock.png'
}
function paperChoice() {
    
}
function scissorChoice() {
    
}