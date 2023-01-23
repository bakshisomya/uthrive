import React from "react";
import CourseCard from "../CourseCard/CourseCard";
import counselling from "../../assets/images/English speaker .jpg";
import pic2 from "../../assets/images/pexels-idriss-meliani-2982449.jpg";
import pic3 from "../../assets/images/pexels-keira-burton-6147276.jpg";
import pic4 from "../../assets/images/pexels-pixabay-207684.jpg";
import './Imagecarousel.css';

function Imagecarousel() {

    // carousel scroll krne ka logic 
    let box = document.querySelector('.product-container')
    // prev button ka function - 
    const btnpresprev = ()=>{
        let width = box.clientWidth
        box.scrollLeft = box.scrollLeft - width;
        console.log(width)
    }
     // next button ka function - 
    const btnnextprev = ()=>{
        let width = box.clientWidth
        box.scrollLeft = box.scrollLeft + width;
        console.log(width)
    }
  return (
    <div className="product-carousel">
      <button onClick={btnpresprev} className="pre-btn">
        <p>&lt;</p>
      </button>
      <button onClick={btnnextprev} className="next-btn">
        <p>&gt;</p>
      </button>

      <div className="product-container">
        <CourseCard
          img={counselling}
          head={"Placement Prep Course"}
          body={
            "This course consists of Technical and HR interview classes, Mock interview sessions, Resume making session, Soft skills sessions, GD session, company specific sessions and much more. Join us today."
          }
        />
        <CourseCard
          img={pic2}
          head={"Free Webinars"}
          body={
            "We organise regular free webinars on Placement process, Company interviews and new skills to make you industry ready. Click here to register for a free webinar."
          }
        />
        <CourseCard
          img={pic3}
          head={"English Speaking Course"}
          body={
            "We have launched a special Conversational English speaking course for students and professionals of all age groups. Join our course and take a step towards being confident."
          }
        />
        <CourseCard
          img={pic4}
          head={"Career Counselling"}
          body={
            "We provide free Career guidance to the students who are facing difficulty in decision making. It may be related to choosing the right college, course or anything else. We are here to help you."
          }
        />
      </div>
    </div>
  );
}

export default Imagecarousel;
