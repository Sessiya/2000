document.addEventListener("DOMContentLoaded", () => {
  if (!tickets || tickets.length === 0) {
    alert("Biletlar mavjud emas!");
    return;
  }

  showAllTickets();

  document.getElementById("dark-mode-toggle").addEventListener("click", toggleDarkMode);
});

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

function toggleAnswer(index) {
  const answerElement = document.getElementById(`answer-${index}`);
  const button = document.getElementById(`toggle-answer-${index}`);
  const imageElement = document.getElementById(`image-${index}`);

  if (answerElement.hidden) {
    answerElement.hidden = false;
    button.textContent = "Javobni Yashirish";
    if (imageElement) imageElement.hidden = false;
  } else {
    answerElement.hidden = true;
    button.textContent = "Javobni Ko'rish";
    if (imageElement) imageElement.hidden = true;
  }
}

function showAllTickets() {
  const allTicketsContainer = document.getElementById("all-tickets-container");
  allTicketsContainer.innerHTML = "";

  tickets.forEach((ticket, index) => {
    const ticketDiv = document.createElement("div");
    ticketDiv.classList.add("ticket");

    const imageHTML = ticket.image
      ? `<img id="image-${index}" src="${ticket.image}" alt="Rasm yuklanmadi" class="ticket-image" hidden />`
      : "";

    ticketDiv.innerHTML = `
      <strong>${ticket.question}</strong>
      <button id="toggle-answer-${index}" class="toggle-answer-btn" onclick="toggleAnswer(${index})">Javobni Ko'rish</button>
      <p id="answer-${index}" class="answer" hidden>${ticket.answer}</p>
      ${imageHTML}
    `;

    allTicketsContainer.appendChild(ticketDiv);
  });

  allTicketsContainer.hidden = false;

  const ticketInfo = document.getElementById("ticket-info");
  if (ticketInfo) {
    ticketInfo.innerHTML = `Jami biletlar soni: ${tickets.length}`;
  } else {
    console.error("ticket-info element not found");
  }
}
