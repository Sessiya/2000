let currentIndex = 0;
let randomMode = true;
let ticketsPerPage = 10;
let allTicketsContainer = document.getElementById("ticket-list");

document.addEventListener("DOMContentLoaded", () => {
  // Bosh sahifadagi kodlarni qo'llash
  if (!tickets || tickets.length === 0) {
    alert("Biletlar mavjud emas!");
    return;
  }

  showRandomTicket();
  
  // Qo'shimcha sahifa uchun 10, 20, 30 ta savolni ko'rsatish
  document.getElementById("load-10").addEventListener("click", () => loadTicketsPerPage(10));
  document.getElementById("load-20").addEventListener("click", () => loadTicketsPerPage(20));
  document.getElementById("load-30").addEventListener("click", () => loadTicketsPerPage(30));

  // Random va ketma-ket tugmalarini qo'shish
  document.getElementById("random-mode").addEventListener("click", () => toggleRandomMode(true));
  document.getElementById("next-ticket").addEventListener("click", showNextTicket);
  document.getElementById("prev-ticket").addEventListener("click", showPrevTicket);
  
  // Sahifa yuklanganda dastlabki savollarni ko'rsatish
  loadTicketsPerPage(ticketsPerPage);
});

// Savollarni 10, 20, 30 ta bo'lib ko'rsatish
function loadTicketsPerPage(num) {
  ticketsPerPage = num;
  renderTickets(0, num);
}

function renderTickets(startIndex, num) {
  allTicketsContainer.innerHTML = ""; // Tozalash

  // Barcha savollarni ko'rsatish
  const endIndex = Math.min(startIndex + num, tickets.length);
  const ticketsToDisplay = tickets.slice(startIndex, endIndex);

  ticketsToDisplay.forEach((ticket, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${ticket.question}</strong>
      <button id="toggle-answer-${index}" onclick="toggleAnswer(${index})">Javobni Ko'rish</button>
      <p id="answer-${index}" hidden>${ticket.answer}</p>
    `;
    allTicketsContainer.appendChild(li);
  });

  // Sahifa tugmalari qo'shish
  const totalPages = Math.ceil(tickets.length / ticketsPerPage);
  const pageButtonsContainer = document.getElementById("page-buttons-container");
  pageButtonsContainer.innerHTML = ""; // Sahifa tugmalarini tozalash
  
  for (let i = 0; i < totalPages; i++) {
    const pageButton = document.createElement("button");
    pageButton.textContent = `Page ${i + 1}`;
    pageButton.onclick = () => renderTickets(i * ticketsPerPage, ticketsPerPage);
    pageButtonsContainer.appendChild(pageButton);
  }
}

// Javobni ko'rsatish
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

// Random va ketma-ket navbatni boshqarish
function toggleRandomMode(mode) {
  randomMode = mode;
  if (randomMode) {
    showRandomTicket();
  } else {
    showNextTicket();
  }
}

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
