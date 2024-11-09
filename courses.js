window.onload = function() {
    const username = localStorage.getItem('username');
    const avatar = localStorage.getItem('avatar');

    if (!username || !avatar) {
        // Foydalanuvchi ro'yxatdan o'tmagan bo'lsa, ro'yxatdan o'tish sahifasiga yo'naltirish
        window.location.href = 'register.html';
    } else {
        // Foydalanuvchi ma'lumotlarini ko'rsatish
        document.getElementById('userInfo').innerHTML = `
            <p>Salom, ${username}!</p>
            <img src="${avatar}" alt="Avatar" width="100" height="100">
        `;
    }
};
