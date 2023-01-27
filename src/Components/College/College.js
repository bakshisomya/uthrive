import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./College.css";
import p1 from "../../assets/images/pic1.png";
import p2 from "../../assets/images/Group 47.png";
import p3 from "../../assets/images/Group 48.png";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block"}}
      onClick={onClick}
    />
  );
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}
function College() {
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
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          dots: false,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      <div id="colg-base">
        <div id="img-div">
          <img src={p1} alt="" />
        </div>
        <div id="content-div">
          <h4>NIT Durgapur</h4>
        </div>
      </div>
      <div id="colg-base">
        <div id="img-div">
          <img src={p2} alt="" />
        </div>
        <div id="content-div">
          <h4>NIT Meghalaya</h4>
        </div>
      </div>
      <div id="colg-base">
        <div id="img-div">
          <img src={p3} alt="" />
        </div>
        <div id="content-div">
          <h4>NIT Arunachal Pradesh</h4>
        </div>
      </div>
      <div id="colg-base">
        <div id="img-div">
          <img src={p1} alt="" />
        </div>
        <div id="content-div">
          <h4>IIIT Agartala</h4>
        </div>
      </div>
      <div id="colg-base">
        <div id="img-div">
          <img src={p2} alt="" />
        </div>
        <div id="content-div">
          <h4>Heritage Institute of Technology</h4>
        </div>
      </div>
      <div id="colg-base">
        <div id="img-div">
          <img src={p3} alt="" />
        </div>
        <div id="content-div">
          <h4>Meghnad Saha Institute of Technology</h4>
        </div>
      </div>
      <div id="colg-base">
        <div id="img-div">
          <img src={p1} alt="" />
        </div>
        <div id="content-div">
          <h4>MCKV Institute of Engineering</h4>
        </div>
      </div>
      <div id="colg-base">
        <div id="img-div">
          <img src={p2} alt="" />
        </div>
        <div id="content-div">
          <h4>Bengal College of Engineering & Technology</h4>
        </div>
      </div>
      <div id="colg-base">
        <div id="img-div">
          <img src={p3} alt="" />
        </div>
        <div id="content-div">
          <h4>Adamas University</h4>
        </div>
      </div>
      <div id="colg-base">
        <div id="img-div">
          <img src={p1} alt="" />
        </div>
        <div id="content-div">
          <h4>IMPS College of Engineering & Technology</h4>
        </div>
      </div>
      <div id="colg-base">
        <div id="img-div">
          <img src={p2} alt="" />
        </div>
        <div id="content-div">
          <h4>Camellia Institute of Technology</h4>
        </div>
      </div>
      <div id="colg-base">
        <div id="img-div">
          <img src={p3} alt="" />
        </div>
        <div id="content-div">
          <h4>SSM College of Engineering, J&K</h4>
        </div>
      </div>
      <div id="colg-base">
        <div id="img-div">
          <img src={p1} alt="" />
        </div>
        <div id="content-div">
          <h4>Narula Institute of Technology</h4>
        </div>
      </div>
      <div id="colg-base">
        <div id="img-div">
          <img src={p2} alt="" />
        </div>
        <div id="content-div">
          <h4>ABESIT College of Engineering, U.P</h4>
        </div>
      </div>
      <div id="colg-base">
        <div id="img-div">
          <img src={p3} alt="" />
        </div>
        <div id="content-div">
          <h4>Future Institute of Engineering & Management</h4>
        </div>
      </div>
      <div id="colg-base">
        <div id="img-div">
          <img src={p1} alt="" />
        </div>
        <div id="content-div">
          <h4>Synnergy Institute of Engineering & Technology</h4>
        </div>
      </div>
      <div id="colg-base">
        <div id="img-div">
          <img src={p2} alt="" />
        </div>
        <div id="content-div">
          <h4>NIIT University</h4>
        </div>
      </div>
      <div id="colg-base">
        <div id="img-div">
          <img src={p3} alt="" />
        </div>
        <div id="content-div">
          <h4>CIEM, Kolkata</h4>
        </div>
      </div>
      <div id="colg-base">
        <div id="img-div">
          <img src={p1} alt="" />
        </div>
        <div id="content-div">
          <h4>Techno International, Kolkata</h4>
        </div>
      </div>
      <div id="colg-base">
        <div id="img-div">
          <img src={p2} alt="" />
        </div>
        <div id="content-div">
          <h4>Saroj Mohan Institute of Technology</h4>
        </div>
      </div>
    </Slider>
  );
}

export default College;
