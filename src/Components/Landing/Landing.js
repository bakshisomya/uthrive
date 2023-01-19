import React, { useState } from "react";
import "./Landing.css";
import logo from "../../assets/images/Nobg.png";
import logowebp from "../../assets/images/Nobg.webp";
import landingimg from "../../assets/images/landing.png";
import design1 from "../../assets/images/Group 11.png";

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
          <img id="pic-for-tabsnphones" src={landingimg} alt="" />
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
    </div>
  );
}

export default Landing;
