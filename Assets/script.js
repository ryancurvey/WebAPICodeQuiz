var startButton = document.querySelector("#start-button")
var quizSection = document.querySelector("#questions");
var initSection = document.querySelector("#init")
var answersSelection1 = document.querySelector("#a-1");
var answersSelection2 = document.querySelector("#a-2");
var answersSelection3 = document.querySelector("#a-3");
var answersSelection4 = document.querySelector("#a-4");
var questionSection = document.querySelector(".Quiz-Questions")
var answerButton = document.getElementsByClassName(".Answer-Button")

var currentQuestionIndex = 0

var questionsArray = [
    {
        quiz: "commonly used data types DO NOT include:",
        qs: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts",

    },

    {
        quiz: "the condition in an if/else statemwent is enclosed with _____",
        qs: ["quotess", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses",

    },

    {
        quiz: "arrays in JavaScript can be used to store______",
        qs: ["numbers & strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above",

    },

    {
        quiz: "string values must be enclosed within _____ when being assiged to variables",
        qs: ["commas", "curly brackets", "quotes", "parentheses"],
        answer: "quotes",

    },

    {
        quiz: "a very helpful tool used during development and debugging for printing content to the debugger is:",
        qs: ["JavaScript", "terminal/bash", "for loops", "console log"],
        answer: "console log",

    },
];

function startQuiz(event) {
    console.log("quiz starting")
    event.preventDefault()
    initSection.setAttribute("hidden", "true")
    quizSection.removeAttribute("hidden")
    getQuestion()
};

function getQuestion() {
    console.log("getting question", questionsArray[currentQuestionIndex])
    var currentQuestion = questionsArray[currentQuestionIndex].quiz;
    questionSection.textContent = currentQuestion;
    var currentAnswer = questionsArray[currentQuestionIndex].qs;
    for (let i = 0; i < currentAnswer.length; i++) {
        const element = currentQuestion.qs[i];
        console.log(quizSection.children[0].textContent);

        
        
        for (let j = 0; j < answerButton.length; j++) {
            answerButton[j].textContent = currentAnswer;

        }


    }
    if (currentQuestionIndex >= questionsArray.length) {
        document.write("quiz is over")
    }
}

function handleAnswer(event) {
    console.log(event.target)
    event.preventDefault()

    if (event.target) {
        getQuestion()

    }
    // increment current question index at the end 
    currentQuestionIndex++
}