const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

let ratings = [];
let comments = [];  // Kommentlarni saqlash uchun
let userRatings = {}; // User tomonidan berilgan reytinglarni saqlash

// POST so'rovi - reytingni qabul qilish
app.post('/api/rating', (req, res) => {
  const { rating } = req.body;
  const userId = req.ip; // Foydalanuvchi identifikatori sifatida IP manzilini olish

  if (rating >= 1 && rating <= 5) {
    if (userRatings[userId]) {
      // Agar foydalanuvchi allaqachon reyting bergan bo'lsa, uni yangilash
      const oldRating = userRatings[userId];
      ratings[oldRating - 1] -= 1; // Eski reytingni kamaytirish
    }

    // Yangi reytingni saqlash
    userRatings[userId] = rating;
    ratings[rating - 1] += 1;

    res.status(200).json({ message: 'Reyting muvaffaqiyatli qo\'shildi' });
  } else {
    res.status(400).json({ message: 'Noto\'g\'ri reyting' });
  }
});

// POST so'rovi - kommentni qabul qilish
app.post('/api/comment', (req, res) => {
  const { comment } = req.body;
  const userId = req.ip; // Foydalanuvchi identifikatori sifatida IP manzilini olish

  if (comment && comment.length > 0) {
    comments.push({ userId, comment });
    res.status(200).json({ message: 'Komment muvaffaqiyatli qo\'shildi' });
  } else {
    res.status(400).json({ message: 'Komment bo\'sh bo\'lishi mumkin emas' });
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
    totalRatings: ratings.reduce((acc, val) => acc + val, 0)  // Jami reytinglar soni
  });
});

// GET so'rovi - kommentlar ro'yxati
app.get('/api/comments', (req, res) => {
  res.json(comments);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
