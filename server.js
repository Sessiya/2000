const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

let ratings = [];
let comments = [];

// Reyting va kommentlarni qabul qilish
app.post('/api/rating', (req, res) => {
  const { rating, comment } = req.body;

  if (rating >= 1 && rating <= 5) {
    ratings.push({ rating, comment });
    res.status(200).json({ message: 'Reyting va komment muvaffaqiyatli saqlandi!' });
  } else {
    res.status(400).json({ message: 'Noto‘g‘ri reyting qiymati.' });
  }
});

// Barcha reytinglar va kommentlarni olish
app.get('/api/ratings', (req, res) => {
  res.json(ratings);
});

app.listen(port, () => {
  console.log(`Server http://localhost:${port} da ishlamoqda`);
});
