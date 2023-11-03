const mongoose = require('mongoose')
const {Schema} = mongoose

const userSchema = new Schema({
    firstname: {
        type: String,
        unique: true
    },
    lastname: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        unique: true
    }
})

const userModel = mongoose.model('users', userSchema)

module.exports = userModel
