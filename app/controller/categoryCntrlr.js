const Category = require('../model/Category');

module.exports.list = (req,res)=>{
    Category.find()
        .then((category)=>{res.json(category)})
        .catch(err=>res.json(err))
}


module.exports.create = (req,res)=>{
    const body = req.body
    const category = new Category(body)
    category.user = req.user._id
    category.save()
        .then((category)=>{res.json(category)})
        .catch(err=>res.json(err))
}

// module.exports.delete = (req,res)=>{
//     const id = req.params.id
//     Category.findOneAndDelete({_id:id, user:req.user._id})
//         .then(data=>res.send(data))
//         .catch(err=>res.send(err))
// }