import React, { useState } from "react";
import "./Landing.css";
import logo from "../../assets/images/Nobg.png";
import logowebp from "../../assets/images/Nobg.webp";
import landingimg from "../../assets/images/landing.png";
import design1 from "../../assets/images/Group 11.png";
import imgforphone from "../../assets/images/imgforphone.png";
import CourseCard from "../CourseCard/CourseCard";
import College from "../College/College";
import design2 from "../../assets/images/Design2.png"
import design3 from "../../assets/images/Group 40.png"

function Landing() {
  const [clicked, setclicked] = useState(false);

  return (
    <div id="base">
      {/* nav */}
      <nav>
        <a href="index.html">
          <picture>
            <source srcSet={logowebp} type="image/webp" />
            <img src={logo} style={{ width: "7rem" }} alt="" />
          </picture>
        </a>
        <div>
          <ul id="navbar" className={clicked ? "#navbar active" : "navbar"}>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#courses">Our Courses</a>
            </li>
            <li>
              <a href="#colleges">Colleges Covered</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#payment-contact">Payment and Contact</a>
            </li>
          </ul>
        </div>
        <div onClick={() => setclicked(!clicked)} id="mobile">
          <i
            id="bar"
            className={clicked ? "ri-close-fill" : "ri-menu-3-line"}
          ></i>
        </div>
      </nav>
      {/* landing page base div */}
      <div id="landing-base">
        <img id="design1" src={design1} alt="" />
        <div id="img-for-tabsnphones">
          <img id="pic-for-tabsnphones" src={imgforphone} alt="" />
        </div>
        <div id="left">
          <h1>
            Let us make it <br />
            possible together!
          </h1>
          <p>
            Join us at Uthrive and polish your skills with the <br />
            first class instructors.
          </p>
          <button>Get Started</button>
        </div>
        <div id="right">
          {/* <picture> */}
          {/* <source srcSet={landingwebp} type="image/webp" /> */}
          <img id="pic" src={landingimg} alt="" />
          {/* </picture> */}
        </div>
      </div>
      {/* our courses page */}
      <div id="courses">
      <img src={design2} id="design2" alt="" />
      <img src={design3} id="design3" alt="" />
        <h1>Our Courses</h1>
        <CourseCard/>
      </div>
      <div id="colleges">
      <div id="underlay">
      <div id="overlay">
        <h1>Colleges we have<br/>covered so far</h1>
        <p>We have organised serveral webinars and have provided multiple<br/>
placement prep courses in more than 20 colleges</p>
<button>Know More <i className="ri-arrow-down-line"></i></button>
      </div>
      </div>
      <College/>
      </div>
      <div id="testimonials">
        <img src={design2} id="design4" alt="" />
      </div>
    </div>
  );
}

export default Landing;
