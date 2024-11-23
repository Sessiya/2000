let currentTicketIndex = localStorage.getItem("currentTicketIndex") || 0;  // Load saved ticket index or default to 0

document.addEventListener("DOMContentLoaded", () => {
  if (!tickets || tickets.length === 0) {
    alert("Biletlar mavjud emas!");
    return;
  }

  showTicket(currentTicketIndex);  // Initially show the first ticket

  document.getElementById("dark-mode-toggle").addEventListener("click", toggleDarkMode);

  // Attach event listeners for navigation buttons
  document.getElementById("next-ticket").addEventListener("click", nextTicket);
  document.getElementById("prev-ticket").addEventListener("click", prevTicket);
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
  ticketInfo.innerHTML = `Bilet ${index + 1} / ${tickets.length}`;
  
  // Update the state of the previous/next buttons
  document.getElementById("prev-ticket").disabled = index === 0;  // Disable previous button on first ticket
  document.getElementById("next-ticket").disabled = index === tickets.length - 1;  // Disable next button on last ticket
}

function toggleAnswer(index) {
  const answerElement = document.getElementById(`answer-${index}`);
  const button = document.querySelector(`#toggle-answer-${index}`);  // Use id to get button

  if (answerElement.hidden) {
    answerElement.hidden = false;
    button.textContent = "Javobni Yashirish";
  } else {
    answerElement.hidden = true;
    button.textContent = "Javobni Ko'rish";
  }
}

function nextTicket() {
  if (currentTicketIndex < tickets.length - 1) {
    currentTicketIndex++;
    localStorage.setItem("currentTicketIndex", currentTicketIndex);  // Save the current ticket index
    showTicket(currentTicketIndex);
  }
}

function prevTicket() {
  if (currentTicketIndex > 0) {
    currentTicketIndex--;
    localStorage.setItem("currentTicketIndex", currentTicketIndex);  // Save the current ticket index
    showTicket(currentTicketIndex);
  }
}
