const mongoose=require("mongoose")

const categoriesSchema=new mongoose.Schema({
       name:{type:String},
       isActive:{type:Boolean,default:true}    
})


module.exports=new mongoose.model("categories",categoriesSchema)