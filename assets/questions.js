
var questionTitle = document.querySelector("#question-title");
var choices = document.querySelector("#choices");

// Questions contain buttons for each answer.
var quizQuestions =
 [{
    question:"Question-1", 
    choices: ["1", "2", "3", "4"],
    answer: '1',
  },
  {
    question:"Question-2", 
    choices: ["a", "b", "c", "d"],
    answer: 'a',
  },
  {
    question:"Question-3", 
    choices: ["w", "x", "y", "z"],
    answer: 'z',
  },
  {
    question:"Question-4", 
    choices: ["10", "9", "8", "7"],
    answer: '9',
  }  
] 

var index = 0

// assign question to the html elements
questionTitle.textContent = quizQuestions[index].question;

var questionsList =           
'<ul>'+
'<li><button>' + quizQuestions[index].choices[0] + '</button></li>'+
'<li><button>' + quizQuestions[index].choices[1] + '</button></li>'+
'<li><button>' + quizQuestions[index].choices[2] + '</button></li>'+
'<li><button>' + quizQuestions[index].choices[2] + '</button></li>'+
'</ul>'
choices.innerHTML = questionsList

// for each question, use the question title and choice from the following index


// When answer is clicked, the next question appears


// If the answer clicked was incorrect then subtract time from the clock


// The quiz should end when all questions are answered or the timer reaches 0.


// When the game ends, it should display their score and give the user the ability to save their initials and their score