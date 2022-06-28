const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    FirstName: String,
    LastName: String,
    Sex: String,
    Age: Number,
    Password: String
});

module.exports = mongoose.model('User', userSchema);
