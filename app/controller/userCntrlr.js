const User = require('../model/User')
const pick = require('lodash/pick')

module.exports.register = (req,res)=>{
    const body = req.body
    
    User.find({$or:[{username:body.username},{email:body.email}]})
        .then(data=>{
            console.log(data)
            if(data.length==0){
                const user = new User(body)
                user.save()
                    .then(data=>res.send({_id:data._id,username:data.username,email:data.email}))
                    .catch(err=>res.send(err))
                
            }else{
                res.send('username/email already exists')
            }
        })
    
}

module.exports.login=(req,res)=>{
    const body = req.body
   
    User.findByCredentials(body.username,body.email,body.password)
        .then(user=>{
            return user.generateToken()
            
        })
        .then(token=>{
            res.setHeader('x-auth',token)
            res.json({token})
        })
        .catch(err=>res.json({error:err}))
}

module.exports.account = (req,res)=>{
    const {user} = req
    res.send(pick(user,['_id','username','email']))
}

module.exports.logout = (req,res)=>{
    const {user,token} = req
    User.findByIdAndUpdate(user._id,{$pull:{tokens:{token:token}}})
        .then(()=>res.send({notice:'successfully logged out'}))
        .catch(err=>res.send(err))
}