const { connectDatabase } = require("./database/database");

const app = require("express")();

// Database Connection Function
connectDatabase()


//GET API
app.get("/",(req,res)=>{
    res.json({
        status:200,
        message:"Success"
    })
})



app.listen(3000,()=>{
    console.log("Nodejs has started aat port 3000")
})