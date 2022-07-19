import React, { useState, useEffect, useRef } from "react";
import "./Landing.css";
import Nobg from "../../assets/image/Nobg.png";
import Nobgwebp from "../../assets/image/Nobg.webp";
import img from "../../assets/image/Group 4 (1).png";
import imgwebp from "../../assets/image/Group 4 (1).webp";
import qr from "../../assets/image/qr-uthrive.jpeg";
import user from "../../assets/image/user-3-fill (1).svg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import whitebg from "../../assets/image/whitebg.png";
import whitebgwebp from "../../assets/image/whitebg.webp";
import { CopyToClipboard } from "react-copy-to-clipboard";

function Landing() {
  const [display, setdisplay] = useState("none");
  const [copied, setcopied] = useState(false);

  //change nav color on scrolling
  const [colour, setcolour] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setcolour(true);
    } else {
      setcolour(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  //for animations
  let pc = useRef();
  let home = useRef();
  let about = useRef();
  let courses = useRef();
  let reviews = useRef();

  useEffect(() => {
    if (document.location.hash === "#payment-contact") {
      setTimeout(() => {
        pc.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 300);
    }
    if (document.location.hash === "#home") {
      setTimeout(() => {
        home.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 300);
    }
    if (document.location.hash === "#courses") {
      setTimeout(() => {
        courses.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 300);
    }
    if (document.location.hash === "#reviews") {
      setTimeout(() => {
        reviews.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 300);
    }
    if (document.location.hash === "#about") {
      setTimeout(() => {
        about.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 300);
    }
  }, []);

  if (copied) {
    setTimeout(() => {
      setcopied(false);
    }, 1500);
  }
  return (
    <div className="container mt-4 landing">
      <nav
        className={
          colour
            ? "navbar sticky-top bg-light navbar-shadow"
            : "navbar sticky-top"
        }
      >
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
            <a href="#payment-contact">Payment & Contact</a>
          </div>
          <div className="nav-mobile">
            <i
              style={{ cursor: "pointer" }}
              onClick={() => setdisplay("flex")}
              className="ri-menu-3-line ham"
            ></i>
            <div style={{ display: display }} className="menu-links">
              <i
                style={{ cursor: "pointer" }}
                onClick={() => setdisplay("none")}
                className="ri-close-line"
              ></i>
              <a onClick={() => setdisplay("none")} href="#home">
                Home
              </a>
              <a onClick={() => setdisplay("none")} href="#courses">
                Our Courses
              </a>
              <a onClick={() => setdisplay("none")} href="#reviews">
                Reviews
              </a>
              <a onClick={() => setdisplay("none")} href="#about">
                About Us
              </a>
              {/* <a href="#payment">Payment</a> */}
              <a onClick={() => setdisplay("none")} href="#payment-contact">
                Payment & Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div className="container mt-5">
        <div className="top">
          <picture>
            <source srcSet={imgwebp} type="image/webp" />
            <img
              className="bodyimgmob"
              src={img}
              style={{ width: "23rem" }}
              alt=""
            />
            {/* Photo by <a href="https://unsplash.com/@icons8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Icons8 Team</a> on <a href="https://unsplash.com/s/photos/student?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a> */}
          </picture>
          <a
            ref={(e) => (home = e)}
            href="/"
            name="home"
            style={{ textDecoration: "none", color: "white" }}
          >
            <p className="fs-1">
              Invest in your <span style={{ color: "#F77E87" }}>future</span>{" "}
              with us. Brush up your skills,
              <br />
              prepare for your{" "}
              <span style={{ color: "#F77E87" }}>Career</span> with us.
            </p>
            <p>
              Join us at Uthrive and polish your skills with the <br />
              first class instructors.
            </p>
            <button
              type="button"
              className="btn-hover color-1"
              onClick={(e)=>{
                e.preventDefault();
                courses.scrollIntoView({ behavior: "smooth", block: "start" })
              }}
            >
              Get Started
            </button>
          </a>
          <picture>
            <source srcSet={imgwebp} type="image/webp" />
            <img
              className="bodyimg"
              src={img}
              style={{ width: "35rem" }}
              alt=""
            />
            {/* Photo by <a href="https://unsplash.com/@icons8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Icons8 Team</a> on <a href="https://unsplash.com/s/photos/student?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a> */}
          </picture>
        </div>
        <div className="our-courses">
          <a
            ref={(e) => (courses = e)}
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
              <a
                type="button"
                className="btn"
                href="https://forms.gle/kPGt3ETC58YDQTe38"
                style={{ textDecoration: "none", color: "#776DEB" }}
                target="_blank"
                rel="noreferrer"
              >
                Register Now
              </a>
            </div>
            <div className="course-card">
              <h4>Uthrive free webinars</h4>
              <p>
                We organise regular free webinars on Placement process, Company
                interviews and new skills to make you industry ready. Click here
                to register for a free webinar.
              </p>
              <a
                type="button"
                className="btn"
                href="https://forms.gle/XEvsD3HcZfLov5Rt8"
                style={{ textDecoration: "none", color: "#776DEB" }}
                target="_blank"
                rel="noreferrer"
              >
                Register Now
              </a>
            </div>
            <div className="course-card">
              <h4>Uthrive English Speaking Course</h4>
              <p>
                We have launched a special Conversational English speaking
                course for students and professionals of all age groups. Join
                our course and take a step towards being confident.
              </p>
              <a
                type="button"
                className="btn"
                href="https://forms.gle/HH63cVAsFiqkajES6"
                style={{ textDecoration: "none", color: "#776DEB" }}
                target="_blank"
                rel="noreferrer"
              >
                Register Now
              </a>
            </div>
            <div className="course-card">
              <h4>Uthrive Career Guidance Program</h4>
              <p>
                We provide free Career guidance to the students who are facing
                difficulty in decision making. It may be related to choosing the
                right college, course or anything else. We are here to help you.
              </p>
              <a
                type="button"
                className="btn"
                href="https://forms.gle/chf8Ec2tZYTJ2tJY8"
                style={{ textDecoration: "none", color: "#776DEB" }}
                target="_blank"
                rel="noreferrer"
              >
                Register Now
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="our-courses">
        <a
          ref={(e) => (reviews = e)}
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
          ref={(e) => (about = e)}
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
      <a
        href="/"
        name="payment-contact"
        style={{ textDecoration: "none", color: "#F77E87" }}
        ref={(e) => (pc = e)}
      >
        <div className="our-courses">
          <h2 style={{ textAlign: "center" }}>Scan the QR for payment</h2>
          <img src={qr} style={{ width: "10rem" }} alt="qr code" />
          <h5 style={{ textAlign: "center", color: "#323232" }}>OR</h5>
          <h5 style={{ textAlign: "center", color: "#323232" }}>
            Pay using UPI ID -{" "}
          </h5>
          <h6 style={{ textAlign: "center", color: "#323232" }}>
            7903654279@ybl
          </h6>
          <CopyToClipboard text="7903654279@ybl">
            <button
              className="mt-2"
              onClick={(e) => {
                e.preventDefault();
                setcopied(true);
              }}
              style={{
                display: "inline-block",
                textDecoration: "none",
                color: "#776DEB",
                border: "none",
                backgroundColor: "transparent",
                borderRadius: ".3rem",
              }}
            >
              <i className="ri-clipboard-fill fs-4"></i>
            </button>
          </CopyToClipboard>
          {copied ? (
            <div className="alert alert-success mt-2" role="alert">
              Copied!
            </div>
          ) : (
            ""
          )}
        </div>
      </a>
      <footer className="container p-3 bg-light text-secondary">
        <div className="footer-contains">
          <div className="smallsections">
            {/* <img
                style={{ width: "5rem" }}
                src={darkbg}
                alt="dark version logo"
              /> */}
            <picture>
              <source srcSet={whitebgwebp} type="image/webp" />
              <img src={whitebg} style={{ width: "6rem" }} alt="" />
            </picture>
          </div>
          <div className="smallsections">
            <h5 className="text-dark">Contact Us</h5>
            <p>Email:</p>
            <a
              style={{ textDecoration: "none", color: "#776DEB" }}
              href="mailto:publicrelations@uthrive.co.in"
            >
              publicrelations@uthrive.co.in
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
                href="https://instagram.com/uthrivecommunity?igshid=YmMyMTA2M2Y="
                target="_blank"
                rel="noreferrer"
              >
                <i className="ri-instagram-fill fs-4"></i>
              </a>
              <a
                style={{ textDecoration: "none", color: "#F77E87" }}
                href="https://wa.me/message/BH27LL7THYEDM1"
                target="_blank"
                rel="noreferrer"
              >
                <i className="ri-whatsapp-fill fs-4"></i>
              </a>
              <a
                style={{ textDecoration: "none", color: "#F77E87" }}
                href="https://www.linkedin.com/company/uthriveteam/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="ri-linkedin-box-fill fs-4"></i>
              </a>
              <a
                style={{ textDecoration: "none", color: "#F77E87" }}
                href="https://youtube.com/channel/UCxitV5r4YyxUjJcyaGQFl-w"
                target="_blank"
                rel="noreferrer"
              >
                <i className="ri-youtube-fill fs-4"></i>
              </a>
            </span>
          </div>
        </div>
        <hr />
        Copyright &copy; 2022, Uthrive. Website Created with ❤️ by{" "}
        <a
          className="text-secondary"
          href="https://www.linkedin.com/in/somya-1231/"
          target="_blank"
          rel="noreferrer"
        >
          Somya
        </a>
        . &nbsp;All rights reserved.
      </footer>
    </div>
  );
}

export default Landing;
