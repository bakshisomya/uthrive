import React from 'react'
import './Newevents.css'
import { Link } from "react-router-dom";

function Newevents() {

  return (
    <div id="secondpage-base">
    <div id="upcoming-evnts-illus">
    <div id="upcoming-evnts-content">
        <h1>Upcoming Events</h1>
        <h4>At Uthrive</h4>
    </div>
    </div>
    <div id="upcoming-evnts-card">
        <h2>Keep an eye on this space to get updates on upcoming events and batches</h2>
        <button><Link style={{textDecoration:"none", color: "white"}} to="/">Back to home</Link></button>
    </div>
    </div>
  )
}

export default Newevents