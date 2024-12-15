// Testni qayta ishlash
function resetTest() {
    // Bu yerda testni qayta ishga tushurish funksiyasini qo'shishingiz mumkin
    // Masalan, testni boshidan boshlash:
    window.location.reload(); // Sahifani qayta yuklash
}

// shablonlar uchun:
function loadTest(testNumber) {
    if (testNumber === 'shablonlar') {
        // "Shablonlar" tugmasi uchun index.html manziliga yo'naltirish
        window.location.href = "../index.html";
    } else {
        // Avvalgi testlar uchun manzilga yo'naltirish
        window.location.href = testNumber + ".html";
    }
}
