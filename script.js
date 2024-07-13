const questions = [
    { question: "조한결은 잘생겼냐?", answer: "네" },
    { question: "고현진은 구라쟁이인가?", answer: "네" },
    { question: "이진형은 깨끗한 사람인가?", answer: "아니요" }
];

let currentQuestion = 0;
let score = 0;

function showQuestion() {
    if (currentQuestion < questions.length) {
        document.getElementById('question').textContent = questions[currentQuestion].question;
    } else {
        showResult();
    }
}

function answer(userAnswer) {
    if (userAnswer === questions[currentQuestion].answer) {
        score++;
    }
    currentQuestion++;
    showQuestion();
}

function showResult() {
    document.getElementById('quiz-container').style.display = 'none';
    const resultDiv = document.getElementById('result');
    resultDiv.style.display = 'block';
    const resultText = document.getElementById('result-text');
    if (score >= 2) {
        resultText.textContent = `축하합니다! ${score}개 맞추셨습니다. 당신은 이겼습니다!`;
    } else {
        resultText.textContent = `아쉽습니다. ${score}개 맞추셨습니다. 다시 도전해보세요!`;
    }
}

function restart() {
    currentQuestion = 0;
    score = 0;
    document.getElementById('quiz-container').style.display = 'block';
    document.getElementById('result').style.display = 'none';
    showQuestion();
}

document.addEventListener('DOMContentLoaded', showQuestion);
