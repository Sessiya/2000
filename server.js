// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// MongoDB ulanishi
mongoose.connect('mongodb://localhost/ratings', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Ma'lumotlar bazasidagi reytingni saqlash uchun model
const Rating = mongoose.model('Rating', new mongoose.Schema({
    rating: Number,
}));

// BodyParser yordamida JSONni olish
app.use(bodyParser.json());

// Reyting yuborish uchun API endpoint
app.post('/api/rating', (req, res) => {
    const { rating } = req.body;

    // Reytingni ma'lumotlar bazasiga saqlash
    const newRating = new Rating({ rating });
    newRating.save()
        .then(() => res.json({ message: 'Reyting muvaffaqiyatli saqlandi!' }))
        .catch((err) => res.status(500).json({ message: 'Xatolik yuz berdi', error: err }));
});

// Serverni ishga tushirish
const port = 3000;
app.listen(port, () => {
    console.log(`Server ishga tushdi port ${port}`);
});
