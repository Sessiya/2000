// Tungi va kunduzgi rejimni boshqarish funksiyasi

// Rejimni saqlash va tiklash
function initializeDarkMode() {
  const savedMode = localStorage.getItem("theme");
  const body = document.body;
  const toggleButton = document.getElementById("dark-mode-toggle");

  if (savedMode === "dark") {
    body.classList.add("dark-mode");
    toggleButton.textContent = "☀️"; // Kunduzgi rejim tugmasi
  } else {
    body.classList.remove("dark-mode");
    toggleButton.textContent = "🌙"; // Tungi rejim tugmasi
  }
}

// Rejimni almashtirish
function toggleDarkMode() {
  const body = document.body;
  const toggleButton = document.getElementById("dark-mode-toggle");

  body.classList.toggle("dark-mode");

  // Saqlangan rejimni yangilash
  if (body.classList.contains("dark-mode")) {
    toggleButton.textContent = "☀️"; // Kunduzgi rejim tugmasi
    localStorage.setItem("theme", "dark");
  } else {
    toggleButton.textContent = "🌙"; // Tungi rejim tugmasi
    localStorage.setItem("theme", "light");
  }
}

// DOM elementni boshqarish
document.getElementById("dark-mode-toggle").addEventListener("click", toggleDarkMode);

// Sahifa yuklanganda rejimni tiklash
document.addEventListener("DOMContentLoaded", initializeDarkMode);
