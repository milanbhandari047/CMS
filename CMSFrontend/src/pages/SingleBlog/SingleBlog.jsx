import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import Navbar from "../../component/Navbar/Navbar"
import "./SingleBlog.css"

const SingleBlog = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    const [blog,setBlog] = useState({})
    // DELETE BLOG
    const deleteBlog = async ()=>{
       const response =  await axios.delete("http://localhost:3000/blogs/" + id)
       if(response.status ==200){
        navigate("/")
       }
    }

    // FETCH SINGLE BLOG 
    const fetchSingleBlog = async()=>{
        const response = await axios.get("http://localhost:3000/blogs/" + id)
      
        if(response.status ==200){
            setBlog(response.data.blogs)
        }
    }

    useEffect(()=>{
        fetchSingleBlog();

    },[])
    
  
  return (
    <>
      <Navbar/>
      <div className="card">
<div key={blog._id} className="card-content">
              <h2 className="card-title">{blog.title}</h2>
              <h3 className="card-subtitle">{blog.subTitle}</h3>
              <p className="card-description">{blog.description} </p>
        <button onClick={deleteBlog} className="card-button" >Delete</button>
        <Link to={`/updateBlog/${blog._id}`}   className="card-button">Update</Link>
        </div>
         </div>
</>
  )
}

export default SingleBlog