const mongoose = require('mongoose')
const Schema = mongoose.Schema
const validator = require('validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const pick = require('lodash/pick')

const userSchema = new Schema({
  username:{
    type:String,
    minlength:5,
    required:true,
    unique:true
  },
  email:{
    type:String,
    required:true,
    unique:true,
    validate:{
      validator:(value)=>validator.isEmail(value),
      message:'Invalid Email'
    }
  },
  password:{
    type:String,
    required:true
  },
  tokens:[
    {
      token:{
        type:String,
        required:true
      },
      createdAt:{
        type:Date,
        default:Date.now
      }
    }
  ]
 
})

//bcrypt pswd
userSchema.pre('save',function(next){
  const user = this
  if(user.isNew){
    bcrypt.genSalt(10)
    .then(salt=>{
      bcrypt.hash(user.password,salt)
        .then(encryptedPswd=>{
          user.password=encryptedPswd
          next()
        })
        .catch(err=>res.send(err))
    })
  }else{
    next()
  }
})

userSchema.statics.findByCredentials=function(username,email,password){
  const User = this
  
  return User.findOne({username,email})
        .then(user=>{
            if(!user){
                return Promise.reject('Invalid email / password')
            }
            return bcrypt.compare(password,user.password)
                .then(data=>{
                    if(data){
                        return Promise.resolve(user)
                    }else{
                      return Promise.reject('Invalid email / password')
                    }

                })
        })
        .catch(err=>Promise.reject(err))
}

userSchema.methods.generateToken=function(){
  const user = this
  const tokenData = {
    _id:user.id,
    username:user.name,
    createdAt:Number(new Date())
  }
  const secretKey = 'jwt@123'
  const token = jwt.sign(tokenData,secretKey)
  user.tokens.push({token})

  return user.save()
    .then(user=>Promise.resolve(token))
    .catch(err=>Promise.reject(err))
}

userSchema.statics.findByToken=function(token){
  const User = this
  let tokenData
  try{
    tokenData = jwt.verify(token,'jwt@123')

  }catch(err){
    return Promise.reject(err)
  }
  return User.findOne({
    _id:tokenData._id,
    'tokens.token':token
  })
    
}

const User = mongoose.model('User',userSchema)

module.exports = User