const express = require('express');
const multer = require('multer');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = require('./models/User'); // Mongoose model
const app = express();

// Mongoose bilan ulanish
mongoose.connect('mongodb://localhost:27017/yourDatabase', { useNewUrlParser: true, useUnifiedTopology: true });

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const upload = multer({ storage: storage });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ro'yxatdan o'tish
app.post('/register', upload.single('avatar'), async (req, res) => {
    const { username, password } = req.body;
    const avatar = req.file ? req.file.filename : null;

    // Parolni hash qilish
    const hashedPassword = await bcrypt.hash(password, 10);

    // Foydalanuvchi yaratish
    const newUser = new User({
        username,
        password: hashedPassword,
        avatar,
        courses: [] // Kurslar haqida ma'lumotlar keyinchalik qo'shiladi
    });

    await newUser.save();

    res.json({ success: true, message: 'Foydalanuvchi ro\'yxatdan o\'tdi!' });
});

// Tizimga kirish
app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user) {
        return res.json({ success: false, message: 'Foydalanuvchi topilmadi.' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        return res.json({ success: false, message: 'Parol noto\'g\'ri.' });
    }

    // JWT token yaratish
    const token = jwt.sign({ id: user._id }, 'secret_key');
    res.json({ success: true, token });
});

// Shaxsiy kabinetga kirish
app.get('/profile', async (req, res) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(403).json({ success: false, message: 'Token kerak.' });
    }

    try {
        const decoded = jwt.verify(token, 'secret_key');
        const user = await User.findById(decoded.id);
        res.json({ success: true, user });
    } catch (error) {
        res.status(403).json({ success: false, message: 'Token noto\'g\'ri.' });
    }
});

app.listen(3000, () => {
    console.log('Server ishga tushdi, http://localhost:3000');
});
