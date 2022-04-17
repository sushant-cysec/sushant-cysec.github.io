import React from 'react';
import {BrowserRouter as Router,Route
  ,Redirect,
  Switch

} from "react-router-dom";

import About from "./pages/About"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Project from "./pages/Project" 
import Navbar from "./Components/navbar"
import Background from "./Components/Background"

 
const App = () => {
  return (
    <div className="di">
      <Background/>
      <Navbar/>
      <Home/>
      
    </div>
    
    
      
      
  )
}

export default App