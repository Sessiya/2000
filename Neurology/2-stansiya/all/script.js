document.addEventListener("DOMContentLoaded", () => {
  // Tickets massivining mavjudligini va bo'sh emasligini tekshirish
  if (typeof tickets === 'undefined' || tickets.length === 0) {
    alert("Biletlar mavjud emas!");
    return;
  }

  // Barcha biletlarni ko'rsatish
  showAllTickets();

  // Tungi rejimni o'zgartirish tugmasini ulash
  document.getElementById("dark-mode-toggle").addEventListener("click", toggleDarkMode);
});

// Tungi rejimni yoqish va o'chirish funksiyasi
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

// Barcha biletlarni ekranda ko'rsatish funksiyasi
function showAllTickets() {
  const allTicketsContainer = document.getElementById("all-tickets-container");
  allTicketsContainer.innerHTML = "";  // Ekranda mavjud bo'lgan savollarni tozalash

  // Har bir biletni yaratish va uni ekranga qo'shish
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

  // Biletlar kontainerini ko'rsatish
  allTicketsContainer.hidden = false;

  // Ticket info elementini yangilash (agar mavjud bo'lsa)
  const ticketInfo = document.getElementById("ticket-info");
  if (ticketInfo) {
    ticketInfo.innerHTML = `Jami biletlar soni: ${tickets.length}`;
  } else {
    console.error('ticket-info element topilmadi');
  }
}

// Javobni ko'rsatish yoki yashirish funksiyasi
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
