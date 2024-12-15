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
let correctAnswers = 0;
let incorrectAnswers = 0;

function loadQuestion() {
    const testSection = document.getElementById("testSection");
    const questionObj = questions[currentQuestion];
    const questionNumberSection = document.getElementById("questionNumberSection");

    // Javoblarni tasodifiy aralashtirishdan oldin to'g'ri javob indeksini saqlaymiz
    const correctAnswer = questionObj.correct;

    // Javoblarni aralashtirish
    const shuffledAnswers = shuffleAnswers([...questionObj.answers]);

    // Aralashtirilgan ro‘yxatdagi yangi to‘g‘ri javobning indeksini topish
    const newCorrectIndex = shuffledAnswers.indexOf(questionObj.answers[correctAnswer]);

    // To‘g‘ri javobning yangi indeksini yangilaymiz
    questionObj.correct = newCorrectIndex;

    // Yangi testni boshlashda ranglarni o'rnatish
    questionNumberSection.innerHTML = questions
        .map((_, index) => {
            let className = '';
            const storedResult = localStorage.getItem(`test${index + 1}`);

            // Saqlangan ranglarga qarab sinf qo'shish
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
            ${shuffledAnswers
                .map(
                    (answer, index) => {
                        // Saqlangan javobni tekshirish
                        const storedAnswer = localStorage.getItem(`answer_${currentQuestion}`);
                        let className = '';
                        
                        if (storedAnswer != null) {
                            // Agar javob saqlangan bo'lsa, uni ko'rsatish
                            if (parseInt(storedAnswer) === index) {
                                className = index === newCorrectIndex ? 'correct' : 'incorrect';
                            }
                        }
                        
                        return `<div class="answer ${className}" onclick="checkAnswer(${index})">${answer}</div>`;
                    }
                )
                .join("")}
        </div>
    `;
    updateButtons();
}



function checkAnswer(index) {
    const questionObj = questions[currentQuestion];
    const answers = document.querySelectorAll(".answer");

    // Agar javob oldin tanlangan bo'lsa, uni qayta tanlashga ruxsat bermaymiz
    if (localStorage.getItem(`answer_${currentQuestion}`) != null) {
        return; // Javobni qayta tanlashni oldini olish
    }

    // Javoblarni to'g'ri va noto'g'ri rang bilan bo'yash
    answers.forEach((answer, i) => {
        if (i === questionObj.correct) {
            answer.classList.add("correct");
        } else if (i === index) {
            answer.classList.add("incorrect");
        }
        answer.onclick = null; // Disable further clicking
    });

    // Saqlangan javobni localStorage ga yozish
    localStorage.setItem(`answer_${currentQuestion}`, index);

    // To'g'ri yoki noto'g'ri javobni hisoblash
    if (index === questionObj.correct) {
        correctAnswers++;
        localStorage.setItem(`test${currentQuestion + 1}`, 'green');
    } else {
        incorrectAnswers++;
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
    if (correctAnswers + incorrectAnswers === questions.length) {
        const resultSection = document.getElementById("resultSection");
        resultSection.style.display = "block";
        const resultContent = document.getElementById("resultContent");
        const totalQuestions = questions.length;
        const correctPercentage = ((correctAnswers / totalQuestions) * 100).toFixed(2);
        const incorrectPercentage = ((incorrectAnswers / totalQuestions) * 100).toFixed(2);

        resultContent.innerHTML = `
            <div class="correctCount">To'g'ri javoblar: ${correctAnswers} (${correctPercentage}%)</div>
            <div class="incorrectCount">Xato javoblar: ${incorrectAnswers} (${incorrectPercentage}%)</div>
        `;
        localStorage.clear(); // Test tugagandan so'ng localStorage tozalash
    } else {
        alert("Barchasini belgilang!");
    }
}

document.addEventListener("DOMContentLoaded", loadQuestion);