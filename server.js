const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

let ratings = [];
let comments = [];

app.post('/api/rating', (req, res) => {
  const { rating, comment } = req.body;
  const userId = req.ip;  // Foydalanuvchi IP-manzilidan foydalanish

  if (rating >= 1 && rating <= 5) {
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

app.listen(port, () => {
  console.log(`Server http://localhost:${port} manzilida ishlamoqda`);
});
