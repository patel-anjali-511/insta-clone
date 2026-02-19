const express = require('express')
const userModel = require('../models/user.model')
const crypto = require('crypto')
const authRouter = express.Router


authRouter.post('/register', async (req,res)=>{
    const {email,username,password,bio,profileImage} = req.body

    const isAlreadyUserExsits = await userModel.findOne({
        $or:[
            {username},
            {email}
        ]
    })
       
    if (isAlreadyUserExsits){
        return res.send(409).json({
            message: 'user already exsits' + isAlreadyUserExsits.email== 
            email? "email already exsists" : " username already exsits"

        })


    }
  const  hash = crypto.createHash('sha256').update(password).digest('hex')

  const user = await userModel.create({
    username,
    email,
    bio,
    profileImage,
    password : hash
  })
})