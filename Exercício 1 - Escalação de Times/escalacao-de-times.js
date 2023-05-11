

function addPlayer () {
  const name = document.getElementById('playerName').value
  const position = document.getElementById('playerPosition').value
  const number = document.getElementById('playerNumber').value

  const confirmation = confirm(
    "\nEscalar jogador?" +
    "\nNome: " + name + 
    "\nPosição: " + position +
    "\nNúmero da camisa: " + number
  )

  if(confirmation) {
    const team = document.getElementById('team')
    const playerItem = document.createElement('li')
    playerItem.id = 'player-' + number
    playerItem.innerText = position + " - " + name + " (" + number + ")"
    team.appendChild(playerItem)

    document.getElementById('playerPosition').value = ''
    document.getElementById('playerName').value = ''
    document.getElementById('playerNumber').value = ''
  }
}

function removePlayer() {
  const number = document.getElementById("numberToRemove").value
  const player = document.getElementById('player-' + number)
  const confirmation = confirm (
    "Remover o jogador " + player.innerText + " ?"
  )

  if(confirmation) {
    document.getElementById('team').removeChild(player)
    document.getElementById('numberToRemove').value = ''

  }
}
