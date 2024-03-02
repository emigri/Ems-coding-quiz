
var questionTitle = document.querySelector("#question-title");
var choicesId = document.querySelector("#choices");
var choicesList = document.querySelectorAll(".choices")

// Questions contain buttons for each answer.
var quizQuestions =
 [{
    question:"Question-1", 
    choices: ["1", "2", "3", "4"],
    answer: 'a',
  },
  {
    question:"Question-2", 
    choices: ["1", "2", "3", "4"],
    answer: 'a',
  },
  {
    question:"Question-3", 
    choices: ["1", "2", "3", "4"],
    answer: 'a',
  },
  {
    question:"Question-4", 
    choices: ["1", "2", "3", "4"],
    answer: 'a',
  }  

] 


// assign question to the html elements
questionTitle.textContent = quizQuestions[0].question;
choice1.textContent = quizQuestions[0].choices[0];
choice2.textContent = quizQuestions[0].choices[1];
choice3.textContent = quizQuestions[0].choices[2];
choice4.textContent = quizQuestions[0].choices[3];

// for each question, use the question title and choice from the following index


// When answer is clicked, the next question appears


// If the answer clicked was incorrect then subtract time from the clock


// The quiz should end when all questions are answered or the timer reaches 0.


// When the game ends, it should display their score and give the user the ability to save their initials and their score