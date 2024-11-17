let allTicketsContainer = document.getElementById("all-tickets-container");

// Hammasi sahifasida barcha savollarni ko'rsatish
document.addEventListener("DOMContentLoaded", () => {
  if (tickets.length > 0) {
    tickets.forEach((ticket, index) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <strong>${ticket.question}</strong>
        <button onclick="toggleAnswer(${index})">Javobni Ko'rish</button>
        <p id="answer-${index}" hidden>${ticket.answer}</p>
        <button onclick="saveQuestion(${index})">♻️ Saqlash</button>
      `;
      allTicketsContainer.appendChild(li);
    });
  }
});

// Javobni toggllash
function toggleAnswer(index) {
  const answerElement = document.getElementById(`answer-${index}`);
    if (answerElement.hidden) {
    answerElement.hidden = false;
  } else {
    answerElement.hidden = true;
  }
}

// Savolni saqlash
function saveQuestion(index) {
  const ticket = tickets[index];
  
  // Agar savol allaqachon saqlangan bo'lsa, uni qayta saqlashdan oldin tekshiramiz
  let savedQuestions = JSON.parse(localStorage.getItem('savedQuestions')) || [];
  if (!savedQuestions.some(saved => saved.question === ticket.question)) {
    savedQuestions.push(ticket);
    localStorage.setItem('savedQuestions', JSON.stringify(savedQuestions));
    alert("Savol saqlandi!");
  } else {
    alert("Bu savol allaqachon saqlangan.");
  }
}
