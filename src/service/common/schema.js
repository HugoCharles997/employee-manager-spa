const {Schema, model } = require('mongoose');

const userSchema = Schema({
    _id: Number,
    name: String,
    email: String,
    gender: String,
    jobTitle: String
});

module.exports = model('User', userSchema);