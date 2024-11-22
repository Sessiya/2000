const express = require('express');
const app = express();
const port = process.env.PORT || 10000;  // Render platformasida portni avtomatik aniqlash

app.use(express.static('public'));  // Statik fayllar

app.use(express.json());

// Reytinglarni saqlash
let ratings = [];

app.post('/api/rating', (req, res) => {
    const { rating } = req.body;
    if (rating >= 1 && rating <= 5) {
        ratings.push(rating);
        res.status(200).json({ message: 'Reyting muvaffaqiyatli qo\'shildi' });
    } else {
        res.status(400).json({ message: 'Noto\'g\'ri reyting' });
    }
});

app.get('/api/ratings', (req, res) => {
    const ratingCount = [0, 0, 0, 0, 0];

    ratings.forEach(rating => {
        ratingCount[rating - 1] += 1;
    });

    res.json({
        ratingCount: ratingCount,
        totalRatings: ratings.length
    });
});

app.listen(port, () => {
    console.log(`Server running at https://two000-7.onrender.com`);  // To'g'ri URL
});
