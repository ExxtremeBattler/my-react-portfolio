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

    <p> {projects[0].title}</p>
    

    <Project title = {projects[0].title} 
    image = {projects[0].image}
    repoLink = {projects[0].repoLink}
    deployLink = {projects[0].deployLink}/>
    
  </div>

    // {/* <Project 
    // title = {projects.title[0]}
    // image = {projects.image[0]}
    // deployLink = {projects.deployLink[0]}
    // repoLink = {projects.repoLink[0]}/> */}

    // {/* <Navbar></Navbar>
    // <Header />
    // <About />

    

    // <ProjectGallery> </ProjectGallery>
    // <Contact></Contact> */}
  
  
  
        ) 
}

export default App;
