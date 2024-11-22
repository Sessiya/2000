let currentIndex = 0;
let randomMode = true;

document.addEventListener("DOMContentLoaded", () => {
  // Rejimni tiklash
  initializeDarkMode();

  if (!tickets || tickets.length === 0) {
    alert("Biletlar mavjud emas!");
    return;
  }

  showRandomTicket();

  document.getElementById("random-mode").addEventListener("click", () => {
    randomMode = true;
    currentIndex = 0;
    showRandomTicket();
  });

  document.getElementById("next-ticket").addEventListener("click", showNextTicket);
  document.getElementById("prev-ticket").addEventListener("click", showPrevTicket);
  document.getElementById("show-answer").addEventListener("click", toggleMainAnswer);
  document.getElementById("all-mode").addEventListener("click", showAllTickets);

  document.getElementById("dark-mode-toggle").addEventListener("click", toggleDarkMode);
});

function showRandomTicket() {
  const randomIndex = Math.floor(Math.random() * tickets.length);
  currentIndex = randomIndex;
  displayTicket(tickets[currentIndex]);
}

function showNextTicket() {
  currentIndex = (currentIndex + 1) % tickets.length;
  displayTicket(tickets[currentIndex]);
}

function showPrevTicket() {
  currentIndex = (currentIndex - 1 + tickets.length) % tickets.length;
  displayTicket(tickets[currentIndex]);
}

function displayTicket(ticket) {
  document.getElementById("question").textContent = ticket.question;
  document.getElementById("answer").textContent = ticket.answer;
  document.getElementById("answer").hidden = true;
  document.getElementById("show-answer").textContent = "Javobni Ko'rish";
}

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

function toggleDarkMode() {
  const body = document.body;
  const toggleButton = document.getElementById("dark-mode-toggle");

  body.classList.toggle("dark-mode");

  // Saqlangan rejimni yangilash
  if (body.classList.contains("dark-mode")) {
    toggleButton.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    toggleButton.textContent = "🌙";
    localStorage.setItem("theme", "light");
  }
}

function initializeDarkMode() {
  const savedMode = localStorage.getItem("theme");
  const body = document.body;
  const toggleButton = document.getElementById("dark-mode-toggle");

  if (savedMode === "dark") {
    body.classList.add("dark-mode");
    toggleButton.textContent = "☀️";
  } else {
    body.classList.remove("dark-mode");
    toggleButton.textContent = "🌙";
  }
}

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
