const { connect } = require("mongoose")

const 
    express=require("express"),
    app=express()
    PORT=3401;
    require("./db")();
   
    
app.use(express.json())
app.use("/products",require("./ROUTER/routerProducts"))
app.use("/categories",require("./ROUTER/routerCatgories"))




app.listen(PORT,()=>console.log(`server is runing on port ${PORT}`))