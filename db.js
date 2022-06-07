const mongoose=require("mongoose");
require("dotenv").config()

const connect=async ()=>{
    try {
        await mongoose.connect(process.env.CONNECTION_STRING)
        console.log('we are connection tp mongo');
    } catch (error) {
        console.log("============================");
        console.log(error.message||error);
        console.log("============================");

    }
}
module.exports=connect