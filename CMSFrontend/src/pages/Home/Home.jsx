import React from 'react'
import Navbar from '../../component/Navbar/Navbar'
import "./Home.css"
const Home = () => {
  return (
    <>
      <Navbar/>
    
      <div className="card">
      <div className="card-content">
        <h2 className="card-title">Beautiful Card</h2>
        <h3 className="card-subtitle">A Subtitle</h3>
        <p className="card-description">
          This is a beautiful card with a title, Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, harum quaerat sit vitae enim atque omnis, sint quod incidunt vel eos maiores distinctio ipsam repudiandae corrupti delectus unde optio autem. subtitle, description, and a button. You can add your content here.
        </p>
        <button className="card-button">Click Me</button>
      </div>
    </div>



    </>
  )
}

export default Home
