const mongoose=require("mongoose")

const productsSchema=new mongoose.Schema({
    id:{type: Number,required:true},
    title:{type: String},
    price:{type: Number, required:true},
    description:{type:String},
    category:{type:String,required:true},
    Image:{type:String},
    rating:{
        rate:{type:Number},
        count:{type:Number}
    },
    isActive:{type:Boolean,default:true}
})

module.exports=new mongoose.model("products",productsSchema)