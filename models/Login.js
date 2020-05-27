const mongoose = require('mongoose')
const Schema = mongoose.Schema

const LoginSchema = Schema({

    email: {
        type:String,
        require:true
    },

    password: {
        type:Number,
        require:true
    }
})

module.exports = mongoose.model('Login', LoginSchema)