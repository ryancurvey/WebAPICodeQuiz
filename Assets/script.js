var startButton = document.querySelector("#start-button")
var quizSection = document.querySelector("#questions");
var initSection = document.querySelector("#init")
var currentQuestionIndex = 0

var questionsArray = [
    {
        quiz: "commonly used data types DO NOT include:",
        qs: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts",

    },

    {
        quiz: "commonly used data types DO NOT include:",
        qs: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts",

    },

    {
        quiz: "commonly used data types DO NOT include:",
        qs: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts",

    },

    {
        quiz: "commonly used data types DO NOT include:",
        qs: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts",

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