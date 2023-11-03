const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
const auth = require('./router/authRouter')
const app = express()

//Database connection
mongoose.connect('mongodb+srv://ingentewarren2:oZmz8afvCmXQxYn3@cluster0.qqyfdeq.mongodb.net/userDB?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('Database connected')
})
.catch((err) => {
    console.log('failed to connect', err)
})

app.use(express.json())
app.use('/', auth)

app.listen(8000, () => {console.log('Connected to server success')})