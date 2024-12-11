document.addEventListener("DOMContentLoaded", () => {
  // Biletlar mavjudligini tekshirish
  if (!tickets || tickets.length === 0) {
    alert("Biletlar mavjud emas!");
    return;
  }

  showAllTickets(); // Barcha biletlarni ko'rsatish

  // Tungi rejimni almashtirish tugmasi
  document.getElementById("dark-mode-toggle").addEventListener("click", toggleDarkMode);
});

// Tungi rejimni o'zgartirish funksiyasi
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

// Javobni ko'rsatish yoki yashirish funksiyasi
function toggleAnswer(index) {
  const answerElement = document.getElementById(`answer-${index}`);
  const button = document.getElementById(`toggle-answer-${index}`);
  const imageElements = document.querySelectorAll(`#ticket-${index} .ticket-image`); // Barcha rasmlarni olish

  if (answerElement.hidden) {
    answerElement.hidden = false;
    button.textContent = "Javobni Yashirish";

    // Barcha rasmlarni ko'rsatish
    imageElements.forEach(image => image.style.display = 'block');
  } else {
    answerElement.hidden = true;
    button.textContent = "Javobni Ko'rish";

    // Barcha rasmlarni yashirish
    imageElements.forEach(image => image.style.display = 'none');
  }
}

// Barcha biletlarni ko'rsatish funksiyasi
function showAllTickets() {
  const allTicketsContainer = document.getElementById("all-tickets-container");
  allTicketsContainer.innerHTML = ""; // Ekranda mavjud bo'lgan savollarni tozalash

  tickets.forEach((ticket, index) => {
    const ticketDiv = document.createElement("div");
    ticketDiv.classList.add("ticket");
    ticketDiv.id = `ticket-${index}`;

    // Agar biletda rasm mavjud bo'lsa, ularni ko'rsatish
    let imagesHTML = '';
    for (let i = 1; i <= 5; i++) {
      if (ticket[`image${i}`]) {
        imagesHTML += `<img id="image-${index}-${i}" src="${ticket[`image${i}`]}" alt="Rasm yuklanmadi" class="ticket-image" style="display: none;"/>`;
      }
    }

    ticketDiv.innerHTML = `
      <strong>${ticket.question}</strong>
      <button id="toggle-answer-${index}" class="toggle-answer-btn" onclick="toggleAnswer(${index})">Javobni Ko'rish</button>
      <p id="answer-${index}" class="answer" hidden>${ticket.answer}</p>
      ${imagesHTML} <!-- Bir nechta rasmlar -->
    `;

    allTicketsContainer.appendChild(ticketDiv);
  });

  allTicketsContainer.hidden = false;

  // Biletlar sonini ko'rsatish
  const ticketInfo = document.getElementById("ticket-info");
  if (ticketInfo) {
    ticketInfo.innerHTML = `Jami biletlar soni: ${tickets.length}`;
  } else {
    console.error("ticket-info element not found");
  }
}
