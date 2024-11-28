document.addEventListener("DOMContentLoaded", () => {
  // Tekshirish: biletlar mavjudmi
  if (!tickets || tickets.length === 0) {
    alert("Biletlar mavjud emas!");
    return;
  }

  // Sahifa yuklanishi bilan barcha biletlarni ko'rsatish
  showAllTickets();
});

// Barcha biletlarni chiqarish funksiyasi
function showAllTickets() {
  const allTicketsContainer = document.getElementById("all-tickets-container");
  allTicketsContainer.innerHTML = ""; // Avvalgi ma'lumotlarni tozalash

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

  // Statistik ma'lumotlarni chiqarish
  const ticketInfo = document.getElementById("ticket-info");
  if (ticketInfo) {
    ticketInfo.innerHTML = `Jami biletlar soni: ${tickets.length}`;
  } else {
    console.error('ticket-info elementi topilmadi.');
  }
}

// Javobni ko'rsatish/yashirish funksiyasi
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
