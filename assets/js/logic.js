// queryselectors
var timerElement = document.querySelector("#time");
var startScreen = document.querySelector(".start");
var startButton = document.querySelector("#start");
var question = document.querySelector('#questions');

var endScreen = document.querySelector("#end-screen");
var submit = document.querySelector("#submit");
var feedback = document.querySelector(".feedback");
var result = document.querySelector('#final-score');
var initial = document.getElementById("initials")

var questionTitle = document.querySelector("#question-title");
var choices = document.querySelector("#choices");
var choicesBtn = document.querySelectorAll(".choicesBtn")

// variables
var timerCount = 60;
var timerId
var index = 0

// function that starts time when the startButton is clicked
function timer() {
    timerCount --;
    timerElement.textContent = timerCount;
    //if time runs out, end quiz
    if (timerCount <= 0) {
      endQuiz()
    }
}

// function that brings up the questions when startButton is clicked
function startQuestions() {
  startScreen.style.display = 'none';
  question.style.display = 'block';
  timerId = setInterval(timer, 1000);
  setQuestions()
}

// assign question to the html elements
function setQuestions() {
  questionTitle.textContent = quizQuestions[index].question;
  var questionsList =           
  '<ul>'+
  '<li><button class="choicesBtn" value=' + quizQuestions[index].choices[0] + '>' + quizQuestions[index].choices[0] + '</button></li>'+
  '<li><button class="choicesBtn" value=' + quizQuestions[index].choices[1] + '>' + quizQuestions[index].choices[1] + '</button></li>'+
  '<li><button class="choicesBtn" value=' + quizQuestions[index].choices[2] + '>' + quizQuestions[index].choices[2] + '</button></li>'+
  '<li><button class="choicesBtn" value=' + quizQuestions[index].choices[3] + '>' + quizQuestions[index].choices[3] + '</button></li>'+
  '</ul>'
  choices.innerHTML = questionsList
  choices.addEventListener('click', selectAnswer)
}

function selectAnswer(event) {
  // If the answer clicked was incorrect then subtract time from the clock
  if (quizQuestions[index].answer !== event.target.innerText){
    timerCount -= 5;
    timerElement.textContent = timerCount;
  }
  // When answer is clicked, the next question appears
  index++
  // The quiz should end when all questions are answered or the timer reaches 0.
  if (quizQuestions.length === index) {
    endQuiz()
  } else {
    setQuestions()
  }
} 

// When the game ends, it should display their score and give the user the ability to save their initials and their score
function endQuiz(){
  question.style.display = 'none';
  endScreen.style.display = 'block';
  clearInterval(timerId)
  result.textContent = timerCount;
}

function submitScore() {
  var initials = initial.value;
  var playerScore = {
    playerInitials: initials,
    score: timerCount,
  }
  localStorage.setItem("playerInitial", playerScore)
  console.log(localStorage)
}


// event listener that executes function that start the timer and displays the first question
startButton.addEventListener('click', startQuestions);

////on submit, use local storage to set initial and set result onto highscore page
submit.addEventListener('click', submitScore)