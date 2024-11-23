document.addEventListener("DOMContentLoaded", () => {
  if (!tickets || tickets.length === 0) {
    alert("Biletlar mavjud emas!");
    return;
  }

  currentTicketIndex = 0;  // Start from the first ticket
  showTicket(currentTicketIndex);  // Show the first ticket

  document.getElementById("dark-mode-toggle").addEventListener("click", toggleDarkMode);
  
  document.getElementById("next-ticket").addEventListener("click", () => navigateTickets(1));  // Next button
  document.getElementById("prev-ticket").addEventListener("click", () => navigateTickets(-1));  // Prev button
});

let currentTicketIndex = 0;

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");  // Tungi rejimni o'zgartirish
}

function showTicket(index) {
  const allTicketsContainer = document.getElementById("all-tickets-container");
  allTicketsContainer.innerHTML = "";  // Ekranda mavjud bo'lgan savollarni tozalash

  const ticket = tickets[index];
  const ticketDiv = document.createElement("div");
  ticketDiv.classList.add("ticket");
  ticketDiv.innerHTML = `
    <strong>${ticket.question}</strong>
    <button id="toggle-answer-${index}" class="toggle-answer-btn" onclick="toggleAnswer(${index})">Javobni Ko'rish</button>
    <p id="answer-${index}" class="answer" hidden>${ticket.answer}</p>
  `;
  allTicketsContainer.appendChild(ticketDiv);

  // Update the state of the navigation buttons
  updateNavigationButtons();
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

function navigateTickets(direction) {
  currentTicketIndex += direction;

  // Ensure the index stays within bounds
  if (currentTicketIndex < 0) currentTicketIndex = 0;  // Prevent going before the first ticket
  if (currentTicketIndex >= tickets.length) currentTicketIndex = tickets.length - 1;  // Prevent going past the last ticket

  showTicket(currentTicketIndex);  // Show the updated ticket
}

function updateNavigationButtons() {
  // Disable the 'Previous' button if on the first ticket
  document.getElementById("prev-ticket").disabled = currentTicketIndex === 0;

  // Disable the 'Next' button if on the last ticket
  document.getElementById("next-ticket").disabled = currentTicketIndex === tickets.length - 1;
}
