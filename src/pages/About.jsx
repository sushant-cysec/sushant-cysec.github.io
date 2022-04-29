import React from 'react'
import SusPhoto from "./SusPhoto"

import "./Home.css"



const About = () => {
  return (
<div className = "home-about" > <div className="center-part">
<span>ABOUT</span>
  </div>
  <div className="contains">
    <div className="left-part">
    <h3> I am sushant sharma, currently pursuing B.Tech from ABESIT
    institute of technology,ghaziabad. I love <span>Designing</span> and <span>Developing</span> things that are available on the INTERNET with a Great <span>Analizing Efficiency</span>.
    </h3>
    </div>
    <div className = "right-part" > <SusPhoto/> </div>
  </div>
   
   
  </div> 
 
  )
}

export default About