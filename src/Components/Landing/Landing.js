import React, { useState, useEffect, useRef } from "react";
import "./Landing.css";
import Nobg from "../../assets/image/Nobg.png";
import Nobgwebp from "../../assets/image/Nobg.webp";
import img from "../../assets/image/Group 7.png";
import imgwebp from "../../assets/image/Group7.webp";
import college1 from "../../assets/image/college.png";
import college1webp from "../../assets/image/college.webp";
import ourcourses from "../../assets/image/ourcourses.png";
import ourcourseswebp from "../../assets/image/ourcourses.webp";
import qr from "../../assets/image/qr-uthrive.jpeg";
import user from "../../assets/image/user-3-fill (1).png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import whitebg from "../../assets/image/whitebg.png";
import whitebgwebp from "../../assets/image/whitebg.webp";
import { CopyToClipboard } from "react-copy-to-clipboard";

function Landing() {
  // const [display, setdisplay] = useState("none");
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
  let colleges = useRef();
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
    if (document.location.hash === "#colleges") {
      setTimeout(() => {
        colleges.scrollIntoView({ behavior: "smooth", block: "start" });
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
    <div className="pt-4 landing">
      <nav
        className={
          colour
            ? "navbar navbar-expand-lg px-lg-5 sticky-top bg-light navbar-shadow"
            : "navbar navbar-expand-lg px-lg-5 sticky-top"
        }
      >
        <div className="container">
          <picture>
            <source srcSet={Nobgwebp} type="image/webp" />
            <img src={Nobg} style={{ width: "7rem" }} alt="" />
          </picture>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav w-100 justify-content-end links">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#courses"
                >
                  Our Courses
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#colleges"
                >
                  Colleges Covered
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#reviews"
                >
                  Reviews
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#about"
                >
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#payment-contact"
                >
                  Payment & Contact
                </a>
              </li>
            </ul>
          </div>
          {/* mobile version of nav
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
          <a href="#payment">Payment</a>
          <a onClick={() => setdisplay("none")} href="#payment-contact">
                Payment & Contact
              </a>
            </div>
        </div> */}
        </div>
      </nav>
      <div className="container overlay">
        <div className="container mt-5">
          <div className="top text-center text-lg-start">
            <picture>
              <source srcSet={imgwebp} type="image/webp" />
              <img
                className="bodyimgmob"
                src={img}
                style={{ width: "17rem" }}
                alt=""
              />
            </picture>
            <a
              ref={(e) => (home = e)}
              href="/"
              name="home"
              style={{ textDecoration: "none", color: "white" }}
            >
              <p className="fs-1 mt-5">
                Invest in your <span style={{ color: "#F77E87" }}>future</span>{" "}
                with us. Brush up your skills,
                <br />
                prepare for your{" "}
                <span style={{ color: "#F77E87" }}>Career.</span>
              </p>
              <p>
                Join us at Uthrive and polish your skills with the <br />
                first class instructors.
              </p>
              <button
                type="button"
                className="btn-hover color-1 mt-3"
                onClick={(e) => {
                  e.preventDefault();
                  courses.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
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
                style={{ width: "25rem" }}
                alt=""
              />
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
            <picture>
              <source srcSet={ourcourseswebp} type="image/webp" />
              <img src={ourcourses} style={{ width: "26rem" }} alt="" />
            </picture>
            <div id="courses-cards">
              <div className="course-card">
                <h4>Uthrive Placement Prep Course</h4>
                <p style={{ textAlign: "justify", textJustify: "inter-word" }}>
                  This course consists of Technical and HR interview classes,
                  Mock interview sessions, Resume making session, Soft skills
                  sessions, GD session, company specific sessions and much more.
                  Join us today.
                </p>
                <a
                  type="button"
                  className="btn"
                  href="https://forms.gle/qRNZwmuEnB6ixF6x5"
                  style={{ textDecoration: "none", color: "#776DEB" }}
                  target="_blank"
                  rel="noreferrer"
                >
                  Register Now
                </a>
              </div>
              <div className="course-card">
                <h4>Uthrive free webinars</h4>
                <p style={{ textAlign: "justify", textJustify: "inter-word" }}>
                  We organise regular free webinars on Placement process,
                  Company interviews and new skills to make you industry ready.
                  Click here to register for a free webinar.
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
                <p style={{ textAlign: "justify", textJustify: "inter-word" }}>
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
                <p style={{ textAlign: "justify", textJustify: "inter-word" }}>
                  We provide free Career guidance to the students who are facing
                  difficulty in decision making. It may be related to choosing
                  the right college, course or anything else. We are here to
                  help you.
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
              ref={(e) => (colleges = e)}
              href="/"
              name="colleges"
              style={{ textDecoration: "none", color: "#F77E87" }}
            >
              <h2 className="text-center">Colleges We have Covered so far</h2>
            </a>
            <picture>
              <source srcSet={college1webp} type="image/webp" />
              <img id="colgimg" src={college1} alt="" />
            </picture>
            <div id="courses-cards">
              <a href="https://nitdgp.ac.in/" rel="noreferrer" target="_blank" className="college-card">
              1. NIT Durgapur
              </a>
              <a href="https://www.nitm.ac.in/" rel="noreferrer" target="_blank" className="college-card">
              2. NIT Meghalaya
              </a>
              <a href="https://www.nitap.ac.in/" rel="noreferrer" target="_blank" className="college-card">
              3. NIT Arunachal Pradesh
              </a>
              <a href="https://www.iiitagartala.ac.in/" rel="noreferrer" target="_blank" className="college-card">
              4. IIIT Agartala
              </a>
              <a href="https://www.heritageit.edu/" rel="noreferrer" target="_blank" className="college-card">
              5. Heritage Institute of Technology
              </a>
              <a href="https://msit.edu.in/" rel="noreferrer" target="_blank" className="college-card">
              6. Meghnad Saha Institute of Technology
              </a>
              <a href="http://www.mckvie.edu.in/" rel="noreferrer" target="_blank" className="college-card">
              7. MCKV Institute of Engineering
              </a>
              <a href="https://bcetdgp.ac.in/" rel="noreferrer" target="_blank" className="college-card">
              8. Bengal College of Engineering & Technology
              </a>
              <a href="https://adamasuniversity.ac.in/" rel="noreferrer" target="_blank" className="college-card">
              9. Adamas University
              </a>
              <a href="https://impscet.net/" rel="noreferrer" target="_blank" className="college-card">
              10. IMPS College of Engineering & Technology
              </a>
              <a href="http://camelliait.ac.in/" rel="noreferrer" target="_blank" className="college-card">
              11. Camellia Institute of Technology
              </a>
              <a href="https://www.ssmengg.edu.in/" rel="noreferrer" target="_blank" className="college-card">
              12. SSM College of Engineering, J&K
              </a>
              <a href="https://www.nit.ac.in/" rel="noreferrer" target="_blank" className="college-card">
              13. Narula Institute of Technology
              </a>
              <a href="https://www.abesit.in/" rel="noreferrer" target="_blank" className="college-card">
              14. ABESIT College of Engineering, U.P
              </a>
              <a href="https://futureeducation.in/" rel="noreferrer" target="_blank" className="college-card">
              15. Future Institute of Engineering and Management
              </a>
              <a href="https://www.synergyinstitute.net/" rel="noreferrer" target="_blank" className="college-card">
              16. Synergy Institute of Engineering &Technology, Odisha
              </a>
              <a href="https://niituniversity.in/" rel="noreferrer" target="_blank" className="college-card">
              17. NIIT University, Rajasthan
              </a>
              <a href="https://ciem.ac.in/" rel="noreferrer" target="_blank" className="college-card">
              18. CIEM, Kolkata
              </a>
              <a href="https://tint.edu.in/" rel="noreferrer" target="_blank" className="college-card">
              19. Techno International, Kolkata
              </a>
              <a href="https://smitgp.edu.in/" rel="noreferrer" target="_blank" className="college-card">
              20. Saroj Mohan Institute of Technology
              </a>
              {/* <div className="course-card">
                <h4>Uthrive Career Guidance Program</h4>
                <p style={{ textAlign: "justify", textJustify: "inter-word" }}>
                  We provide free Career guidance to the students who are facing
                  difficulty in decision making. It may be related to choosing
                  the right college, course or anything else. We are here to
                  help you.
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
              </div> */}
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
                <h3>Sai Lokesh</h3>
                <h4>NIT Durgapur</h4>
                <p>
                  The contents and the course instructor are excellent. The
                  activities conducted in the sessions improved our creativity.
                  The team motivated me to prepare for my placements.
                </p>
              </div>
            </div>
            <div>
              <img src={user} alt="" />
              <div className="myCarousel">
                <h3>Rosefulda Swer</h3>
                <h4>NIT Meghalaya</h4>
                <p>
                  Sir's teaching is very much appreciated as what is taught clearly made us understand. I would say I am very lucky to be a part of this and grateful for what sir has really made an effort to make the session more interesting. Thanks a lot sir!!!!
                </p>
              </div>
            </div>
            <div>
              <img src={user} alt="" />
              <div className="myCarousel">
                <h3>Koneti Yashasri</h3>
                <h4>NIT Arunachal Pradesh</h4>
                <p>
                I Joined Uthrive Placement course. The instructor was great and his teaching style was also very good. Overall I learnt a lot in the course.
                </p>
              </div>
            </div>
            <div>
              <img src={user} alt="" />
              <div className="myCarousel">
                <h3>Harsh Raj</h3>
                <h4>Techno Engineering College, Banipur</h4>
                <p>
                  I joined Uthrive placement prep course. The instructor was
                  really great. This course provides complete guidance for on
                  campus as well as off campus placements. I learnt a lot in my
                  two weeks at Uthrive.
                </p>
              </div>
            </div>
            <div>
              <img src={user} alt="" />
              <div className="myCarousel">
                <h3>Sandeep Kumar</h3>
                <h4>NIT Durgapur</h4>
                <p>
                  In the course I learnt about the TR and HR interviews. I think
                  the course is an eyeopener before the campus placements.
                </p>
              </div>
            </div>
            <div>
              <img src={user} alt="" />
              <div className="myCarousel">
                <h3>Prasad B.</h3>
                <h4>NIT Durgapur</h4>
                <p>
                  I have been doing the Uthrive Placement course for the last
                  two weeks. The course provides complete placement guidance and
                  helps to build communication skills for interviews and GDs.
                </p>
              </div>
            </div>
            <div>
              <img src={user} alt="" />
              <div className="myCarousel">
                <h3>Aniket Panigrahi</h3>
                <h4>NIT Durgapur</h4>
                <p>
                  I am very impressed with the overall course structure at
                  Uthrive. I feel the GD sesions were really great. I am looking
                  forward to the mock interviews.
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
          <p
            style={{ textAlign: "justify", textJustify: "inter-word" }}
            className="px-lg-5"
          >
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
            <a type="button"
                className="btn-hover color-1 mt-3"
                href="https://forms.gle/PrUUcEB9FCvBhvZ6A"
                target="_blank"
                rel="noreferrer"
                style={{textDecoration:'none',textAlign:'center'}}
                >Upload payment snapshot here</a>
          </div>
        </a>
      </div>
      <footer className="bg-light text-secondary">
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
        <div className="px-lg-4 p-4">
          <hr />
          <p className="text-secondary font-monospace px-lg-4">
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
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Landing;
