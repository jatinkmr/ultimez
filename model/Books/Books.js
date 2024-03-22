const mongoose = require('mongoose')

const bookSchema = mongoose.Schema({
    bookname: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('books', bookSchema)