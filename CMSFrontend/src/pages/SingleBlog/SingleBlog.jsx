import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Navbar from "../../component/Navbar/Navbar"

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
        console.log(response.data.blogs)
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
        <h1>{blog.title}</h1>
        <h3>{blog.subTitle}</h3>
        <p>{blog.description}</p>
        <button onClick={deleteBlog} className="card-button" >Delete</button>
    </>
  )
}

export default SingleBlog