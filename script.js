let currentIndex = 0;
let randomMode = true;
let savedTickets = JSON.parse(localStorage.getItem("savedTickets")) || [];

document.addEventListener("DOMContentLoaded", () => {
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

  document.getElementById("saved-tickets").addEventListener("click", showSavedTickets);
  document.getElementById("clear-saved-tickets").addEventListener("click", clearSavedTickets);
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

  // ♻️ belgisiga tugma qo'shish
  const recycleButton = document.createElement("button");
  recycleButton.innerHTML = "♻️";
  recycleButton.classList.add("recycle-btn");
  recycleButton.onclick = () => toggleSaveTicket(ticket);
  document.getElementById("ticket-container").appendChild(recycleButton);
}

function toggleSaveTicket(ticket) {
  // Saqlash va o'chirish funksiyasi
  if (savedTickets.find(t => t.question === ticket.question)) {
    savedTickets = savedTickets.filter(t => t.question !== ticket.question); // O'chirish
    localStorage.setItem("savedTickets", JSON.stringify(savedTickets));
    alert("Savol saqlanmasdan o'chirildi!");
  } else {
    savedTickets.push(ticket);
    localStorage.setItem("savedTickets", JSON.stringify(savedTickets));
    alert("Savol saqlandi!");
  }
}

function showSavedTickets() {
  const savedTicketsContainer = document.getElementById("saved-tickets-container");
  savedTicketsContainer.innerHTML = "";
  savedTickets.forEach(ticket => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${ticket.question}</strong>
      <button onclick="removeSavedTicket('${ticket.question}')">🗑️</button>
      <button onclick="displayTicket(ticket)">Ko'rish</button>
    `;
    savedTicketsContainer.appendChild(li);
  });
  savedTicketsContainer.hidden = false;
}

function removeSavedTicket(question) {
  savedTickets = savedTickets.filter(t => t.question !== question);
  localStorage.setItem("savedTickets", JSON.stringify(savedTickets));
  showSavedTickets();
}

function clearSavedTickets() {
  savedTickets = [];
  localStorage.setItem("savedTickets", JSON.stringify(savedTickets));
  showSavedTickets();
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

  if (body.classList.contains("dark-mode")) {
    toggleButton.textContent = "🌙";  // Tungi rejim belgilari
  } else {
    toggleButton.textContent = "☀️";  // Kunduzgi rejim belgilari
  }
}
