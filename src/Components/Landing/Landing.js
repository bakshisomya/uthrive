import React, { useState } from "react";
import "./Landing.css";
import Nobg from "../../assets/image/Nobg.png";
import img from "../../assets/image/Group 7.png";

function Landing() {
  const [display, setdisplay] = useState("none");
  return (
    <div className="container mt-4 landing">
      <nav className="navbar sticky-top bg-light navbar-shadow">
        <div className="container-fluid d-flex justify-content-between align-center">
          {/* <img src={whitebg} style={{width:'4rem'}} alt="" /> */}
          <img src={Nobg} style={{ width: "7rem" }} alt="" />
          <div className="links">
            <a href="#home">Home</a>
            <a href="#courses">Our Courses</a>
            <a href="#reviews">Reviews</a>
            <a href="#about">About Us</a>
            <a href="tel:+91-8210529561">Contact</a>
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
        <div className="top">
          <a
            href="/"
            name="home"
            style={{ textDecoration: "none", color: "white" }}
          >
            <p className="mt-5 fs-1">
              Want to learn Fluent English or <br />
              Want to ace in college placements? <br />
              Don't Worry. We have got you covered!
            </p>
            <p className="mt-5">
              Join us at Uthrive and polish your skills with the <br />
              first class instructors.
            </p>
          </a>
          <img className='bodyimg' src={img} style={{ width: "20rem" }} alt="" />
        </div>
        <a
          href="tel:+91-8210529561"
          className="mt-3 px-1 py-2"
          style={{
            display: "inline-block",
            textDecoration: "none",
            color: "#776DEB",
            border: "1px solid #776DEB",
            borderRadius: ".3rem",
          }}
        >
          Get Started
        </a>
        <div className="our-courses">
          <a
            href="/"
            name="courses"
            style={{ textDecoration: "none", color: "#F77E87" }}
          >
            <h2>Our Courses</h2>
          </a>
          <div id="courses-cards">
            <div className="course-card">
              <h4>Uthrive Placement Prep Course</h4>
              <p>
                Join our campus placment course and stay ahead of everyone in
                the race for high paying jobs.
              </p>
              <button
                type="button"
                className="btn"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "https://forms.gle/kPGt3ETC58YDQTe38";
                }}
              >
                Register Now
              </button>
            </div>
            <div className="course-card">
              <h4>Uthrive free webinars</h4>
              <p>
                We organise regulare free webinars on placement processes,
                interviews and new skills to make you industry ready. Click here
                to register for a free webinar.
              </p>
              <button
                type="button"
                className="btn"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "https://forms.gle/XEvsD3HcZfLov5Rt8";
                }}
              >
                Register Now
              </button>
            </div>
            <div className="course-card">
              <h4>Uthrive English Speaking Course</h4>
              <p>
                We have launched a special english speaking course for students
                and professionals of all age groups.
              </p>
              <button
                type="button"
                className="btn"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "https://forms.gle/HH63cVAsFiqkajES6";
                }}
              >
                Register Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <footer className="container p-3 bg-light text-secondary">
      Copyright &copy; 2020 Uthrive. All rights reserved.
      Website Created by <a className="text-secondary"href="https://www.linkedin.com/in/somya-1231/">Somya</a>
      </footer>
    </div>
  );
}

export default Landing;
