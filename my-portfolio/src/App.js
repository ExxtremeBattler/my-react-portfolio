import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Project from "./components/Project/project";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./components/About/index"
import ProjectGallery from "./components/ProjectGallery/projectGallery"
import Contact from "./components/Contact";
import projects from "./projects.json"

function App() {

  return( 
  
  <div>

    <Navbar />
    <Header />
    <About />
    <ProjectGallery />
    
  
    


<Contact></Contact> 
    
  </div>


  
  
        ) 
}

export default App;
