window.onbeforeunload = function() {
    localStorage.clear();  // Sahifa yopilganda yoki yangilanishi oldidan tozalash
};

// Javoblarni tasodifiy aralashtirish uchun yordamchi funksiya
function shuffleAnswers(answers) {
    for (let i = answers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [answers[i], answers[j]] = [answers[j], answers[i]]; // Swap
    }
    return answers;
}


let currentQuestion = 0;

function loadQuestion() {
    const testSection = document.getElementById("testSection");
    const questionObj = questions[currentQuestion];
    const questionNumberSection = document.getElementById("questionNumberSection");

    // Har bir testni ko'rsatish
    questionNumberSection.innerHTML = questions
        .map((_, index) => {
            let className = '';
            const storedResult = localStorage.getItem(`test${index + 1}`);

            // Rangni saqlash
            if (storedResult === 'green') {
                className = 'correct';
            } else if (storedResult === 'red') {
                className = 'incorrect';
            } else if (currentQuestion === index) {
                className = 'active';
            }

            return `<div class="${className}" onclick="goToQuestion(${index})">${index + 1}</div>`;
        })
        .join('');

    testSection.innerHTML = `
        <div class="question">${questionObj.question}</div>
        <div class="answers">
            ${questionObj.answers
                .map(
                    (answer, index) =>
                        `<div class="answer" onclick="checkAnswer(${index})">${answer}</div>`
                )
                .join("")}
        </div>
    `;
    updateButtons();
}

function checkAnswer(index) {
    const questionObj = questions[currentQuestion];
    const answers = document.querySelectorAll(".answer");

    // Javoblarni to'g'ri va noto'g'ri rang bilan bo'yash
    answers.forEach((answer, i) => {
        if (i === questionObj.correct) {
            answer.classList.add("correct");
        } else if (i === index) {
            answer.classList.add("incorrect");
        }
        answer.onclick = null; // Disable further clicking
    });

    // To'g'ri yoki noto'g'ri javobni hisoblash
    if (index === questionObj.correct) {
        localStorage.setItem(`test${currentQuestion + 1}`, 'green');
    } else {
        localStorage.setItem(`test${currentQuestion + 1}`, 'red');
    }

    // Raqamni rangini saqlash
    document.querySelectorAll("#questionNumberSection div")[currentQuestion].classList.add(index === questionObj.correct ? 'correct' : 'incorrect');
}

function updateButtons() {
    document.getElementById("prevBtn").disabled = currentQuestion === 0;
    document.getElementById("nextBtn").disabled = currentQuestion === questions.length - 1;

    // Oxirgi savolga yetganda "Keyingi" tugmasini "Testni yakunlash"ga almashtirish
    if (currentQuestion === questions.length - 1) {
        document.getElementById("nextBtn").style.display = "none";
        document.getElementById("finishBtnSection").style.display = "block";
    } else {
        document.getElementById("nextBtn").style.display = "inline-block";
        document.getElementById("finishBtnSection").style.display = "none";
    }
}

function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion();
    }
}

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
    }
}

function goToQuestion(index) {
    currentQuestion = index;
    loadQuestion();
}

function finishTest() {
    const resultSection = document.getElementById("resultSection");
    resultSection.style.display = "block";
    const resultContent = document.getElementById("resultContent");
    resultContent.innerHTML = `
        <div class="correctCount">Test yakunlandi!</div>
    `;
    localStorage.clear(); // Test tugagach tozalash
}

document.addEventListener("DOMContentLoaded", loadQuestion);
