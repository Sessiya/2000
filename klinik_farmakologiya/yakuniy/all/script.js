document.addEventListener("DOMContentLoaded", () => {
  if (!tickets || tickets.length === 0) {
    alert("Biletlar mavjud emas!");
    return;
  }

  showAllTickets();  // Sahifa yuklanishi bilan barcha savollarni ko'rsatish

  document.getElementById("dark-mode-toggle").addEventListener("click", toggleDarkMode);

  // Boshqa funksiyalar:
  // next-ticket, prev-ticket, random-mode va boshqalar.
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

  // Display the total number of tickets
  const ticketInfo = document.getElementById("ticket-info");
  ticketInfo.innerHTML = `Jami biletlar soni: ${tickets.length}`;
}

function toggleAnswer(index) {
  const answerElement = document.getElementById(`answer-${index}`);
  const button = document.getElementById(`toggle-answer-${index}`);  // Use id to get button

  if (answerElement.hidden) {
    answerElement.hidden = false;
    button.textContent = "Javobni Yashirish";
  } else {
    answerElement.hidden = true;
    button.textContent = "Javobni Ko'rish";
  }
}
