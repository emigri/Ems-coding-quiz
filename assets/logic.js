// queryselectors
var timerElement = document.querySelector("#time");
var startScreen = document.querySelector(".start");
var startButton = document.querySelector("#start");

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
  startScreen.textContent = 0
}

// create an event listener that executes a function that start the timer
startButton.addEventListener("click", startTimer, startQuestions);