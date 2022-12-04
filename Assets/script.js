var startButton = document.querySelector("#start-button")
var quizSection = document.querySelector("#questions");
var initSection = document.querySelector("#init")
var currentQuestionIndex = 0

var questionsArray = [
    {
        questions: "commonly used data types DO NOT include:",
        qs: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts",

    },

    {
        quiz: "the condition in an if/else statemwent is encliosed with _____",
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
    var currentQuestion = questionsArray[currentQuestionIndex]
for (let i = 0; i < currentQuestion.qs.length; i++) {
    const element = currentQuestion.qs[i];
    console.log(quizSection.children[0].textContent)
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