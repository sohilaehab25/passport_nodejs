const { default: mongoose, models } = require("mongoose");

const userschema = new mongoose.Schema({
    name: {
        string,
        required: true

    },
    email: {
        string,
        required: true

    },
    date: {
        date,
        required: true

    },
    password: {
        string,
        required: true

    }
})
const user = mongoose.model('user', userschema)

models.exports = user;