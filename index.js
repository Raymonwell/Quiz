const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C++",
        C: "Python",
        d: "javascript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        C: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        C: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborgini",
        correct: "a",
    },
    {
        question: "What year was Javascript Lunched?",
        a: "1996",
        b: "1995",
        C: "1994",
        d: "none of the above",
        correct: "b",
    },
];

const quiz= document.getElementById('quiz')
const answerEIs = document.querySelectorAll('.answer')
const questionEI= document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitbtn = document.getElementById('submit')
const quizContainer = document.querySelector(".quiz-header")
const summary = document.querySelector(".summary")
const scoreHolder = document.querySelector("#score")
const retake = document.querySelector("#retake")

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEI.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.C
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEIs.forEach(answerEIs => answerEIs.checked = false)
}

function getSelected() {
    let answer
    answerEIs.forEach(answerEI => {
        if(answerEI.checked) {
            answer = answerEI.id
        }
    })
    return answer
}

retake.onclick = function() {
    location.reload();
}

submitbtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quizContainer.classList.add("close");
            summary.classList.add("open");
            scoreHolder.innerText = score;
            // quiz.innerHTML =  '
            // <h2>You answer ${score}/${quizData.length} questions correctly</h2>

            // <button onclick="location.reload()"></button>
            // '
        }
    } 
}) 