const Books = require('./Books')

const createNewBook = async reqBody => {
    return await Books.create(reqBody)
}

const fetchAllService = async () => {
    return await Books.find({})
}

const fetchBookId = async bookId => {
    return await Books.findOne({
        '_id': bookId
    })
}

const updateBookData = async reqBodyData => {
    return await Books.updateOne({
        bookname: reqBodyData.bookname,
        author: reqBodyData.author
    }, {
        '_id': reqBodyData.bookid
    })
}

const deleteBookById = async bookId => {
    return await Books.deleteOne({
        _id: bookId
    })
}

module.exports = {
    createNewBook,
    fetchAllService,
    fetchBookId,
    updateBookData,
    deleteBookById
}