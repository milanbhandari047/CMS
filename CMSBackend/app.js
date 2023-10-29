const { connectDatabase } = require("./database/database");
const Blog = require("./model/blogModel");

const express = require("express");
const app = express();

//nodejs lai form batw aako data parse gar vaneko ho
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database Connection Function
connectDatabase();

//GET API
app.get("/", (req, res) => {
  res.json({
    status: 200,
    message: "Success",
  });
});

//GET API => /blogs(All blogs)
app.get("/blogs", async (req, res) => {
  // fetching/reading all BLogs from BLog model
  const blogs = await Blog.find();
  //check if blogs contains data or not
  if (blogs.length == 0) {
    res.json({
      // status:404,
      message: "Empty BLog",
    });
  } else {
    res.json({
      // status:200,
      message: "Blogs fetch successfully",
      data: blogs,
    });
  }
});

//GET API => /blogs/:id (single blog)
app.get("/blogs/:id", async (req, res) => {
  const id = req.params.id;
  const blog = await Blog.find({ _id: id });
  //Alternative
  //  const blog = await Blog.findById(id)

  if (blog.length == 0) {
    res.status(404).json({
      message: "NO blogs found with that id",
    });
  } else {
    res.json({
      status: 200,
      message: "Blog fetched successfully",
      data: blog,
    });
  }
});

//CREATE BLOG API
app.post("/createBlog", async (req, res) => {
  //Insert to database logic goes here

  await Blog.create({
    title: req.body.title,
    subTitle: req.body.subTitle,
    description: req.body.description,
  });

  res.json({
    status: 200,
    message: "Blog created successfully",
  });
});

app.listen(3000, () => {
  console.log("Nodejs has started aat port 3000");
});
