// Variables
var startSection = document.querySelector(".start");
var startBtn = document.querySelector("#start-button");
var quizSection = document.querySelector(".question");
var choicesBtns = document.querySelectorAll(".choices");
var quizH2 = document.querySelector(".quiz")
var scoreDisplay = document.querySelector(".score");
var countdownDisplay = document.querySelector("#countdown");
var initialsSection = document.querySelector(".player");
var input = document.querySelector(".player-input");
var submitBtn = document.querySelector(".submit");
var highscoreSection = document.querySelector(".high-scores");


var currentIndex = 0;
var score = 0;
var countdown = 60;
var NO_OF_HIGH_SCORES = 10;
var HIGH_SCORES = 0;


//Variables with questions listed.
var question = [
  {
    quiz: "What kind of language is JavaScript?",
    choices: ["Hypertext Markup Language", "Object-based", "Object-Oriented", "Cascading Style Sheet"],
    answer: "Object-Oriented"
  },
  {
    quiz: "Which function is used to serialize an object into JSON string in JavaScript?",
    choices: ["parse()", "stringify()", "array()", "parseInt()"],
    answer: "stringify()"
  },
  {
    quiz: "Which of the following is a JavaScript framework?",
    choices: ["Spark", "Django", "Spring", "React"],
    answer: "React"
  },
  {
    quiz: "Which of the following are not server-side JavaScript objects?",
    choices: ["Date", "FileUpload", "Function", "All of the above"],
    answer: "All of the above"
  },
  {
    quiz: "Which of the following is not a method?",
    choices: ["toLowerCase()", ".length", "push()", "sort()"],
    answer: ".length"
  },
  {
    quiz: "Which of the following methods can be used to display data in some form using JavaScript?",
    choices: ["document.write()", "console.log", "window.alert", "All of the above"],
    answer: "All of the above"
  },
  
]


//Start button that shows question section.
startBtn.addEventListener("click", function() {

  startSection.classList.remove("active");
  quizSection.classList.add("active");

  scoreDisplay.textContent = score;

  startTimer();
  showQuestion();
})

// Displays question with choices, score addition, and countdown penalty.
function showQuestion() {
  quizH2.textContent = question[currentIndex].quiz;

  choicesBtns.forEach((btn, index) => {
    btn.textContent = question[currentIndex].choices[index];

    btn.addEventListener("click", function() {

        if (btn.textContent === question[currentIndex].answer) {
            score++;
            scoreDisplay.textContent = score;
            nextQuiz();
           
        } else {
            countdown -= 10;
        }
        
    })

  })


}

//If there are no more questions, ask the initials. If not, keep asking next question.
function nextQuiz() {

  if (currentIndex === (question.length - 1)) {
      
      askInitials();


  } else {
      currentIndex++;

      quizH2.textContent = question[currentIndex].quiz;

      choicesBtns.forEach((btn, index) => {
      btn.textContent = question[currentIndex].choices[index];
      })

  }
}

//Start countdown timer. Once time ends, ask initials.
function startTimer() {
  countdownDisplay.textContent = countdown;

  var countdownTimer = setInterval(function() {
      countdown--;
      countdownDisplay.textContent = countdown;

      if (countdown <= 0) {
          clearInterval(countdownTimer)
          askInitials();
      }
  }, 1000)

}

//Initials section 
function askInitials() {
  quizSection.classList.remove("active");
  initialsSection.classList.add("active");

  getScore();

}

//saves score with initials section
submitBtn.addEventListener("click", function() {
  var playerInitials = input.value;
  
  initialsSection.classList.remove("active");
  highscoreSection.classList.add("active");
  
  setScore(score, playerInitials);
})


function setScore() {
  
  localStorage.setItem("highscore", score);
  localStorage.setItem("playerInitials", document.getElementById('player-input').value);

  getScore();
}

function getScore() {
  var scoreSummary = `
  <h2>` + localStorage.getItem("playerInitials") + `'s highscore: <h2>
  <h1>` + localStorage.getItem("highscore") + `</h1>
  
  <button onclick="clearScore()">Reset Score</button><button onclick="resetGame()">Replay</button>`;

  document.getElementById(".high-scores").innerHTML = scoreSummary;
}

function clearScore(){
  localStorage.setItem("highscore", "");
  localStorage.setItem("player-input", "");

}





// function setScore() {
//   local
// }























