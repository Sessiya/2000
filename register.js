// Register formni yuborishdan oldin tekshirish
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Formani avtomatik yuborilishidan to'xtatish

    // Ro'yxatdan o'tish malumotlarini olish
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const avatar = document.getElementById('avatar').files[0];

    // Bu yerda malumotlarni serverga yuborish yoki localStorage'da saqlash jarayoni bo'lishi mumkin
    // Misol uchun, foydalanuvchi malumotlarini saqlash
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    localStorage.setItem('avatar', avatar.name); // Avatar nomini saqlash

    // Ro'yxatdan o'tishdan so'ng, foydalanuvchini kirish sahifasiga yo'naltirish
    alert('Ro\'yxatdan o\'tish muvaffaqiyatli yakunlandi!');
    window.location.href = 'login.html'; // Kirish sahifasiga yo'naltirish
});
