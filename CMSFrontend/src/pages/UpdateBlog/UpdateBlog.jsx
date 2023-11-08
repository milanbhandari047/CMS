import React, { useEffect, useState } from "react";
import Navbar from "../../component/Navbar/Navbar";
import "./UpdateBlog.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const UpdateBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate()
  const [blog, setBlog] = useState({});

  //handle change of the input
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setBlog({
      ...blog,
      [name]: value,
    });
  };


  const keyToExclude = ['createdAt','updateAt']
  keyToExclude.forEach((key)=>{
    delete blog[key]
  })

  // update blog 
  const updateBlog = async(e)=>{
    e.preventDefault()
    const response = await axios.patch("https://cmsbackend-n0ek.onrender.com"+id,blog)
    if(response.status == 200){
      navigate("/singleBlog/" + id)
  }
  }


  // FETCH SINGLE BLOG
  const fetchSingleBlog = async () => {
    const response = await axios.get("https://cmsbackend-n0ek.onrender.com" + id);
    if (response.status == 200) {
      setBlog(response.data.blogs);
    }
  };

  useEffect(() => {
    fetchSingleBlog();
  }, []);



  return (
    <>
      <Navbar />
      <div className="form-container">
        <h2>Update Blog</h2>
        <form onSubmit={updateBlog}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Enter Title"
              value={blog.title}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="subtitle">Subtitle</label>
            <input
              type="text"
              id="subtitle"
              name="subTitle"
              placeholder="Enter Subtitle"
              value={blog.subTitle}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              rows="4"
              placeholder="Enter Description"
              value={blog.description}
              onChange={handleChange}
            ></textarea>
          </div>
          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default UpdateBlog;
