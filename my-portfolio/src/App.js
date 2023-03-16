import React from "react";
import Project from "./components/Project/project";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./components/About/index"
import ProjectGallery from "./components/ProjectGallery/projectGallery"
import Contact from "./components/Contact";

function App() {
  return( <div>


    <Navbar></Navbar>
    <Header />
    <About />
    <Project></Project>
    <ProjectGallery> </ProjectGallery>
    <Contact></Contact>
  
  </div>
  
        ) 
}

export default App;
