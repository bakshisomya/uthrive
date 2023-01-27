import React from 'react'
import Slider from "react-slick";
import profile from '../../assets/images/Group 53.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ReviewCard.css'

function ReviewCard() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2,
              dots:false,
            },
          },
        ],
      };
      return (
        <Slider {...settings}>
          <div id="review-base">
            <div id="img-div">
              <img src={profile} alt="" />
            </div>
            <div id="content-div">
            <p>
              The contents and the course instructor are excellent.
The activities conducted in the sessions improved our
creativity. The team motivated me to prepare for my
placements.
              </p>
              <h5>SAI LOKESH</h5>
              <h6>NIT DURGAPUR</h6>
            </div>
          </div>
          <div id="review-base">
            <div id="img-div">
              <img src={profile} alt="" />
            </div>
            <div id="content-div">
            <p>
              The contents and the course instructor are excellent.
The activities conducted in the sessions improved our
creativity. The team motivated me to prepare for my
placements.
              </p>
              <h5>SAI LOKESH</h5>
              <h6>NIT DURGAPUR</h6>
            </div>
          </div>
          <div id="review-base">
            <div id="img-div">
              <img src={profile} alt="" />
            </div>
            <div id="content-div">
            <p>
              The contents and the course instructor are excellent.
The activities conducted in the sessions improved our
creativity. The team motivated me to prepare for my
placements.
              </p>
              <h5>SAI LOKESH</h5>
              <h6>NIT DURGAPUR</h6>
            </div>
          </div>
          <div id="review-base">
            <div id="img-div">
              <img src={profile} alt="" />
            </div>
            <div id="content-div">
              <p>
              The contents and the course instructor are excellent.
The activities conducted in the sessions improved our
creativity. The team motivated me to prepare for my
placements.
              </p>
              <h5>SAI LOKESH</h5>
              <h6>NIT DURGAPUR</h6>
            </div>
          </div>
          {/* <div id="card-base">
            <div id="img-div">
            <img src={props.img} alt="" />
            </div>
            <div id="content-div">
                <h4>{props.head}</h4>
                <p>{props.body}</p>
                <button>Register Now</button>
            </div>
        </div> */}
        </Slider>
      );
    }

export default ReviewCard