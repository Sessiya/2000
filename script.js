// Global o'zgaruvchilar
let currentIndex = 0; // Hozirgi bilet indeksi
let randomMode = true; // Tasodifiy rejimni belgilash
let savedQuestions = JSON.parse(localStorage.getItem('savedQuestions')) || []; // Saqlangan savollarni o'qish

document.addEventListener("DOMContentLoaded", () => {
  if (!tickets || tickets.length === 0) {
    alert("Biletlar mavjud emas!");
    return;
  }

  // Hammasini ko'rsatish
  if (window.location.pathname.includes("all-tickets.html")) {
    showAllTickets(); // Barcha biletlarni ko'rsatish
    showSavedQuestions(); // Saqlangan savollarni ko'rsatish
  } else {
    showRandomTicket(); // Boshlang'ich biletni ko'rsatish
  }

  // Tugmalar uchun event listenerlar
  document.getElementById("random-mode").addEventListener("click", () => {
    randomMode = true;
    showRandomTicket();
  });

  document.getElementById("next-ticket").addEventListener("click", showNextTicket);
  document.getElementById("prev-ticket").addEventListener("click", showPrevTicket);
  document.getElementById("show-answer").addEventListener("click", toggleMainAnswer);
  document.getElementById("all-mode").addEventListener("click", showAllTickets);
  document.getElementById("show-saved-questions").addEventListener("click", showSavedQuestions);
  document.getElementById("dark-mode-toggle").addEventListener("click", toggleDarkMode);
});

// Tungi rejimni yoqish/o‘chirish funksiyasi
function toggleDarkMode() {
  const body = document.body;
  const toggleButton = document.getElementById("dark-mode-toggle");

  body.classList.toggle("dark-mode");

  // Tugma belgisini o'zgartirish
  toggleButton.textContent = body.classList.contains("dark-mode") ? "🌙" : "☀️";
}

// Tasodifiy biletni ko'rsatish funksiyasi
function showRandomTicket() {
  const randomIndex = Math.floor(Math.random() * tickets.length);
  currentIndex = randomIndex;
  displayTicket(tickets[currentIndex]);
}

// Keyingi biletni ko'rsatish funksiyasi
function showNextTicket() {
  currentIndex = (currentIndex + 1) % tickets.length;
  displayTicket(tickets[currentIndex]);
}

// Oldingi biletni ko'rsatish funksiyasi
function showPrevTicket() {
  currentIndex = (currentIndex - 1 + tickets.length) % tickets.length;
  displayTicket(tickets[currentIndex]);
}

// Hozirgi biletni ko'rsatish funksiyasi
function displayTicket(ticket) {
  document.getElementById("question").textContent = ticket.question;
  document.getElementById("answer").textContent = ticket.answer;
  document.getElementById("answer").hidden = true;
  document.getElementById("show-answer").textContent = "Javobni Ko'rish";

  // Saqlash tugmasini yaratish
  const recycleButton = document.createElement("button");
  recycleButton.textContent = "♻️ Saqlash";
  recycleButton.classList.add("save-question-btn");
  recycleButton.onclick = () => saveQuestion(ticket);
  document.getElementById("ticket-container").appendChild(recycleButton);
}

// Javobni ko'rsatish yoki yashirish funksiyasi
function toggleMainAnswer() {
  const answerElement = document.getElementById("answer");
  const button = document.getElementById("show-answer");

  if (answerElement.hidden) {
    answerElement.hidden = false;
    button.textContent = "Javobni Yashirish";
  } else {
    answerElement.hidden = true;
    button.textContent = "Javobni Ko'rish";
  }
}

// Savollarni saqlash funksiyasi
function saveQuestion(ticket) {
  if (!savedQuestions.some(saved => saved.question === ticket.question)) {
    savedQuestions.push(ticket);
    localStorage.setItem('savedQuestions', JSON.stringify(savedQuestions));
    alert("Savol saqlandi!");
  } else {
    alert("Bu savol allaqachon saqlangan.");
  }
}

// Barcha biletlarni ko'rsatish funksiyasi
function showAllTickets() {
  const allTicketsContainer = document.getElementById("all-tickets");
  allTicketsContainer.innerHTML = "";
  tickets.forEach((ticket, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${ticket.question}</strong>
      <button id="toggle-answer-${index}" onclick="toggleAnswer(${index})">Javobni Ko'rish</button>
      <p id="answer-${index}" hidden>${ticket.answer}</p>
      <button class="save-question-btn" onclick="saveQuestion(ticket)">♻️ Saqlash</button>
    `;
    allTicketsContainer.appendChild(li);
  });
  allTicketsContainer.hidden = false;
  document.getElementById("ticket-container").hidden = true;
}

// Saqlangan savollarni ko'rsatish funksiyasi
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

  savedContainer.hidden = false;
  document.getElementById("ticket-container").hidden = true;
}

// Saqlangan savolni o'chirish funksiyasi
function deleteSavedQuestion(index) {
  savedQuestions.splice(index, 1);
  localStorage.setItem('savedQuestions', JSON.stringify(savedQuestions));
  showSavedQuestions();
}

// Javobni toggllash funksiyasi (bir nechta savollar uchun)
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
