import React, { useEffect, useState } from 'react'
import Navbar from '../../component/Navbar/Navbar'
import "./Home.css"
import axios  from "axios"

const Home = () => {

const[blogs , setBlogs] =useState([])
  // api call here
  const fetchBlogs = async()=>{
    const response = await axios.get("http://localhost:3000/blogs")
    setBlogs(response.data.blogs)

  }


  useEffect(()=>{
  fetchBlogs()
  },[])

  return (
    <>
      <Navbar/>
    
  
      <div className="card">
      {blogs.map((blogs)=>{
        return(
   
      <div key={blogs._id} className="card-content">
        <h2 className="card-title">{blogs.title}</h2>
        <h3 className="card-subtitle">{blogs.subTitle}</h3>
        <p className="card-description">
           {blogs.description} </p>
        <button className="card-button">Click Me</button>
      </div>
   
        )
      })}
        </div>






    </>
  )
}

export default Home
