const mongoose = require('mongoose')
const Schema = mongoose.Schema

const categorySchema = new Schema({
    name:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:new Date()
    },
    user:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:'User'
    }
})

const Category = mongoose.model('Category',categorySchema)

module.exports = Category 