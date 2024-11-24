let currentTicketIndex = -1;  // Initialize with -1 to ensure a random ticket is shown on page load

document.addEventListener("DOMContentLoaded", () => {
  if (!tickets || tickets.length === 0) {
    alert("Biletlar mavjud emas!");
    return;
  }

  // Show a random ticket initially
  showRandomTicket();

  // Event listeners for navigation buttons
  document.getElementById("next-ticket").addEventListener("click", nextTicket);
  document.getElementById("prev-ticket").addEventListener("click", prevTicket);
  document.getElementById("restart-ticket").addEventListener("click", restartTicket);  // Restart button functionality

  document.getElementById("dark-mode-toggle").addEventListener("click", toggleDarkMode);
});

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");  // Tungi rejimni o'zgartirish
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
}

function showRandomTicket() {
  currentTicketIndex = Math.floor(Math.random() * tickets.length);  // Random index for the ticket
  console.log(`Random Ticket Index: ${currentTicketIndex}`);  // Debugging log
  showTicket(currentTicketIndex);  // Show the random ticket
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
  // Restart functionality to show a random ticket again
  console.log("Restarting with a random ticket...");
  showRandomTicket();
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