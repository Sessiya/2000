const express = require('express');
const app = express();
const port = process.env.PORT || 3000;  // Portni to'g'ri olish

app.use(express.json());

// Reytinglarni saqlash uchun
let ratings = [];

// POST so'rovi - reytingni qabul qilish
app.post('/api/rating', (req, res) => {
    const { rating } = req.body;
    if (rating >= 1 && rating <= 5) {
        ratings.push(rating);
        res.status(200).json({ message: 'Reyting muvaffaqiyatli qo\'shildi' });
    } else {
        res.status(400).json({ message: 'Noto\'g\'ri reyting' });
    }
});

// GET so'rovi - reytinglar statistikasi
app.get('/api/ratings', (req, res) => {
    const ratingCount = [0, 0, 0, 0, 0];  // Reytinglar 1 dan 5 gacha

    ratings.forEach(rating => {
        ratingCount[rating - 1] += 1;  // Har bir reytingning sonini sanash
    });

    res.json({
        ratingCount: ratingCount,
        totalRatings: ratings.length
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
