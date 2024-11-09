document.querySelector('#registerForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Formdan foydalanuvchi nomi va parolni olish
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;

    // Avatarni olish (agar mavjud bo'lsa)
    const avatarFile = document.querySelector('#avatar').files[0];

    // Avatarni Base64 formatga o'tkazish (agar foydalanuvchi avatarni yuklagan bo'lsa)
    let avatarData = null;
    if (avatarFile) {
        const reader = new FileReader();
        reader.onloadend = function() {
            avatarData = reader.result;
            saveUserData(username, password, avatarData); // Avatar bilan birga foydalanuvchi ma'lumotlarini saqlash
        };
        reader.readAsDataURL(avatarFile); // Avatarni Base64 formatga o'zgartiradi
    } else {
        saveUserData(username, password, null); // Agar avatar bo'lmasa, faqat nom va parolni saqlaydi
    }
});

function saveUserData(username, password, avatarData) {
    // Foydalanuvchi ma'lumotlarini localStorage'ga saqlash
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    // Agar avatar mavjud bo'lsa, uni saqlash
    if (avatarData) {
        localStorage.setItem('avatar', avatarData);
    }

    // Ro'yxatdan o'tganligi haqida xabar
    alert('Ro\'yxatdan o\'tdingiz!');
    
    // Login sahifasiga yo'naltirish
    window.location.href = 'login.html';
}
