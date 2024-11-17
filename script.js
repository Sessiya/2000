// Global o'zgaruvchilar
let currentIndex = 0;  // Hozirgi savol indeksi
let randomMode = true; // Tasodifiy rejimni belgilash
let savedQuestions = JSON.parse(localStorage.getItem('savedQuestions')) || []; // Saqlangan savollarni olish

document.addEventListener("DOMContentLoaded", () => {
  if (!tickets || tickets.length === 0) {
    alert("Savollar mavjud emas!");
    return;
  }

  showRandomTicket(); // Boshlang'ich biletni ko'rsatish

  // Tugmalar uchun event listenerlar
  document.getElementById("random-mode").addEventListener("click", () => {
    randomMode = true;
    showRandomTicket();
  });

  document.getElementById("next-ticket").addEventListener("click", showNextTicket);
  document.getElementById("prev-ticket").addEventListener("click", showPrevTicket);
  document.getElementById("show-answer").addEventListener("click", toggleAnswer);
  document.getElementById("all-mode").addEventListener("click", () => {
    window.location.href = "all/all.html";  // Hammasi sahifasiga o'tish
  });

  document.getElementById("show-saved-questions").addEventListener("click", () => {
    window.location.href = "saved/saved.html";  // Saqlangan savollar sahifasiga o'tish
  });

  document.getElementById("dark-mode-toggle").addEventListener("click", toggleDarkMode);
});

// Tungi rejimni yoqish/o‘chirish funksiyasi
function toggleDarkMode() {
  const body = document.body;
  const toggleButton = document.getElementById("dark-mode-toggle");
  body.classList.toggle("dark-mode");
  toggleButton.textContent = body.classList.contains("dark-mode") ? "🌙" : "☀️";
}

// Savolni tasodifiy ko'rsatish funksiyasi
function showRandomTicket() {
  const randomIndex = Math.floor(Math.random() * tickets.length);
  currentIndex = randomIndex;
  displayTicket(tickets[currentIndex]);
}

// Keyingi savolni ko'rsatish
function showNextTicket() {
  currentIndex = (currentIndex + 1) % tickets.length;
  displayTicket(tickets[currentIndex]);
}

// Oldingi savolni ko'rsatish
function showPrevTicket() {
  currentIndex = (currentIndex - 1 + tickets.length) % tickets.length;
  displayTicket(tickets[currentIndex]);
}

// Savolni va javobni ko'rsatish
function displayTicket(ticket) {
  document.getElementById("question").textContent = ticket.question;
  document.getElementById("answer").textContent = ticket.answer;
  document.getElementById("answer").hidden = true;
  document.getElementById("show-answer").textContent = "Javobni Ko'rish";

  const saveButton = document.createElement("button");
  saveButton.textContent = "♻️";
  saveButton.classList.add("save-question-btn");
  saveButton.onclick = () => saveQuestion(ticket);
  document.getElementById("ticket-container").appendChild(saveButton);
}

// Javobni ko'rsatish yoki yashirish
function toggleAnswer() {
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

// Savolni saqlash
function saveQuestion(ticket) {
  if (!savedQuestions.some(saved => saved.question === ticket.question)) {
    savedQuestions.push(ticket);
    localStorage.setItem('savedQuestions', JSON.stringify(savedQuestions));
    alert("Savol saqlandi!");
  } else {
    alert("Bu savol allaqachon saqlangan.");
  }
}

// Barcha savollarni ko'rsatish
function showAllTickets() {
  const allTicketsContainer = document.getElementById("all-tickets");
  allTicketsContainer.innerHTML = "";
  tickets.forEach((ticket, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${ticket.question}</strong>
      <button id="toggle-answer-${index}" onclick="toggleAnswer(${index})">Javobni Ko'rish</button>
      <p id="answer-${index}" hidden>${ticket.answer}</p>
    `;
    allTicketsContainer.appendChild(li);
  });
  allTicketsContainer.hidden = false;
  document.getElementById("ticket-container").hidden = true;
}
