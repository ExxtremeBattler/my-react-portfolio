import React from "react";
import "./style.css"

function Project() {

    return(
        <div className="project"> 
        
        <div id="project1" class="projectGridArea">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title"> Prework Study Guide</h5>
            <p class="card-text"> A prework study guide designed for bootcamp. Click image to visit! </p>
          </div>
          <a href="https://exxtremebattler.github.io/prework-study-guide/"> 
            <img src="./images/pwsg.png" ></img></a>
        </div>
    </div>

    <div id="project5" class="projectGridArea">
          <div class="card">
            <img src="./images/02-portfolio-1.jpg" class="card-img-top" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title"> Project 2</h5>
              <p class="card-text">desc</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
          </div>

          <div id="project2" class="projectGridArea">
          
          <div class="card">
            <img src="./images/02-portfolio-1.jpg" class="card-img-top" alt="..."> </img>
            <div class="card-body">
              <h5 class="card-title">Project 3</h5>
              <p class="card-text">desc</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        
        </div>
        
        <div id="project3" class="projectGridArea">
          
          <div class="card">
            <img src="./images/02-portfolio-1.jpg" class="card-img-top" alt="..."> </img>
            <div class="card-body">
              <h5 class="card-title">Project 4</h5>
              <p class="card-text">desc</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>

        
        </div>
        
        <div id="project4" class="projectGridArea">
          
          <div class="card">
            <img src="./images/02-portfolio-1.jpg" class="card-img-top" alt="..."> </img>
            <div class="card-body">
              <h5 class="card-title">Project 5</h5>
              <p class="card-text">desc</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        
        </div>
</div>
    )
}

export default Project;
