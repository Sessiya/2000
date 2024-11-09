window.onload = function() {
    const username = localStorage.getItem('username');
    const avatar = localStorage.getItem('avatar');
    const userActivity = JSON.parse(localStorage.getItem('userActivity'));

    if (!username || !avatar || !userActivity) {
        // Foydalanuvchi ro'yxatdan o'tmagan bo'lsa, ro'yxatdan o'tish sahifasiga yo'naltirish
        window.location.href = 'register.html';
    } else {
        // Foydalanuvchi ma'lumotlarini ko'rsatish
        document.getElementById('userInfo').innerHTML = `
            <p>Salom, ${username}!</p>
            <img src="${avatar}" alt="Avatar" width="100" height="100">
        `;

        // Show user activity
        const activity = `
            <p>Faoliyat:</p>
            <p><strong>Yakunlangan mavzular:</strong> ${userActivity.completedTopics.join(', ')}</p>
            <p><strong>Hozirgi mavzu:</strong> <span style="color: red;">${userActivity.currentTopic}</span></p>
        `;
        document.getElementById('userActivity').innerHTML = activity;
    }
};
