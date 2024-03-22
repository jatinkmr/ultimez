const router = require('express').Router()
const { newBookCreationController, fetchAllBookController, fetchBookByIdController, updateBookController, removeBookByIdController } = require('../controller')

// for creating a new book
router.post('/create-new', newBookCreationController)
// for fetching all the stored books
router.get('/fetch-all', fetchAllBookController)
// for fetch a book by particular Id
router.get('/fetch-book-id/:bookid', fetchBookByIdController)
// for updation
router.put('/update', updateBookController)
// for deletion
router.delete('/remove-by-id/:bookid', removeBookByIdController)


module.exports = router