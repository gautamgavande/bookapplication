const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    name: String,
    author: String,
    price: Number,
    description: String,
    quantity:Number,
    image: String
})

module.exports = mongoose.model('Book', bookSchema)