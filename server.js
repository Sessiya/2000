const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

let ratings = [];
let comments = [];

// POST route to submit a rating and comment
app.post('/api/rating', (req, res) => {
  const { rating, comment } = req.body;
  const userId = req.ip;  // Using user IP for simple identification

  if (rating >= 1 && rating <= 5) {
    if (!ratings[userId]) {
      ratings[userId] = { rating, comment };
      res.status(200).json({ message: 'Rating and comment submitted successfully!' });
    } else {
      res.status(400).json({ message: 'You have already rated.' });
    }
  } else {
    res.status(400).json({ message: 'Invalid rating value' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
