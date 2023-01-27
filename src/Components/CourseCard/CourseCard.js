import React from "react";
import Slider from "react-slick";
import "./CourseCard.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import counsel from "../../assets/images/English speaker .jpg";
import placement from "../../assets/images/pexels-mikhail-nilov-8297474.jpg"
import webinar from "../../assets/images/pexels-christina-morillo-1181406.jpg"
import english from "../../assets/images/pexels-matheus-bertelli-3321793.jpg"



function CourseCard() {
  
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      <div id="card-base">
        <div id="img-div">
          <img src={placement} alt="" />
        </div>
        <div id="content-div">
          <h4>Placement Prep Course</h4>
          <p>
          This course consists of Technical and HR interview classes, Mock interview sessions, Resume making session, Soft skills sessions, GD session, company specific sessions and much more. Join us today.
          </p>
          <button>Register Now</button>
        </div>
      </div>
      <div id="card-base">
        <div id="img-div">
          <img src={webinar} alt="" />
        </div>
        <div id="content-div">
          <h4>Free Webinars</h4>
          <p>
          We organise regular free webinars on Placement process, Company interviews and new skills to make you industry ready. Click here to register for a free webinar.
          </p>
          <button>Register Now</button>
        </div>
      </div>
      <div id="card-base">
        <div id="img-div">
          <img src={english} alt="" />
        </div>
        <div id="content-div">
          <h4>English Speaking Course</h4>
          <p>
          We have launched a special Conversational English speaking course for students and professionals of all age groups. Join our course and take a step towards being confident.
          </p>
          <button>Register Now</button>
        </div>
      </div>
      <div id="card-base">
        <div id="img-div">
          <img src={counsel} alt="" />
        </div>
        <div id="content-div">
          <h4>Career Counselling</h4>
          <p>
          We provide free Career guidance to the students who are facing difficulty in decision making. It may be related to choosing the right college, course or anything else. We are here to help you.
          </p>
          <button>Register Now</button>
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

export default CourseCard;
