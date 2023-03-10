import React, { useState } from 'react';

import NavTabs from "./NavTabs";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("Home");

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    if (currentPage === "About") {
      return <About> </About>
    } 
    else if (currentPage === "Home") {
      return <Home> </Home>
    }
    else if (currentPage === "Blog") {
      return <Blog> </Blog>
    } 
    else {
      return <Contact> </Contact>
    } 
  }

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );

  // function changePage(currentPage) {
  //   if(this.state.currentPage === "About"){
  //     return About
  //   }
  // }
}


export default PortfolioContainer;
