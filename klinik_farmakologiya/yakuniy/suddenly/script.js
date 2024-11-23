let currentTicketIndex = localStorage.getItem("currentTicketIndex") || -1;  // Default to -1 to trigger a random ticket on load

document.addEventListener("DOMContentLoaded", () => {
  if (!tickets || tickets.length === 0) {
    alert("Biletlar mavjud emas!");
    return;
  }

  showRandomTicket();  // Show a random ticket initially

  // Event listeners for navigation buttons
  document.getElementById("next-ticket").addEventListener("click", nextTicket);
  document.getElementById("prev-ticket").addEventListener("click", prevTicket);
  document.getElementById("restart-ticket").addEventListener("click", restartTicket);  // Restart button functionality

  document.getElementById("dark-mode-toggle").addEventListener("click", toggleDarkMode);
});

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

function showTicket(index) {
  const ticket = tickets[index];
  const allTicketsContainer = document.getElementById("all-tickets-container");
  allTicketsContainer.innerHTML = `
    <strong>${ticket.question}</strong>
    <button class="toggle-answer-btn" onclick="toggleAnswer(${index})">Javobni Ko'rish</button>
    <p id="answer-${index}" class="answer" hidden>${ticket.answer}</p>
  `;
  
  // Display current ticket info
  const ticketInfo = document.getElementById("ticket-info");
  ticketInfo.innerHTML = `Jami biletlar soni: ${tickets.length}, Hozirgi bilet: ${index + 1}`;

  // Update navigation button states
  document.getElementById("prev-ticket").disabled = index === 0;
  document.getElementById("next-ticket").disabled = index === tickets.length - 1;
}

function showRandomTicket() {
  // Generate a random index
  currentTicketIndex = Math.floor(Math.random() * tickets.length);
  showTicket(currentTicketIndex);
}

function nextTicket() {
  if (currentTicketIndex < tickets.length - 1) {
    currentTicketIndex++;
    showTicket(currentTicketIndex);
  }
}

function prevTicket() {
  if (currentTicketIndex > 0) {
    currentTicketIndex--;
    showTicket(currentTicketIndex);
  }
}

function restartTicket() {
  showRandomTicket();  // Show a random ticket when the restart button is clicked
}

function toggleAnswer(index) {
  const answerElement = document.getElementById(`answer-${index}`);
  const button = document.querySelector(`#toggle-answer-${index}`);

  if (answerElement.hidden) {
    answerElement.hidden = false;
    button.textContent = "Javobni Yashirish";
  } else {
    answerElement.hidden = true;
    button.textContent = "Javobni Ko'rish";
  }
}
