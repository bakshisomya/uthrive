import React, { useState } from "react";
import "./Landing.css";
import Nobg from "../../assets/image/Nobg.png";
import img from "../../assets/image/Group 7.png";
import shirley from "../../assets/image/shirley.jpg";
import theo from "../../assets/image/theo.jpg";
import daniel from "../../assets/image/daniel.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import darkbg from "../../assets/image/darkbg.png";

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
          <img
            className="bodyimg"
            src={img}
            style={{ width: "20rem" }}
            alt=""
          />
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
            <img src={shirley} alt="" />
            <div className="myCarousel">
              <h3>Shirley Fultz</h3>
              <h4>Designer</h4>
              <p>
                It's freeing to be able to catch up on customized news and not
                be distracted by a social media element on the same site
              </p>
            </div>
          </div>
          <div>
            <img src={daniel} alt="" />
            <div className="myCarousel">
              <h3>Daniel Keystone</h3>
              <h4>Designer</h4>
              <p>
                The simple and intuitive design makes it easy for me use. I
                highly recommend Fetch to my peers.
              </p>
            </div>
          </div>
          <div>
            <img src={theo} alt="" />
            <div className="myCarousel">
              <h3>Theo Sorel</h3>
              <h4>Designer</h4>
              <p>
                I enjoy catching up with Fetch on my laptop, or on my phone when
                I'm on the go!
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis iaculis,
          est vitae vulputate porttitor, ipsum felis porttitor purus, pulvinar
          cursus lorem mauris quis velit. Quisque condimentum lorem eu nunc
          tempus, ac viverra erat ullamcorper. Vivamus molestie sem vitae est
          lobortis, rhoncus pellentesque ligula auctor. Vivamus ut porttitor
          nisl, quis tincidunt nisi. Sed diam est, laoreet sit amet venenatis
          at, pulvinar eu sem. Phasellus eu diam quis ex ullamcorper dignissim.
          Etiam viverra sodales pellentesque. Ut orci sapien, molestie id dictum
          et, tincidunt et eros. Vivamus quis leo nec enim imperdiet aliquet.
          Phasellus dignissim volutpat tincidunt. Integer augue lorem, elementum
          sit amet accumsan id, sollicitudin id arcu. Sed vehicula congue arcu.
          Aenean mi eros, malesuada ut dapibus nec, venenatis tincidunt lectus.
          Vivamus sed scelerisque nibh, facilisis blandit lacus.
        </p>
      </div>
      <footer className="container p-3 bg-light text-secondary">
        <div className="footer-contains">
          <div className="smallsections">
            <a href="/" name="contact" style={{ textDecoration: "none" }}>
              <img
                style={{ width: "5rem" }}
                src={darkbg}
                alt="dark version logo"
              />
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
                <i class="ri-instagram-fill fs-4"></i>
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
