import React from "react";
import "./style.css"
import Project from "../Project/project";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

import projects from "../../projects.json"

function ProjectGallery() {

    

    return(

        <section class="page-section work " id="myWork" >

      <h2>Work </h2>
      
      <div class="vertical"> </div>
      <section id="projectGrid">

        <div className="ProjectGallery">

<a href="project1"> {projects[0].title} </a>
<a href="project2"> {projects[1].title} </a>
<a href="project3"> {projects[2].title} </a>
<a href="project4"> {projects[3].title} </a>
<a href="project5"> {projects[4].title} </a>
<a href="project6"> {projects[5].title} </a>



{/* <div className="project 1">

<Project title = {projects[0].title} 
    image = {projects[0].image}
    repoLink = {projects[0].repoLink}
    deployLink = {projects[0].deployLink}/>

    </div>
    
<div className="project2">
    <Project title = {projects[1].title} 
    image = {projects[1].image}
    repoLink = {projects[1].repoLink}
    deployLink = {projects[1].deployLink}/>

</div>

<div className="project3">
<Project title = {projects[2].title} 
    image = {projects[2].image}
    repoLink = {projects[2].repoLink}
    deployLink = {projects[2].deployLink}/>
    </div>

<div className="project4">
<Project title = {projects[3].title} 
    image = {projects[3].image}
    repoLink = {projects[3].repoLink}
    deployLink = {projects[3].deployLink}/>

</div>

<div className="project5">
<Project title = {projects[4].title} 
    image = {projects[4].image}
    repoLink = {projects[4].repoLink}
    deployLink = {projects[4].deployLink}/>
    </div>

    <div className="project6">
<Project title = {projects[5].title} 
    image = {projects[5].image}
    repoLink = {projects[5].repoLink}
    deployLink = {projects[5].deployLink}/>
    </div> */}


</div>
</section>
</section>
    )
}

export default ProjectGallery;
