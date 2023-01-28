import React, { useState } from "react";
import "./Landing.css";
import logo from "../../assets/images/Nobg.png";
import logowebp from "../../assets/images/Nobg.webp";
import landingimg from "../../assets/images/landing.png";
import design1 from "../../assets/images/Group 11.png";
import imgforphone from "../../assets/images/imgforphone.png";
import CourseCard from "../CourseCard/CourseCard";
import College from "../College/College";
import design2 from "../../assets/images/Design2.png";
import design3 from "../../assets/images/Group 40.png";
import ReviewCard from "../ReviewCard/ReviewCard";
import footerlogo from "../../assets/images/Ellipse 14.png";
import birdie from "../../assets/images/Vector 27.png";

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
        <CourseCard />
      </div>
      <div id="colleges">
        <div id="underlay">
          <div id="overlay">
            <h1>
              Colleges we have
              <br />
              covered so far
            </h1>
            <p>
              We have organised serveral webinars and have provided multiple
              <br />
              placement prep courses in more than 20 colleges
            </p>
            <button>
              Know More <i className="ri-arrow-down-line"></i>
            </button>
          </div>
        </div>
        <College />
      </div>
      <div id="testimonials">
        <h1>What Our Students Say</h1>
        <img src={design2} id="design4" alt="" />
        <div id="review-card">
          <ReviewCard />
        </div>
      </div>
      <footer>
        <div className="cols">
          <img id="futerlogo" src={footerlogo} alt="" />
          <p id="quote">
            A little progress each
            <br />
            day adds up to great results
          </p>
          <div id="follow-div">
          <img src={birdie} id="follow-bird" alt="" />
          <p className="custom-footer-styling" id="follow">Follow Us</p>
          </div>
          <div className="logos">
            <a href="#home"><i className="ri-facebook-circle-fill"></i></a>
            <a href="#home"><i className="ri-instagram-fill"></i></a>
            <a href="#home"><i className="ri-linkedin-box-fill"></i></a>
            <a href="#home"><i className="ri-whatsapp-fill"></i></a>
          </div>
        </div>
        <div className="cols">
        <div id="quicklinks-div">
          <img src={birdie} id="quicklinks-bird" alt="" />
          <p className="custom-footer-styling" id="quicklinks">Quick Links</p>
          </div>
          <div id="footer-links">
          <a href="#home">Home</a>
            <a href="#home">Our Courses</a>
            <a href="#home">Reviews</a>
            <a href="#home">About</a>
          </div>
        </div>
        <div className="cols">
          <div id="contact-us">
          <img src={birdie} id="contact-bird" alt="" />
          <p className="custom-footer-styling" id="contact">Contact Us</p>
          </div>
          <div id="contact-links">
          <a href="#home"><i className="ri-phone-fill"></i>&nbsp;+91 9847292829</a>
            <a href="#home"><i className="ri-mail-fill"></i>&nbsp;publicrelations@uthrive.co.in</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Landing;
