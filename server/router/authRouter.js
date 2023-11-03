const express = require('express')
const cors = require('cors')
const router = express.Router()
const {test, registerUser, getUser, loginUser} = require('../controller/authController')

router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:5173'
    })
)

//GET request
router.get('/', test)
router.get('/register', getUser)
router.get('/login', getUser)

//POST request
router.post('/register', registerUser)
router.post('/login', loginUser)

module.exports = router