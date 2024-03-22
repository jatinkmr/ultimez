const { createNewBook, fetchAllService, fetchBookId, updateBookData, deleteBookById } = require('../model/Books/Service')
const { newBookSchemaValidation } = require('../Validation')

const newBookCreationController = async (req, res, next) => {
    try {
        const { error } = newBookSchemaValidation(req.body)
        if (error) {
            console.log('error :- ', error)
            return res.status(200).json({
                error: true,
                message: error
            })
        }

        const response = await createNewBook(req.body)
        if (response) {
            return res.status(201).json({
                error: false,
                message: 'Book Created Successfully',
                data: response
            })
        }
    } catch (error) {
        next(error)
    }
}

const fetchAllBookController = async (req, res, next) => {
    try {
        const response = await fetchAllService()

        if (response && response.length) {
            return res.status(200).json({
                error: false,
                message: 'Available Books',
                data: response
            })
        } else {
            return res.status(200).json({
                error: false,
                message: 'No Books Available',
                data: []
            })
        }
    } catch (error) {
        next(error)
    }
}

const fetchBookByIdController = async (req, res, next) => {
    try {
        if (!req.params.bookid) {
            return res.status(200).json({
                error: true,
                message: 'Please specify BookId'
            })
        }
        const response = await fetchBookId(req.params.bookid)

        if (response) {
            return res.status(200).json({
                error: false,
                message: 'Book Data Available',
                data: response
            })
        } else {
            return res.status(200).json({
                error: true,
                message: 'No Such Book exist with that given BookId'
            })
        }
    } catch (error) {
        next(error)
    }
}

const updateBookController = async (req, res, next) => {
    try {
        const isBookExist = await fetchBookId(req.body.bookid)

        if (!isBookExist) {
            return res.status(200).json({
                error: true,
                message: 'No such book available with given id'
            })
        }

        const response = await updateBookData(req.body)
        if (response) {
            return res.status(200).json({
                error: false,
                message: 'Book updated'
            })
        }
    } catch (error) {
        console.log('error', error)
        next(error)
    }
}

const removeBookByIdController = async (req, res, next) => {
    try {
        const isBookExist = await fetchBookId(req.params.bookid)

        if (!isBookExist) {
            return res.status(200).json({
                error: true,
                message: 'No such book available with given id'
            })
        }

        const response = await deleteBookById(req.params.bookid)

        if (response) {
            return res.status(200).json({
                error: false,
                message: 'Book Deleted Successfully'
            })
        }
    } catch (error) {
        next(error)
    }
}

module.exports = {
    newBookCreationController,
    fetchAllBookController,
    fetchBookByIdController,
    updateBookController,
    removeBookByIdController
}
