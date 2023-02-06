import React from 'react'
import { Link } from "react-router-dom";
import './Coursedets.css';


function Coursedets() {

  return (
    // THIS CODE IS WRITTEN ONLY IF THE PAGE IS OFF
    <div>This page is under maintainance.<br/>
    Meanwhile kindly visit -<br/>
    <a href="https://forms.gle/qRNZwmuEnB6ixF6x5" style={{ textDecoration: "none", color: "#CE76A6" }}
    target="_blank"
    rel="noreferrer">Placement prep registration course</a>
    <br/>
    <br/>
    <Link style={{ textDecoration: "none", color: "#7F6CE6" }} to="/">Go back</Link>
    </div>
  )
}

export default Coursedets