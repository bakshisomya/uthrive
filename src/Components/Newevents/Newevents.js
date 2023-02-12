import React,{useState} from 'react'
import logo from "../../assets/images/Nobg.png";
import './Newevents.css'
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";


function Newevents() {
  const [clicked, setclicked] = useState(false);

  return (
    <div id="secondpage-base">
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
    <div id="upcoming-evnts-illus">
    <div id="upcoming-evnts-content">
        <h1>Upcoming Events</h1>
        <h4>At Uthrive</h4>
    </div>
    </div>
    <div id="upcoming-evnts-card">
        <h2>Keep an eye on this space to get updates on upcoming events and batches</h2>
    </div>
    </div>
  )
}

export default Newevents