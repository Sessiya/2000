// Saqlangan savollarni olish
let savedQuestions = JSON.parse(localStorage.getItem('savedQuestions')) || [];

document.addEventListener("DOMContentLoaded", () => {
  showSavedQuestions(); // Saqlangan savollarni ko'rsatish

  // "Asosiy Sahifaga Qaytish" tugmasi
  document.getElementById("back-to-main").addEventListener("click", () => {
    window.location.href = "../index.html"; // Asosiy sahifaga qaytish
  });

  // Tungi rejimni yoqish/o‘chirish
  document.getElementById("dark-mode-toggle").addEventListener("click", toggleDarkMode);
});

// Tungi rejimni yoqish/o‘chirish funksiyasi
function toggleDarkMode() {
  const body = document.body;
  const toggleButton = document.getElementById("dark-mode-toggle");
  body.classList.toggle("dark-mode");
  toggleButton.textContent = body.classList.contains("dark-mode") ? "🌙" : "☀️";
}

// Saqlangan savollarni ko'rsatish
function showSavedQuestions() {
  const savedContainer = document.getElementById("saved-questions-container");
  savedContainer.innerHTML = ""; 

  if (savedQuestions.length > 0) {
    savedQuestions.forEach((ticket, index) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <strong>${ticket.question}</strong>
        <button id="toggle-answer-${index}" onclick="toggleAnswer(${index})">Javobni Ko'rish</button>
        <button class="delete-question-btn" onclick="deleteSavedQuestion(${index})">🗑️</button>
        <p id="answer-${index}" hidden>${ticket.answer}</p>
      `;
      savedContainer.appendChild(li);
    });
  } else {
    savedContainer.innerHTML = "<p>Saqlangan savollar mavjud emas.</p>";
  }
}

// Saqlangan savolni o'chirish
function deleteSavedQuestion(index) {
  savedQuestions.splice(index, 1);
  localStorage.setItem('savedQuestions', JSON.stringify(savedQuestions));
  showSavedQuestions();
}

// Javobni toggllash (saqlangan savollar uchun)
function toggleAnswer(index) {
  const answerElement = document.getElementById(`answer-${index}`);
  const button = document.getElementById(`toggle-answer-${index}`);

  if (answerElement.hidden) {
    answerElement.hidden = false;
    button.textContent = "Javobni Yashirish";
  } else {
    answerElement.hidden = true;
    button.textContent = "Javobni Ko'rish";
  }
}
