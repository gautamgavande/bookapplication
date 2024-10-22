const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    Phone: String,
    email:{
        type: String,
        unique: true
    },
    username: String,
    password: String,
    profilePicture: String,
    otp: String,
    verified: {type: Boolean, default: false},

   

})

module.exports = mongoose.model('User', userSchema)