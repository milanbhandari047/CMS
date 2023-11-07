import React, { useState } from "react";
import "./CreateBlog.css";
import Navbar from "../../component/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreateBlog = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [description, setDescription] = useState("");

  const createBlog = async (e) => {
    e.preventDefault();

    const data = {
      title: title,
      subTitle: subTitle,
      description: description,
    };
    const response = await axios.post("http://localhost:3000/blogs", data);
    if(response.status == 201){
        alert(response.data.message)
        navigate("/")
    }else{
        alert("Something went wrong")
    }
  };

  return (
    <>
      <Navbar />
      <div className="form-container">
        <h2>Create Blog</h2>
        <form onSubmit={createBlog}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Enter Title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="subtitle">Subtitle</label>
            <input
              type="text"
              id="subtitle"
              name="subtitle"
              placeholder="Enter Subtitle"
              onChange={(e) => setSubTitle(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              rows="8"
              placeholder="Enter Description"
              onChange={(e) => setDescription(e.target.value)}
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

export default CreateBlog;
