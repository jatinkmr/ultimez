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
    return await Books.findOneAndUpdate({
        _id: reqBodyData.bookid
    }, reqBodyData, {
        new: true
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