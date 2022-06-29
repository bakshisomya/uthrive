import React, { useState } from "react";
import "./Landing.css";
import Nobg from "../../assets/image/Nobg.png";
import Nobgwebp from "../../assets/image/Nobg.webp";
import img from "../../assets/image/Group 7.png";
import imgwebp from "../../assets/image/Group7.webp";
import user from "../../assets/image/user-3-fill (1).svg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import darkbg from "../../assets/image/darkbg.png";
import darkbgwebp from "../../assets/image/darkbg.webp";

function Landing() {
  const [display, setdisplay] = useState("none");
  return (
    <div className="container mt-4 landing">
      <nav className="navbar sticky-top bg-light navbar-shadow">
        <div className="container-fluid d-flex justify-content-between align-center">
          {/* <img src={whitebg} style={{width:'4rem'}} alt="" /> */}
          <picture>
            <source srcSet={Nobgwebp} type="image/webp" />
            <img src={Nobg} style={{ width: "7rem" }} alt="" />
          </picture>
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
          <picture>
            <source srcSet={imgwebp} type="image/webp" />
            <img
              className="bodyimg"
              src={img}
              style={{ width: "20rem" }}
              alt=""
            />
          </picture>
        </div>
        <a
          href="tel:+91-9031672504"
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
                This course consists of Technical and HR interview classes, Mock
                interview sessions, Resume making session, Soft skills sessions,
                GD session, company specific sessions and much more. Join us
                today.
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
                We organise regular free webinars on Placement process, Company
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
                We have launched a special Conversational English speaking
                course for students and professionals of all age groups. Join
                our course and take a step towards being confident.
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
            <div className="course-card">
              <h4>Uthrive Career Guidance Program</h4>
              <p>
                We provide free Career guidance to the students who are facing
                difficulty in decision making. It may be related to choosing the
                right college, course or anything else. We are here to help you.
              </p>
              <button
                type="button"
                className="btn"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "https://forms.gle/chf8Ec2tZYTJ2tJY8";
                }}
              >
                Register Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="our-courses">
        <a
          href="/"
          name="reviews"
          style={{ textDecoration: "none", color: "#F77E87" }}
        >
          <h2>Reviews</h2>
        </a>
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={6100}
        >
          <div>
            <img src={user} alt="" />
            <div className="myCarousel">
              <h3>Biman Das</h3>
              <h4>Kolkata</h4>
              <p>
                I have been attending Uthrive English speaking classes for the
                last three months and I love its completely stress-free
                environment.
              </p>
            </div>
          </div>
          <div>
            <img src={user} alt="" />
            <div className="myCarousel">
              <h3>Sulagna Bose</h3>
              <h4>Kolkata</h4>
              <p>
                The Placement course is very wisely designed. Interview sessions
                and GD sessions really helped me in boosting my confidence.
              </p>
            </div>
          </div>
          <div>
            <img src={user} alt="" />
            <div className="myCarousel">
              <h3>Soumyadeep Sikder</h3>
              <h4>Kolkata</h4>
              <p>
                In my opinion, Uthrive is one of the best platforms for spoken
                English. Their style is unique and Instructors are very
                friendly.
              </p>
            </div>
          </div>
          <div>
            <img src={user} alt="" />
            <div className="myCarousel">
              <h3>Kushagradhy Saha</h3>
              <h4>Bhopal</h4>
              <p>
                Uthrive’s Placement preparation course is just awesome. I learnt
                a lot of new things about Campus placements.
              </p>
            </div>
          </div>
        </Carousel>
      </div>
      <div className="our-courses">
        <a
          href="/"
          name="about"
          style={{ textDecoration: "none", color: "#F77E87" }}
        >
          <h2>About Us</h2>
        </a>
        <p>
          Uthrive is one of its kind edtech platform founded on 10th January
          2021. In the last 18 months we have guided and helped more than 1500
          students excel in their career and get desired job roles in various
          companies. Our main goal is to provide students with access to highly
          affordable and Quality courses, and therefore, since our inception we
          have never launched any course which would cost more than Rs. 300. Our
          courses include Placement Preparation course, and English speaking
          course. Apart from these, we also organise regular free webinars for
          students of all age groups. Join us today and stay ahead of others in
          the race for Campus Placements.
        </p>
      </div>
      <footer className="container p-3 bg-light text-secondary">
        <div className="footer-contains">
          <div className="smallsections">
            <a href="/" name="contact" style={{ textDecoration: "none" }}>
              <picture>
                <source srcSet={darkbgwebp} type="image/webp" />
                <img
                  src={darkbg}
                  style={{ width: "5rem" }}
                  alt="dark version logo"
                />
              </picture>
            </a>
          </div>
          <div className="smallsections">
            <h5 className="text-dark">Contact Us</h5>
            <p>Email:</p>
            <a
              style={{ textDecoration: "none", color: "#776DEB" }}
              href="mailto:uthriveinfo@gmail.com"
            >
              uthriveinfo@gmail.com
            </a>
            <p>Phone:</p>
            <a
              style={{ textDecoration: "none", color: "#776DEB" }}
              href="tel:+91-9031672504"
            >
              +91 9031672504
            </a>
          </div>
          <div className="smallsections">
            <h5 className="text-dark">Social Links</h5>
            <span className="social">
              <a
                style={{ textDecoration: "none", color: "#F77E87" }}
                href="https://instagram.com/fluentindiawebinars?igshid=YmMyMTA2M2Y="
              >
                <i className="ri-instagram-fill fs-4"></i>
              </a>
              <a
                style={{ textDecoration: "none", color: "#F77E87" }}
                href="https://chat.whatsapp.com/EAAaFQblirf5D5b0UBrols"
              >
                <i className="ri-whatsapp-fill fs-4"></i>
              </a>
            </span>
          </div>
        </div>
        <hr />
        Copyright &copy; 2022, Uthrive. Website Created with ❤️ by{" "}
        <a
          className="text-secondary"
          href="https://www.linkedin.com/in/somya-1231/"
        >
          Somya
        </a>
        . &nbsp;All rights reserved.
      </footer>
    </div>
  );
}

export default Landing;
