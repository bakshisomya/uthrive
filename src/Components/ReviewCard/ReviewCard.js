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
            Sir's teaching is very much appreciated as what is taught clearly made us understand. I would say I am very lucky to be a part of this and grateful for what sir has really made an effort to make the session more interesting. Thanks a lot sir!!!!
              </p>
              <h5>Rosefulda Swer</h5>
              <h6>NIT Meghalaya</h6>
            </div>
          </div>
          <div id="review-base">
            <div id="img-div">
              <img src={profile} alt="" />
            </div>
            <div id="content-div">
            <p>
            I Joined Uthrive Placement course. The instructor was great and his teaching style was also very good. Overall I learnt a lot in the course.
              </p>
              <h5>Koneti Yashasri</h5>
              <h6>NIT Arunachal Pradesh</h6>
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
              <h5>Harsh Raj</h5>
              <h6>Techno Engineering College, Banipur</h6>
            </div>
          </div>
          <div id="review-base">
            <div id="img-div">
              <img src={profile} alt="" />
            </div>
            <div id="content-div">
              <p>
              In the course I learnt about the TR and HR interviews. I think
                  the course is an eyeopener before the campus placements.
              </p>
              <h5>Sandeep Kumar</h5>
              <h6>NIT Durgapur</h6>
            </div>
          </div>
          <div id="review-base">
            <div id="img-div">
              <img src={profile} alt="" />
            </div>
            <div id="content-div">
              <p>
              I have been doing the Uthrive Placement course for the last
                  two weeks. The course provides complete placement guidance and
                  helps to build communication skills for interviews and GDs.
              </p>
              <h5>Prasad B.</h5>
              <h6>NIT Durgapur</h6>
            </div>
          </div>
          <div id="review-base">
            <div id="img-div">
              <img src={profile} alt="" />
            </div>
            <div id="content-div">
              <p>
              I am very impressed with the overall course structure at
                  Uthrive. I feel the GD sesions were really great. I am looking
                  forward to the mock interviews.
              </p>
              <h5>Aniket Panigrahi</h5>
              <h6>NIT Durgapur</h6>
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