document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const avatar = document.getElementById('avatar').files[0];

    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);
    if (avatar) {
        formData.append('avatar', avatar);
    }

    fetch('https://your-backend-url/register', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Save user data in localStorage
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            if (avatar) {
                localStorage.setItem('avatar', URL.createObjectURL(avatar));  // Save avatar URL
            }

            // Initialize user activity
            const userActivity = {
                completedTopics: [],
                currentTopic: 'Mavzu 1'  // Default starting topic
            };
            localStorage.setItem('userActivity', JSON.stringify(userActivity));

            alert('Ro\'yxatdan o\'tish muvaffaqiyatli yakunlandi!');
            window.location.href = 'login.html'; // Kirish sahifasiga yo'naltirish
        } else {
            alert('Ro\'yxatdan o\'tishda xato yuz berdi!');
        }
    })
    .catch(error => {
        console.error('Xato:', error);
        alert('Serverga so\'rov yuborishda xato yuz berdi.');
    });
});
