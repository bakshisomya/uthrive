import React, { useState } from "react";
import "./Landing.css";
import Nobg from "../../assets/image/Nobg.png";

function Landing() {
  const [display, setdisplay] = useState("none");
  return (
    <div className="container mt-4 landing">
      <nav className="navbar sticky-top">
        <div className="container-fluid d-flex justify-content-between align-center">
          {/* <img src={whitebg} style={{width:'4rem'}} alt="" /> */}
          <img src={Nobg} style={{ width: "7rem" }} alt="" />
          <div className="links">
            <a href="#home">Home</a>
            <a href="#courses">Our Courses</a>
            <a href="#reviews">Reviews</a>
            <a href="#about">About Us</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="nav-menu-icon">
            <i
              style={{ cursor: "pointer" }}
              onClick={() => setdisplay("flex")}
              className="ri-menu-3-line"
            ></i>
            <div style={{ display: display }} className="menu-links">
              <i
                style={{ cursor: "pointer" }}
                onClick={() => setdisplay("none")}
                className="ri-close-line"
              ></i>
              <a href="#home">Home</a>
              <a href="#courses">Our Courses</a>
              <a href="#reviews">Reviews</a>
              <a href="#about">About Us</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </div>
      </nav>
      <div className="container mt-5">
        <a
          href="/"
          name="home"
          style={{ textDecoration: "none", color: "white" }}
        >
          <h1 className="mt-5">
            Want to learn Fluent English or <br />
            Want to ace in college placements? <br />
            Don't Worry. We have got you covered!
          </h1>
          <h4 className="mt-5">
            Join us at Uthrive and polish your skills with the <br />
            first class instructors.
          </h4>
          <a href="tel:+91-8210529561" className="mt-3 px-1 py-2" style={{display : 'inline-block',textDecoration:'none',color:'#776DEB',border:'1px solid #776DEB',borderRadius:'.3rem'}}>Get Started</a>
        </a>
      </div>
    </div>
  );
}

export default Landing;
