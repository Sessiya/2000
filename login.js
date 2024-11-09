document.querySelector('#loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Login va parolni tekshirish
    const enteredUsername = document.querySelector('#login').value;
    const enteredPassword = document.querySelector('#password').value;

    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (enteredUsername === storedUsername && enteredPassword === storedPassword) {
        alert('Tizimga muvaffaqiyatli kirildi!');
        window.location.href = 'courses.html'; // Kurslar sahifasiga yo'naltirish
    } else {
        alert('Login yoki parol noto\'g\'ri.');
    }
});
