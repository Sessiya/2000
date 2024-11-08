document.querySelectorAll('.course-card a').forEach(item => {
    item.addEventListener('click', (event) => {
        event.preventDefault();
        alert('Kursni boshlash uchun ro‘yxatdan o‘ting!');
    });
});
