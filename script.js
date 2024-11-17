let tickets = [];
let currentIndex = 0;
let randomMode = true;

document.addEventListener("DOMContentLoaded", () => {
  fetch("bilet.txt")
    .then(response => response.text())
    .then(data => {
      tickets = data.trim().split("\n").map(line => {
        const [question, answer] = line.split("|");
        return { question: question.trim(), answer: answer.trim() };
      });
      showRandomTicket();
    });

  document.getElementById("random-mode").addEventListener("click", () => {
    randomMode = true;
    currentIndex = 0;
    document.getElementById("all-tickets").hidden = true;
    document.getElementById("ticket-container").hidden = false;
    showRandomTicket();
  });

  document.getElementById("sequential-mode").addEventListener("click", () => {
    randomMode = false;
    currentIndex = 0;
    document.getElementById("all-tickets").hidden = true;
    document.getElementById("ticket-container").hidden = false;
    showTicket();
  });

  document.getElementById("all-mode").addEventListener("click", () => {
    document.getElementById("all-tickets").innerHTML = "";
    tickets.forEach((ticket, index) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <strong>${ticket.question}</strong>
        <button id="toggle-answer-${index}" onclick="toggleAnswer(${index})">Javobni Ko'rish</button>
        <p id="answer-${index}" hidden>${ticket.answer}</p>
      `;
      document.getElementById("all-tickets").appendChild(li);
    });
    document.getElementById("all-tickets").hidden = false;
    document.getElementById("ticket-container").hidden = true;
  });

  document.getElementById("show-answer").addEventListener("click", toggleMainAnswer);
});

function showRandomTicket() {
  const randomIndex = Math.floor(Math.random() * tickets.length);
  const ticket = tickets[randomIndex];
  displayTicket(ticket);
}

function showTicket() {
  if (currentIndex >= tickets.length) currentIndex = 0;
  displayTicket(tickets[currentIndex]);
  currentIndex++;
}

function displayTicket(ticket) {
  document.getElementById("question").textContent = ticket.question;
  document.getElementById("answer").textContent = ticket.answer;
  document.getElementById("answer").hidden = true;
  document.getElementById("show-answer").textContent = "Javobni Ko'rish";
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
