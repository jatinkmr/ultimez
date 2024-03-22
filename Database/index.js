const mongoose = require('mongoose')
const mongoDataBaseName = 'mongodb://localhost:27017/ultimez'

async function dataBaseConnection() {
    try {
        await mongoose.connect(mongoDataBaseName)
        console.log('DataBase connected')
    } catch (error) {
        console.log(`error while making the connection with mongodb :- ${error}`)
        process.exit(1)
    }
}

dataBaseConnection()