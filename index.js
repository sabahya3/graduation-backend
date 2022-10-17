const express = require('express')

const cors = require('cors')

require("dotenv").config();


const connectMongoose = require('./config/mongoose_connection')


const app = express()

app.use(express.json())

// port number
const port = process.env.PORT || 3000





connectMongoose(() => {
    app.listen(port, () => {
        console.log(`Server is Running at Port ${port}`)
    })
})



