import React from "react";
import "./NavBar.css";
import Logo from "../../../Assets/NavbarImages/WCTDLogo.jpg";
import Vector from "../../../Assets/NavbarImages/Vector.jpg";


function NavBar() {

  
  return (
    <div className="navbar" >
    <a href="/"><img src={Logo} className="brand-title" alt="wctd" /></a>
      <a href="/" className="toggle-button">
         <span className="bar"></span>
         <span className="bar"></span>
         <span className="bar"></span>
         </a>
      <div className="dropdown" id="navbar-links">
        <ul>
      <li className="navbarLi"><a href="/about" className="navbarText">About</a></li>
        <div className="dropdown-content">
          <a href="/about">About Us</a>
          <a href="/about/team">Our Team</a>
          <a href="/about/blog">Blog</a>
          <a href="/about/nebula">Affliated Organization</a>
        </div>
        </ul>
      </div>
      <div className="dropdown" id="navbar-links">
        <ul>
      <li className="navbarLi"><a href="/Programs" className="navbarText">Programs</a></li>
        <div className="dropdown-content">
          <a href="/Programs/code2021">Code-a-Thon 2021</a>
          <a href="/Programs/codingProgram">Coding Programs</a>
          
          <a href="/Programs/creatingSTEAM">CreatingSTEAM</a>
          
        </div>
        </ul>
      </div>
      <ul id="navbar-links">
        <li className="navbarLi"><a href="/news/nasdaq" className="navbarText">News</a></li>
      </ul>
      <div className="dropdown" id="navbar-links">
        <ul id="navbar-links">
          <li className="navbarLi"><a href="/getinvolved" className="navbarText voluSubMenu">Get Involved</a></li>
          <div className="dropdown-content">
            <a href="/getinvolved/becomesponsor">Become a Sponsor</a>
            <a href="/UnderConstruction">Fund a Scholarship</a>
            <a href="/UnderConstruction">Donate</a>
            <a href="/supportUs/volunteer/student" className="subTarget" id="volunteerMenu">Volunteer
            
            <ul id="subMenu">
              <li className="volunteerSubMenu"><a href="/UnderConstruction" >General Opportunities</a></li>
              <li className="volunteerSubMenu"><a href="/getinvolved/volunteer/student" >Student Opportunities</a></li>
            </ul>
            </a>

          </div>
        </ul>
      </div>
      <ul id="navbar-links">
      <li className="navbarLi"><a href="/ContactUs" className="navbarText">Contact Us</a></li>
      </ul>
      <ul id="navbar-links">
     <li><a href="/supportUs/donate" className="navbarText" id="donateColor">Donate</a></li>
     </ul>
     <ul id="navbar-links">
      <a href="/"><img src={Vector} className="vector" alt="placeHolder" /></a>
      </ul>
     </div>
  );
}

export default NavBar;

