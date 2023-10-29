const { connectDatabase } = require("./database/database");
const Blog = require("./model/blogModel");

const express = require("express")
const app = express()

//nodejs lai form batw aako data parse gar vaneko ho
app.use(express.json());
app.use(express.urlencoded({extended:true}))

// Database Connection Function
connectDatabase()


//GET API
app.get("/",(req,res)=>{
    res.json({
        status:200,
        message:"Success"
    })
})


//CREATE BLOG API
app.post("/createBlog",async(req,res)=>{
// console.log(req.body)

//Insert to database logic goes here

await Blog.create({
    title:req.body.title,
    subTitle:req.body.subTitle,
    description:req.body.description
})

    res.json({
        status:200,
        message:"Blog created successfully"
    })
})




app.listen(3000,()=>{
    console.log("Nodejs has started aat port 3000")
})