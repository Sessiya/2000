const express = require('express');
const app = express();
const port = 3000;

// Serve static files (HTML, CSS, JS)
app.use(express.static('public'));

// Import your backend scripts
const login = require('./login');
const register = require('./register');
const courses = require('./courses');

// Example of using these modules
app.post('/login', login);
app.post('/register', register);
app.get('/courses', courses);

// Server listening
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
