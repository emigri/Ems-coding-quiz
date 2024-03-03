var highscores = document.querySelector('#highscores')
var clearBtn = document.querySelector('#clear')

function displayScores(){
  var savedScores = JSON.parse(localStorage.getItem("playerScores")) || [];
  savedScores.forEach(score => {
    var listItem =
    '<li>'+ score.playerInitials + ' - ' + score.score + '</li>'
    highscores.innerHTML += listItem
  });
}

function clearScores() {
  localStorage.removeItem("playerScores")
  location.reload()
}

clearBtn.addEventListener('click', clearScores)
displayScores()