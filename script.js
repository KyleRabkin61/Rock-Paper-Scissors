let playerName = prompt('Enter Name of user')

if (playerName === null) {
    prompt('Please enter a valid name')
}
    document.getElementById('userName').innerText = `${playerName}'s`



function rockChoice() {
    document.getElementById('playerDisplayPicture').src = 'imgs/rock.png'
}
function paperChoice() {
    
}
function scissorChoice() {
    
}