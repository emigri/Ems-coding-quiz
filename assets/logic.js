// queryselectors
var timerElement = document.querySelector("#time");
var startScreen = document.querySelector(".start");
var startButton = document.querySelector("#start");
var question = document.querySelector('#questions');

var endScreen = document.querySelector("end-screen");
var submit = document.querySelector(".submit");
var feedback = document.querySelector(".feedback");

// variables
var timerCount = 0;

// function that starts time when the startButton is clicked
function startTimer() {
  setInterval(function() {
    timerCount ++;
    timerElement.textContent = timerCount;
  }, 1000);
}


// function that brings up the questions when startButton is clicked
function startQuestions() {
  startScreen.style.display = 'none';
  question.style.display = 'block';
  startTimer()
}

// event listener that executes function that start the timer and displays the first question
startButton.addEventListener("click", startQuestions);