let ticketsPerPage = 10;
let currentStartIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
  loadTickets(ticketsPerPage); // Dastlabki 10 ta savolni yuklash

  // "10 ta Savol", "20 ta Savol", "30 ta Savol" tugmalari uchun event listenerlar
  document.getElementById("load-10").addEventListener("click", () => loadTickets(10));
  document.getElementById("load-20").addEventListener("click", () => loadTickets(20));
  document.getElementById("load-30").addEventListener("click", () => loadTickets(30));

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

// Savollarni yuklash
function loadTickets(count) {
  ticketsPerPage = count;
  currentStartIndex = 0; // Har safar yangi qatorni boshlaymiz
  displayTickets();
}

// Barcha savollarni ko'rsatish
function displayTickets() {
  const container = document.getElementById("ticket-list");
  container.innerHTML = ""; // Yangi savollarni ko'rsatish uchun eski savollarni o'chirish

  const endIndex = currentStartIndex + ticketsPerPage;
  const currentTickets = tickets.slice(currentStartIndex, endIndex);

  currentTickets.forEach((ticket, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${ticket.question}</strong>
      <button onclick="toggleAnswer(${currentStartIndex + index})">Javobni Ko'rish</button>
      <p id="answer-${currentStartIndex + index}" hidden>${ticket.answer}</p>
    `;
    container.appendChild(li);
  });

  // Next va Previous tugmalarini faollashtirish
  setupPageButtons();
}

// Sahifa tugmalarini faollashtirish
function setupPageButtons() {
  const pageButtonsContainer = document.getElementById("page-buttons-container");
  pageButtonsContainer.innerHTML = "";

  const prevButton = document.createElement("button");
  prevButton.textContent = "Oldingi";
  prevButton.disabled = currentStartIndex === 0;
  prevButton.addEventListener("click", () => {
    currentStartIndex -= ticketsPerPage;
    displayTickets();
  });

  const nextButton = document.createElement("button");
  nextButton.textContent = "Keyingi";
  nextButton.disabled = currentStartIndex + ticketsPerPage >= tickets.length;
  nextButton.addEventListener("click", () => {
    currentStartIndex += ticketsPerPage;
    displayTickets();
  });

  pageButtonsContainer.appendChild(prevButton);
  pageButtonsContainer.appendChild(nextButton);
}

// Javobni ko'rsatish
function toggleAnswer(index) {
  const answerElement = document.getElementById(`answer-${index}`);
  const button = document.querySelector(`[onclick="toggleAnswer(${index})"]`);

  if (answerElement.hidden) {
    answerElement.hidden = false;
    button.textContent = "Javobni Yashirish";
  } else {
    answerElement.hidden = true;
    button.textContent = "Javobni Ko'rish";
  }
}
