const Joi = require('joi')

const newBookSchemaValidation = reqBody => {
    const newBook = Joi.object({
        bookname: Joi.string().required(),
        author: Joi.string().required()
    })

    return newBook.validate(reqBody)
}

module.exports = {
    newBookSchemaValidation
}