document.querySelector('#loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Login va parolni tekshirish
    const enteredUsername = document.querySelector('#login').value;
    const enteredPassword = document.querySelector('#password').value;

    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (enteredUsername === storedUsername && enteredPassword === storedPassword) {
        alert('Tizimga muvaffaqiyatli kirildi!');
        
        // Foydalanuvchini kebinet sahifasiga yo'naltirish
        window.location.href = 'kebinet.html'; // Yangi sahifa
    } else {
        alert('Login yoki parol noto\'g\'ri.');
    }
});
