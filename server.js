const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const PORT = 8080 || process.env.PORT

app.use(bodyParser.json())

require('./Database')

app.use('/api/v1', require('./routes'))

// error handling
app.use(function (err, req, res, next) {
    return res.status(500).json({
        error: true,
        message: err
    })
})

app.listen(PORT, () => {
    console.log(`server is listening at ${PORT}`)
})
