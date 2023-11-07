import React from 'react'
import "./Navbar.css"
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className="navbar">
            <li><a onClick={()=>navigate("/")}>Home</a></li>
            <li><a  onClick={()=>navigate("/createBlog")}>CreateBlog</a></li>
           

        </div>
    </>
  )
}

export default Navbar
