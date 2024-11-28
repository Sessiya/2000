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
  const imageElement = document.getElementById(`image-${index}`); // Rasm elementini olish

  if (answerElement.hidden) {
    answerElement.hidden = false;
    button.textContent = "Javobni Yashirish";

    // Rasmni ko'rsatish uchun display: block qilish
    if (imageElement) {
      imageElement.style.display = 'block';
    }
  } else {
    answerElement.hidden = true;
    button.textContent = "Javobni Ko'rish";

    // Rasmni yashirish uchun display: none qilish
    if (imageElement) {
      imageElement.style.display = 'none';
    }
  }
}

// Javobni ko'rsatish yoki yashirish funksiyasi
function toggleAnswer(index) {
  const answerElement = document.getElementById(`answer-${index}`);
  const button = document.getElementById(`toggle-answer-${index}`);
  const imageElement = document.getElementById(`image-${index}`); // Rasm elementini olish

  if (answerElement.hidden) {
    answerElement.hidden = false;
    button.textContent = "Javobni Yashirish";
    
    // Rasmni ko'rsatish
    if (imageElement) {
      imageElement.hidden = false;
    }
  } else {
    answerElement.hidden = true;
    button.textContent = "Javobni Ko'rish";
    
    // Rasmni yashirish
    if (imageElement) {
      imageElement.hidden = true;
    }
  }
}

// Barcha biletlarni ko'rsatish funksiyasi
function showAllTickets() {
  const allTicketsContainer = document.getElementById("all-tickets-container");
  allTicketsContainer.innerHTML = ""; // Ekranda mavjud bo'lgan savollarni tozalash

  tickets.forEach((ticket, index) => {
    const ticketDiv = document.createElement("div");
    ticketDiv.classList.add("ticket");

    // Agar biletda rasm mavjud bo'lsa, uni ko'rsatish
    const imageHTML = ticket.image
      ? `<img id="image-${index}" src="${ticket.image}" alt="Rasm yuklanmadi" class="ticket-image" hidden />`
      : ""; // Rasm mavjud bo'lmasa, bo'sh string

    ticketDiv.innerHTML = `
      <strong>${ticket.question}</strong>
      <button id="toggle-answer-${index}" class="toggle-answer-btn" onclick="toggleAnswer(${index})">Javobni Ko'rish</button>
      <p id="answer-${index}" class="answer" hidden>${ticket.answer}</p>
      ${imageHTML} <!-- Rasmni qo'shish -->
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
