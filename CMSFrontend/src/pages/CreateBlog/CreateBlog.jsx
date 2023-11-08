import { useState } from "react";
import "./CreateBlog.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../../component/Navbar/Navbar";


const CreateBlog = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    title: "",
    subTitle: "",
    description: "",
  });

  const createBlog = async () => {
    e.preventDefault();
    // send above states data to api
 
await axios.post("https://cmsbackend-n0ek.onrender.com", data);
  
    navigate("/")

  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });




  };
  return (
    <>
    <Navbar/>
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

export default CreateBlog;


