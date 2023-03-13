import React from "react";
import "./style.css"

function Project() {

    return(
        <div className="project"> 
        
        <div id="project1" className="projectGridArea">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title"> Prework Study Guide</h5>
            <p className="card-text"> A prework study guide designed for bootcamp. Click image to visit! </p>
          </div>
          <a href="https://exxtremebattler.github.io/prework-study-guide/"> 
            <img src="./images/pwsg.png" alt="project"></img></a>
        </div>
    </div>

    <div id="project5" className="projectGridArea">
          <div className="card">
            <img src="./images/02-portfolio-1.jpg" className="card-img-top" alt="project"></img>
            <div className="card-body">
              <h5 className="card-title"> Project 2</h5>
              <p className="card-text">desc</p>
              <a href="https://pomofocus.io/" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
          </div>

          <div id="project2" className="projectGridArea">
          
          <div className="card">
            <img src="./images/02-portfolio-1.jpg" className="card-img-top" alt="project"> </img>
            <div className="card-body">
              <h5 className="card-title">Project 3</h5>
              <p className="card-text">desc</p>
              <a href="https://pomofocus.io/" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        
        </div>
        
        <div id="project3" className="projectGridArea">
          
          <div className="card">
            <img src="./images/02-portfolio-1.jpg" className="card-img-top" alt="project"> </img>
            <div className="card-body">
              <h5 className="card-title">Project 4</h5>
              <p className="card-text">desc</p>
              <a href="https://pomofocus.io/" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>

        
        </div>
        
        <div id="project4" className="projectGridArea">
          
          <div className="card">
            <img src="./images/02-portfolio-1.jpg" className="card-img-top" alt="project"> </img>
            <div className="card-body">
              <h5 className="card-title">Project 5</h5>
              <p className="card-text">desc</p>
              <a href="https://pomofocus.io/" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        
        </div>
</div>
    )
}

export default Project;
