const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Baholash va kommentlar saqlanishi uchun xotira (boshqa bazaga bog'lanish mumkin)
let ratings = [];
let comments = [];

// Reyting va kommentni qabul qilish
app.post('/api/rating', (req, res) => {
  const { rating, comment } = req.body;
  const userId = req.ip;  // Foydalanuvchi IP manzili orqali identifikatsiya qilish

  if (rating >= 1 && rating <= 5) {
    // Agar foydalanuvchi allaqachon reyting bergan bo'lsa, uni yangilash
    if (!ratings[userId]) {
      ratings[userId] = { rating, comment };
      res.status(200).json({ message: 'Reyting va komment muvaffaqiyatli yuborildi!' });
    } else {
      res.status(400).json({ message: 'Siz allaqachon reyting bergansiz.' });
    }
  } else {
    res.status(400).json({ message: 'Noto\'g\'ri reyting qiymati' });
  }
});

// Reytinglar va kommentlarni olish
app.get('/api/ratings', (req, res) => {
  const result = Object.values(ratings);
  res.json(result);  // Yuborilgan reyting va kommentlar
});

// Serverni ishga tushirish
app.listen(port, () => {
  console.log(`Server http://localhost:${port} manzilida ishlamoqda`);
});
