import React,{useState} from 'react'
import logo from "../../assets/images/Nobg.png";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
import './Coursedets.css';
import { HashLink } from "react-router-hash-link";
import blank from "../../assets/images/Group 85.png"
import Sessions from '../Sessions/Sessions.js';


function Coursedets() {
  const [clicked, setclicked] = useState(false);

  return (
    // THIS CODE IS WRITTEN ONLY IF THE PAGE IS OFF
    // <div>This page is under maintainance.<br/>
    // Meanwhile kindly visit -<br/>
    // <a href="https://forms.gle/qRNZwmuEnB6ixF6x5" style={{ textDecoration: "none", color: "#CE76A6" }}
    // target="_blank"
    // rel="noreferrer">Placement prep registration course</a>
    // <br/>
    // <br/>
    // <Link style={{ textDecoration: "none", color: "#7F6CE6" }} to="/">Go back</Link>
    // </div>
    <div id="thirdpage-base">
    <nav>
        <a href="index.html">
            <img src={logo} style={{ width: "6rem" }} alt="" />
        </a>
        <div>
          <ul id="navbar" className={clicked ? "#navbar active" : "navbar"}>
            {/* haslink was added for smooth scrolling to different sections of the page */}
            <li>
              <HashLink smooth to="/#landing-base">
                Home
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#courses">
                Our Courses
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#colleges">
                Colleges Covered
              </HashLink>
            </li>
            <li>
              <Link to="/events">New Events</Link>
            </li>
            <li>
              <HashLink smooth to="/#testimonials">
                Reviews
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#about">
                About
              </HashLink>
            </li>
            <li>
              <a
                href="https://forms.gle/apErTX3XAe9zEuAt7"
                target="_blank"
                rel="noreferrer"
              >
                Payment
              </a>
            </li>
            <li>
              <HashLink smooth to="/#contact">
                Contact
              </HashLink>
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
      <div id="course-det-sec1">
      <div id="course-det-top-content">
        <h1><span className="spcl">Placement</span> Prep</h1>
        <h4>Course Details</h4>
        <img src={blank} style={{width:"40rem"}} alt="" />
        <button>
            <HashLink
              style={{ textDecoration: "none", color: "white" }}
              smooth
              to="#courses"
            >
              Know More
            </HashLink>
          </button>
    </div>
      </div>
      <div id="course-det-sec2">
      <h1><span className="spcl">Sessions</span></h1>
        <h4>In Details</h4>
      </div>
      <Sessions/>
    </div>
  )
}

export default Coursedets