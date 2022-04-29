import React from 'react';


import About from "./pages/About"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Project from "./pages/Project" 
import Navbar from "./Components/navbar"
import Background from "./Components/Background"
import Skills from "./pages/Skills"

 
const App = () => {
  return (
    <div className="di">
      <Background/>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Project/>
      <Contact/>      
    </div>
    
    
      
      
  )
}

export default App