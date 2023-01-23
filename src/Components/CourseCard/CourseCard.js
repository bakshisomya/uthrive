import React from 'react'
import './CourseCard.css'

function CourseCard(props) {
  return (
    <div id="card-base">
        <div id="img-div">
        <img src={props.img} alt="" />
        </div>
        <div id="content-div">
            <h4>{props.head}</h4>
            <p>{props.body}</p>
            <button>Register Now</button>
        </div>
    </div>
  )
}

export default CourseCard