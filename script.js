const questions = [
    {
        question: "What is the capital of France?",
        answers: ["Berlin", "Madrid", "Paris", "Lisbon"],
        correctAnswer: 2,// Index of "Paris"
    },
    {
        question: "What does CSS stand for?",
        answers: [
            "Cascading Style Sheets",
            "Central Style Sheets",
            "Cascading Simple Sheets",
            "Control Style Sheets",
        ],
        correctAnswer: 0,// Index of "Cascading Style Sheets"
    },
    {
        question: "What is the capital city of Japan?",
        answers: ["Beijing", "Seoul", "Tokyo", "Bangkok"],
        correct: 2 // Index of "Tokyo"
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        answers: ["Oxygen", "Gold", "Osmium", "Hydrogen"],
        correct: 0 // Index of "Oxygen"
    },
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        answers: ["Charles Dickens", "William Shakespeare", "Mark Twain", "George Orwell"],
        correct: 1 // Index of "William Shakespeare"
    },
    {
        question: "What is the smallest planet in the solar system?",
        answers: ["Venus", "Mercury", "Mars", "Pluto"],
        correct: 1 // Index of "Mercury"
    },
    {
        question: "Which programming language is primarily used for web development?",
        answers: ["Python", "JavaScript", "C++", "Ruby"],
        correct: 1 // Index of "JavaScript"
    },
    {
        question: "In which year did the Titanic sink?",
        answers: ["1902", "1912", "1922", "1932"],
        correct: 1 // Index of "1912"
    },
    {
        question: "What is the largest mammal in the world?",
        answers: ["Elephant", "Blue Whale", "Giraffe", "Great White Shark"],
        correct: 1 // Index of "Blue Whale"
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: ["Earth", "Mars", "Jupiter", "Saturn"],
        correct: 1 // Index of "Mars"
    },
    {
        question: "What is the hardest natural substance on Earth?",
        answers: ["Gold", "Iron", "Diamond", "Platinum"],
        correct: 2 // Index of "Diamond"
    },
    {
        question: "Who developed the theory of relativity?",
        answers: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"],
        correct: 1 // Index of "Albert Einstein"
    }
]
let currentIndex = 0;
let score = 0;

function startQuiz() {
    document.getElementById("welcomeScreen").classList.remove("active");
    document.getElementById('quizScreen').classList.add("active");
    loadQuestion();

}

function loadQuestion() {
    const questionData = questions[currentIndex];
    document.getElementById("questionText").innerText = questionData.question;
    document.getElementById("btn1").innerText = questionData.answers[0];
    document.getElementById("btn2").innerText = questionData.answers[1];
    document.getElementById("btn3").innerText = questionData.answers[2];
    document.getElementById("btn4").innerText = questionData.answers[3];
}
function selectAnswer(index) {
    if (index === questions[currentIndex].correct) {
        score++;
    }
    currentIndex++;
    if (currentIndex < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById("quizScreen").classList.remove("active");
    document.getElementById("resultsScreen").classList.add("active");
    document.getElementById("scoreText").innerText = `You scored: ${score}/${questions.length}`;
}
function restartQuiz() {
    score = 0;
    currentIndex = 0;
    document.getElementById("resultsScreen").classList.remove("active");
    document.getElementById("welcomeScreen").classList.add("active");
}


