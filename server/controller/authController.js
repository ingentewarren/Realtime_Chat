const user = require('../model/users')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const SECRET_KEY = 'secretkey'

const test = (req, res) => {
    res.json('test is working')
}

const registerUser = async(req, res) => {
    try {
        const {firstname, lastname, email, password} = req.body;
        const hashPassword = await bcrypt.hash(password, 10)

        if(!firstname){
            return res.json({
                error: 'firstname is required'
            })
        }
        if(!lastname){
            return res.json({
                error: 'lastname is required'
            })
        }
        if(!email){
            return res.json({
                error: 'email is required'
            })
        }
        if(!password || password.length < 6){
            return res.json({
                error: 'firstname is required'
            })
        }

        const exist = await user.findOne({email})
        if(exist){
            return res.json({
                error: 'Email is already taken'
            })
        }

        const createdUser = await user.create({
            firstname, lastname, email, password: hashPassword
        })

        return res.json(createdUser)

    } catch (error) {
        res.json({
            message: "error register"
        })
    }
}

const loginUser = async(req, res) => {
    try {
        const {email, password} = req.body
        const users = await user.findOne({email})
        const isPasswordvalied = await bcrypt.compare(password, users.password)
        

        if(!users){
            return res.json({
                error: 'no user found'
            })
        }
        if(!isPasswordvalied){
            return res.json({
                error: 'password is invalid'
            })
        }
        else{
            jwt.sign({email: users.email, id: users._id, name: users.name}, SECRET_KEY, {}, (err, token) => {
                if(err){
                    throw err
                }
                res.cookie('token', token).json(users)
            })
        }
        return res.json({
            message: 'Log in success'
        })
    } catch (error) {
        console.log(error)
    }
}

const getUser = async(req, res) => {
    try {
        const getusers = await user.find()
        res.json(getusers)
    } catch (error) {
        res.json({
            message: "error"
        })
    }
}

module.exports = {
    test,
    registerUser,
    loginUser,
    getUser
}