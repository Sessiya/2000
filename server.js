const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const multer = require('multer');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDBga ulanish (MongoDB Atlas URL)
mongoose.connect('mongodb://localhost:27017/yourDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Foydalanuvchi uchun Schema
const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    avatar: String,
    activities: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Activity' }]
});

const User = mongoose.model('User', userSchema);

// Kurslar uchun Schema
const courseSchema = new mongoose.Schema({
    name: String,
    description: String
});

const Course = mongoose.model('Course', courseSchema);

// Faoliyatlar Schema
const activitySchema = new mongoose.Schema({
    course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
    topic: String,
    progress: Number // 0-100% progress
});

const Activity = mongoose.model('Activity', activitySchema);

// Ro'yxatdan o'tish endpoint
app.post('/register', async (req, res) => {
    const { username, password, avatar } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ username, password: hashedPassword, avatar });
    await newUser.save();

    res.json({ success: true, message: 'Ro\'yxatdan o\'tish muvaffaqiyatli yakunlandi!' });
});

// Kirish endpoint
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user) {
        return res.status(400).json({ success: false, message: 'Foydalanuvchi topilmadi!' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(400).json({ success: false, message: 'Parol noto\'g\'ri!' });
    }

    const token = jwt.sign({ userId: user._id }, 'secretkey', { expiresIn: '1h' });
    res.json({ success: true, token });
});

// Faoliyatni saqlash endpoint
app.post('/activity', async (req, res) => {
    const { userId, courseId, topic, progress } = req.body;

    const newActivity = new Activity({ course: courseId, topic, progress });
    await newActivity.save();

    const user = await User.findById(userId);
    user.activities.push(newActivity);
    await user.save();

    res.json({ success: true, message: 'Faoliyat saqlandi!' });
});

// Kurslarni olish endpoint
app.get('/courses', async (req, res) => {
    const courses = await Course.find();
    res.json(courses);
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
