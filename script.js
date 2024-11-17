let currentIndex = 0;
let randomMode = true;
let savedQuestions = JSON.parse(localStorage.getItem('savedQuestions')) || [];

document.addEventListener("DOMContentLoaded", () => {
  if (!tickets || tickets.length === 0) {
    alert("Biletlar mavjud emas!");
    return;
  }

  showRandomTicket();

  document.getElementById("random-mode").addEventListener("click", () => {
    randomMode = true;
    currentIndex = 0;
    showRandomTicket();
  });

  document.getElementById("next-ticket").addEventListener("click", showNextTicket);
  document.getElementById("prev-ticket").addEventListener("click", showPrevTicket);
  document.getElementById("show-answer").addEventListener("click", toggleMainAnswer);
  document.getElementById("all-mode").addEventListener("click", showAllTickets);

  document.getElementById("dark-mode-toggle").addEventListener("click", toggleDarkMode);

  // "Hammasini Ko'rish" tugmasi uchun
  document.getElementById("show-saved-questions").addEventListener("click", showSavedQuestions);
});

function showRandomTicket() {
  const randomIndex = Math.floor(Math.random() * tickets.length);
  currentIndex = randomIndex;
  displayTicket(tickets[currentIndex]);
}

function showNextTicket() {
  currentIndex = (currentIndex + 1) % tickets.length;
  displayTicket(tickets[currentIndex]);
}

function showPrevTicket() {
  currentIndex = (currentIndex - 1 + tickets.length) % tickets.length;
  displayTicket(tickets[currentIndex]);
}

function displayTicket(ticket) {
  document.getElementById("question").textContent = ticket.question;
  document.getElementById("answer").textContent = ticket.answer;
  document.getElementById("answer").hidden = true;
  document.getElementById("show-answer").textContent = "Javobni Ko'rish";

  // ♻️ belgisini va saqlash tugmasini qo'shish
  const recycleButton = document.createElement("button");
  recycleButton.textContent = "♻️";
  recycleButton.classList.add("save-question-btn");
  recycleButton.onclick = () => saveQuestion(ticket);
  document.getElementById("ticket-container").appendChild(recycleButton);
}

function toggleMainAnswer() {
  const answerElement = document.getElementById("answer");
  const button = document.getElementById("show-answer");

  if (answerElement.hidden) {
    answerElement.hidden = false;
    button.textContent = "Javobni Yashirish";
  } else {
    answerElement.hidden = true;
    button.textContent = "Javobni Ko'rish";
  }
}

function toggleDarkMode() {
  const body = document.body;
  const toggleButton = document.getElementById("dark-mode-toggle");

  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    toggleButton.textContent = "🌙";  // Tungi rejim belgilari
  } else {
    toggleButton.textContent = "☀️";  // Kunduzgi rejim belgilari
  }
}

function saveQuestion(ticket) {
  if (!savedQuestions.some(saved => saved.question === ticket.question)) {
    savedQuestions.push(ticket);
    localStorage.setItem('savedQuestions', JSON.stringify(savedQuestions));
    alert("Savol saqlandi!");
  } else {
    alert("Bu savol allaqachon saqlangan.");
  }
}

function showAllTickets() {
  const allTicketsContainer = document.getElementById("all-tickets");
  allTicketsContainer.innerHTML = "";
  tickets.forEach((ticket, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${ticket.question}</strong>
      <button id="toggle-answer-${index}" onclick="toggleAnswer(${index})">Javobni Ko'rish</button>
      <p id="answer-${index}" hidden>${ticket.answer}</p>
    `;
    allTicketsContainer.appendChild(li);
  });
  allTicketsContainer.hidden = false;
  document.getElementById("ticket-container").hidden = true;
}

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

function showSavedQuestions() {
  const savedContainer = document.getElementById("saved-questions-container");
  savedContainer.innerHTML = "";
  
  // Agar saqlangan savollar bo'lsa
  if (savedQuestions.length > 0) {
    savedQuestions.forEach((ticket, index) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <strong>${ticket.question}</strong>
        <button id="toggle-answer-${index}" onclick="toggleAnswer(${index})">Javobni Ko'rish</button>
        <button class="delete-question-btn" onclick="deleteSavedQuestion(${index})">🗑️</button>
        <p id="answer-${index}" hidden>${ticket.answer}</p>
      `;
      savedContainer.appendChild(li);
    });
  } else {
    savedContainer.innerHTML = "<p>Saqlangan savollar mavjud emas.</p>";
  }

  savedContainer.hidden = false;
  document.getElementById("ticket-container").hidden = true;
}

function deleteSavedQuestion(index) {
  // Saqlangan savolni o'chirish
  savedQuestions.splice(index, 1);
  localStorage.setItem('savedQuestions', JSON.stringify(savedQuestions));
  showSavedQuestions();
}

function createSavedQuestionsPage() {
  const savedQuestionsPage = document.getElementById("saved-questions-page");
  savedQuestionsPage.innerHTML = "";
  
  // Saqlangan savollarni har 10, 20, 30 ga bo'lish
  const perPageOptions = [10, 20, 30];
  const questionPerPage = 10; // Start with 10 per page

  perPageOptions.forEach(option => {
    const pageButton = document.createElement("button");
    pageButton.textContent = `${option} ta savol`;
    pageButton.onclick = () => showSavedQuestionsPerPage(option);
    savedQuestionsPage.appendChild(pageButton);
  });

  // Saqlangan savollarni 10, 20, 30 ga bo'lish
  showSavedQuestionsPerPage(questionPerPage);
}

function showSavedQuestionsPerPage(num) {
  const savedContainer = document.getElementById("saved-questions-container");
  savedContainer.innerHTML = "";

  const totalQuestions = savedQuestions.length;
  const totalPages = Math.ceil(totalQuestions / num);
  
  let pageIndex = 0;

  // Page buttons
  const pageButtonsContainer = document.getElementById("page-buttons-container");
  pageButtonsContainer.innerHTML = "";
  
  for (let i = 0; i < totalPages; i++) {
    const pageButton = document.createElement("button");
    pageButton.textContent = i + 1;
    pageButton.onclick = () => {
      pageIndex = i;
      renderSavedQuestions(pageIndex, num);
    };
    pageButtonsContainer.appendChild(pageButton);
  }

  renderSavedQuestions(pageIndex, num);
}

function renderSavedQuestions(pageIndex, num) {
  const savedContainer = document.getElementById("saved-questions-container");
  savedContainer.innerHTML = "";

  const start = pageIndex * num;
  const end = start + num;
  
  const questionsToDisplay = savedQuestions.slice(start, end);

  questionsToDisplay.forEach((ticket, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${ticket.question}</strong>
      <button id="toggle-answer-${index}" onclick="toggleAnswer(${index})">Javobni Ko'rish</button>
      <button class="delete-question-btn" onclick="deleteSavedQuestion(${index})">🗑️</button>
      <p id="answer-${index}" hidden>${ticket.answer}</p>
    `;
    savedContainer.appendChild(li);
  });
}
