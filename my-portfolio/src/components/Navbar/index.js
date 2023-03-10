import React from "react";
import "./style.css"

function Navbar() {

    return(
        <div className="Navbar">
            <nav class="navbar navbar-expand-lg navbar-light bg-red">
    
    <a class="navbar-brand" href="#">ExxtremeBattler!</a>
    
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        
        <li class="nav-item active">
          <a class="nav-link" href="#aboutMe"> Skills <span class="sr-only">(current)</span></a>
        </li>
        
        <li class="nav-item active">
          <a class="nav-link" href="#myWork"> Work <span class="sr-only">(current)</span></a>
        </li>
        
        <li class="nav-item active">
          <a class="nav-link" href="#contactMe"> About/Contact Me <span class="sr-only">(current)</span></a>
        </li>
      
      </ul>
      
      <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"> </input>
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  
  </nav>
</div>
    )
}

export default Navbar;