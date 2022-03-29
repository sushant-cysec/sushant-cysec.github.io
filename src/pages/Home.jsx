import React from 'react';
import SusPhoto from "./SusPhoto"
import Background from "../Components/Background"
import "./Home.css"



const Home = () => {
  return (
    
    <div className='bg-home'>
      <SusPhoto/>
      <Background/>
      
    </div>
  )
}

export default Home