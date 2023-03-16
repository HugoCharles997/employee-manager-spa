const {Schema, model } = require('mongoose');

const userSchema = Schema(
    {
        name: String,
        email: String,
        gender: String,
        jobTitle: String
    }
);

module.exports = model('User', userSchema);