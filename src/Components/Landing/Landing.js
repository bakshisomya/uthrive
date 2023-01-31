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
import milestones from "../../assets/images/Group 58.png";

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
              <a href="#landing-base">Home</a>
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
              <a href="#testimonials">Reviews</a>
            </li>
            <li>
              <a href="https://forms.gle/apErTX3XAe9zEuAt7" target="_blank"
              rel="noreferrer">Payment</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
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
          <button>
            <a
              style={{ textDecoration: "none", color: "white" }}
              href="#courses"
            >
              Get Started
            </a>
          </button>
        </div>
        <div id="right">
          {/* <picture> */}
          {/* <source srcSet={landingwebp} type="image/webp" /> */}
          <img id="pic" src={landingimg} alt="" />
          {/* </picture> */}
        </div>
      </div>
      {/* achievements section */}
      <div id="achivmnts">
        <div id="textprt">
          <h1>Our Journey and <br/> Milestones</h1>
          <button>
            <a
              style={{ textDecoration: "none", color: "white" }}
              href="#courses"
            >
              Join Us
            </a>
          </button>
        </div>
        <div id="imgprt">
          <img src={milestones} alt="" />
        </div>
      </div>
      {/* our courses page */}
      <div id="courses">
        <img src={design2} id="design2" alt="" />
        <img src={design3} id="design3" alt="" />
        <h1>Our Courses</h1>
        <CourseCard />
      </div>
      {/* colleges section */}
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
              <a
                style={{ textDecoration: "none", color: "white" }}
                href="#collegecards"
              >
                {" "}
                Know More <i className="ri-arrow-down-line"></i>{" "}
              </a>
            </button>
          </div>
        </div>
        <div id="collegecards">
          <College />
        </div>
      </div>
      {/* reviews section  */}
      <div id="testimonials">
        <h1>What Our Students Say</h1>
        <img src={design2} id="design4" alt="" />
        <div id="review-card">
          <ReviewCard />
        </div>
      </div>
      {/* about section  */}
      <div id="about">
      <div id="underlay">
          <div id="overlay">
            <h1>
              About Us
            </h1>
            <p>
            Uthrive is one of its kind edtech platform founded on 10th January
            2021. In the last 18 months we have guided and helped more than 1500
            students excel in their career and get desired job roles in various
            companies. Our main goal is to provide students with access to
            highly affordable and Quality courses, and therefore, since our
            inception we have never launched any course which would cost more
            than Rs. 300. Our courses include Placement Preparation course, and
            English speaking course. Apart from these, we also organise regular
            free webinars for students of all age groups. Join us today and stay
            ahead of others in the race for Campus Placements.
            </p>
            </div>
            </div>
      </div>
      {/* footer section */}
      <footer id="contact">
        <div className="cols">
          <img id="futerlogo" src={footerlogo} alt="" />
          <p id="quote">
            A little progress each
            <br />
            day adds up to great results
          </p>
          <div id="follow-div">
            <img src={birdie} id="follow-bird" alt="" />
            <p className="custom-footer-styling" id="follow">
              Follow Us
            </p>
          </div>
          <div className="logos">
            <a
              href="https://instagram.com/uthrivecommunity?igshid=YmMyMTA2M2Y="
              target="_blank"
              rel="noreferrer"
            >
              <i className="ri-instagram-fill"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/uthriveteam/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="ri-linkedin-box-fill"></i>
            </a>
            <a
              href="https://wa.me/message/BH27LL7THYEDM1"
              target="_blank"
              rel="noreferrer"
            >
              <i className="ri-whatsapp-fill"></i>
            </a>
          </div>
        </div>
        <div className="cols">
          <div id="quicklinks-div">
            <img src={birdie} id="quicklinks-bird" alt="" />
            <p className="custom-footer-styling" id="quicklinks">
              Quick Links
            </p>
          </div>
          <div id="footer-links">
            <a href="#landing-base">Home</a>
            <a href="#courses">Our Courses</a>
            <a href="#testimonials">Reviews</a>
            <a href="#about">About</a>
            <a href="https://forms.gle/apErTX3XAe9zEuAt7" target="_blank"
              rel="noreferrer">Payment</a>
          </div>
        </div>
        <div className="cols">
          <div id="contact-us">
            <img src={birdie} id="contact-bird" alt="" />
            <p className="custom-footer-styling" id="contact">
              Contact Us
            </p>
          </div>
          <div id="contact-links">
            <a href="tel:+91-9031672504">
              <i className="ri-phone-fill"></i>&nbsp;+91 9031672504
            </a>
            <a href="mailto:publicrelations@uthrive.co.in">
              <i className="ri-mail-fill"></i>
              &nbsp;publicrelations@uthrive.co.in
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Landing;
