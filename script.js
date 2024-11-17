let currentIndex = 0;
let randomMode = true;
let savedTickets = [];

const tickets = [
  { question: "Savol 1?", answer: "Javob 1" },
  { question: "Savol 2?", answer: "Javob 2" },
  { question: "Savol 3?", answer: "Javob 3" },
];

document.addEventListener("DOMContentLoaded", () => {
  if (!tickets || tickets.length === 0) {
    alert("Biletlar mavjud emas!");
    return;
  }

  showRandomTicket();

  // Event Listeners
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
  const ticketContainer = document.getElementById("ticket-container");

  document.getElementById("question").textContent = ticket.question;
  document.getElementById("answer").textContent = ticket.answer;
  document.getElementById("answer").hidden = true;
  document.getElementById("show-answer").textContent = "Javobni Ko'rish";

  // Show the save button
  const saveButton = document.getElementById("save-ticket");
  saveButton.hidden = false; // Make save button visible for current question

  saveButton.onclick = () => saveTicket(ticket);
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
    toggleButton.textContent = "🌙";  // Dark mode icon
  } else {
    toggleButton.textContent = "☀️";  // Light mode icon
  }
}

function saveTicket(ticket) {
  if (!savedTickets.includes(ticket)) {
    savedTickets.push(ticket);
    displaySavedTickets();
  }
}

function displaySavedTickets() {
  const savedTicketList = document.getElementById("saved-ticket-list");
  savedTicketList.innerHTML = ""; // Clear the list before adding

  savedTickets.forEach((ticket, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${ticket.question}</span>
      <button onclick="deleteSavedTicket(${index})">🗑️</button>
    `;
    savedTicketList.appendChild(li);
  });
}

function deleteSavedTicket(index) {
  savedTickets.splice(index, 1); // Remove the ticket from saved tickets
  displaySavedTickets(); // Re-render saved tickets list
}
