// bilet.js

// Biletlarni ko'rsatish
function showTickets() {
  const ticketContainer = document.getElementById("ticket-container");

  tickets.forEach((ticket, index) => {
    const ticketDiv = document.createElement("div");
    ticketDiv.classList.add("ticket");
    ticketDiv.innerHTML = `
      <h3>${ticket.question}</h3>
      <p id="answer-${index}" hidden>${ticket.answer}</p>
      <button onclick="toggleAnswer(${index})">Javobni Ko'rish</button>
    `;
    ticketContainer.appendChild(ticketDiv);
  });
}

// Javobni ko'rsatish yoki yashirish
function toggleAnswer(index) {
  const answerElement = document.getElementById(`answer-${index}`);
  const button = answerElement.previousElementSibling;

  if (answerElement.hidden) {
    answerElement.hidden = false;
    button.textContent = "Javobni Yashirish";
  } else {
    answerElement.hidden = true;
    button.textContent = "Javobni Ko'rish";
  }
}

// Sahifa yuklanganda biletlarni ko'rsatish
document.addEventListener("DOMContentLoaded", showTickets);
