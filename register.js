document.querySelector('#registerForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Foydalanuvchi ma'lumotlarini olish
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;
    const avatarFile = document.querySelector('#avatar').files[0];

    if (username && password && avatarFile) {
        // Avatarni base64 formatiga o'zgartirish
        const reader = new FileReader();
        reader.onloadend = function() {
            const avatar = reader.result;

            // Ma'lumotlarni localStorage-ga saqlash
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            localStorage.setItem('avatar', avatar);

            alert('Ro\'yxatdan o\'tdingiz! Endi kurslarni ko\'rishingiz mumkin.');

            // Kurslar sahifasiga yo'naltirish
            window.location.href = 'courses.html';
        };
        reader.readAsDataURL(avatarFile);
    } else {
        alert('Iltimos, barcha maydonlarni to\'ldiring.');
    }
});
