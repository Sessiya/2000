document.addEventListener("DOMContentLoaded", () => {
  // Saqlangan savollarni ko'rsatish (hammasi yoki index sahifasida)
  document.getElementById("show-saved-questions").addEventListener("click", showSavedQuestions);

  // Dark Mode / Light Mode
  document.getElementById("dark-mode-toggle").addEventListener("click", toggleDarkMode);
  if (document.getElementById("all-mode")) {
    document.getElementById("all-mode").addEventListener("click", () => window.location.href = "additional/additional.html");
  }

  showSavedQuestions(); // Har ikki sahifada ishlaydi
});

// Tungi rejimni yoqish
function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle("dark-mode");
  const toggleButton = document.getElementById("dark-mode-toggle");
  toggleButton.textContent = body.classList.contains("dark-mode") ? "🌙" : "☀️";
}

// Saqlangan savollarni ko'rsatish
function showSavedQuestions() {
  const savedQuestions = JSON.parse(localStorage.getItem("savedQuestions")) || [];
  const container = document.getElementById("saved-questions-container");

  container.innerHTML = "";
  if (savedQuestions.length > 0) {
    savedQuestions.forEach((question, index) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <strong>${question.question}</strong>
        <button onclick="toggleAnswer(${index})">Javobni Ko'rish</button>
        <p id="answer-${index}" hidden>${question.answer}</p>
        <button onclick="deleteSavedQuestion(${index})">🗑️</button>
      `;
      container.appendChild(li);
    });
  } else {
    container.innerHTML = "<p>Saqlangan savollar mavjud emas.</p>";
  }
}

// Saqlangan savolni o'chirish
function deleteSavedQuestion(index) {
  const savedQuestions = JSON.parse(localStorage.getItem("savedQuestions")) || [];
  savedQuestions.splice(index, 1);
  localStorage.setItem("savedQuestions", JSON.stringify(savedQuestions));
  showSavedQuestions();
}

// Javobni toggllash (saqlangan savollar uchun)
function toggleAnswer(index) {
  const answerElement = document.getElementById(`answer-${index}`);
  const button = document.getElementById(`toggle-answer-${index}`);
  answerElement.hidden = !answerElement.hidden;
  button.textContent = answerElement.hidden ? "Javobni Ko'rish" : "Javobni Yashirish";
}
