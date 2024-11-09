const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    avatar: { type: String },
    courses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }] // Kurslar bo'yicha ma'lumotlar
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
