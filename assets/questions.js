
var questionTitle = document.querySelector("#question-title");
var choicesId = document.querySelector("choices");
var choicesList = document.querySelectorAll(".choices")
var choice1 = document.querySelector("#choice1");
var choice2 = document.querySelector("#choice2");
var choice3 = document.querySelector("#choice3");
var choice4 = document.querySelector("#choice4");

// Questions contain buttons for each answer.
var quizQuestions =
 [{
  question:'Question-1', 
  choices: {
      1: 'First answer',
      2: 'Second answer',
      3: 'Third answer',
      4: 'Fourth answer',
    },
  answer: 'a',
  },
  {
    question:'Question-2', 
    choices: {
        1: 'a',
        2: 'b',
        3: 'c',
        4: 'd',
      },
    answer: 'a',
    }] 


// assign question to the html elements
questionTitle.textContent = quizQuestions[0].question;
choice1.textContent = quizQuestions[0].choices[1];
choice2.textContent = quizQuestions[0].choices[2];
choice3.textContent = quizQuestions[0].choices[3];
choice4.textContent = quizQuestions[0].choices[4];

// for each question, use the question title and choice from the following index

// When answer is clicked, the next question appears


// If the answer clicked was incorrect then subtract time from the clock


// The quiz should end when all questions are answered or the timer reaches 0.


// When the game ends, it should display their score and give the user the ability to save their initials and their score