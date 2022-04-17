import React from 'react'
import SusPhoto from "./SusPhoto"
import Background from "../Components/Background"
import "./Home.css"
import logo from "../assets/Cool-Text-406986722450007.png"



const Home = () => {
  return (<>
    
    <div className='bg-home'>
      <div className="home-text">
      <span>Hy! I Am </span>
      <span><img src={logo} alt="logo"/></span>
      <span>I am A Software Engineeer Specializing in building and designing Exceptional Digital Experiences</span>
      </div>
      
 
    </div>
    <div className="home-about">
    <SusPhoto/>
    
  </div>
  </>
  )
}

export default Home