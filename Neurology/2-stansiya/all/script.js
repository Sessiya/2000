document.addEventListener("DOMContentLoaded", () => {
  // Biletlar massivining mavjudligini tekshiramiz
  if (!tickets || tickets.length === 0) {
    alert("Biletlar mavjud emas!");
    return;
  }

  showAllTickets();  // Sahifa yuklanishi bilan barcha savollarni ko'rsatish

  document.getElementById("dark-mode-toggle").addEventListener("click", toggleDarkMode);
});

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");  // Tungi rejimni o'zgartirish
}

function showAllTickets() {
  const allTicketsContainer = document.getElementById("all-tickets-container");
  allTicketsContainer.innerHTML = "";  // Ekranda mavjud bo'lgan savollarni tozalash

  tickets.forEach((ticket, index) => {
    const ticketDiv = document.createElement("div");
    ticketDiv.classList.add("ticket");
    ticketDiv.innerHTML = `
      <strong>${ticket.question}</strong>
      <button id="toggle-answer-${index}" class="toggle-answer-btn" onclick="toggleAnswer(${index})">Javobni Ko'rish</button>
      <p id="answer-${index}" class="answer" hidden>${ticket.answer}</p>
    `;
    allTicketsContainer.appendChild(ticketDiv);
  });

  allTicketsContainer.hidden = false;

  // Check if the #ticket-info element is available before updating
  const ticketInfo = document.getElementById("ticket-info");
  if (ticketInfo) {
    ticketInfo.innerHTML = `Jami biletlar soni: ${tickets.length}`;
  } else {
    console.error('ticket-info element not found');
  }
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
