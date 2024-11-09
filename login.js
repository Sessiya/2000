document.querySelector('#loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Login va parolni tekshirish
    const enteredUsername = document.querySelector('#login').value;
    const enteredPassword = document.querySelector('#password').value;

    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (enteredUsername === storedUsername && enteredPassword === storedPassword) {
        // Foydalanuvchini tizimga kirgan sifatida belgilash
        localStorage.setItem('loggedIn', true);
        alert('Tizimga muvaffaqiyatli kirildi!');
        window.location.href = 'index.html'; // Bosh sahifaga yo'naltirish
    } else {
        alert('Login yoki parol noto\'g\'ri.');
    }
});
