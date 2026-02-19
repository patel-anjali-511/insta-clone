
const Mongoose = require('mongoose')

const userSchema= new mongoose.Schema({

    username:{
        type:String,
        unique:[true, 'username already exists'],
        required:[true, 'username is required']
    },
     email:{
        type:String,
        unique:[true, 'email already exists'],
        required:[true, 'email is required']
    },

     password:{
        type:String,
        unique:[true, 'password already exists'],
        required:[true, 'password is required']
    },
    bio:String,

    profileImage:{
        type:String,
        default:'https://ik.imagekit.io/qcmagjm7f/download.png'
    }
     
})

const userModel = mongoose.model('users', userSchema)

module.exports = userModel