import React from "react";
import "./Loading.css";
function Loading() {
  return (
    <div className="loading">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        href="http://www.w3.org/1999/xlink" 
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          background: "transparent",
          shapeRendering: "auto",
        }}
        width="200px"
        height="200px"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <g transform="translate(0 -7.5)">
          <circle cx="50" cy="41" r="10" fill="#776deb">
            <animateTransform
              attributeName="transform"
              type="rotate"
              dur="1s"
              repeatCount="indefinite"
              keyTimes="0;1"
              values="0 50 50;360 50 50"
            ></animateTransform>
            <animate
              attributeName="r"
              dur="1s"
              repeatCount="indefinite"
              calcMode="spline"
              keyTimes="0;0.5;1"
              values="0;15;0"
              keySplines="0.2 0 0.8 1;0.2 0 0.8 1"
            ></animate>
          </circle>
          <circle cx="50" cy="41" r="10" fill="#f77e87">
            <animateTransform
              attributeName="transform"
              type="rotate"
              dur="1s"
              repeatCount="indefinite"
              keyTimes="0;1"
              values="180 50 50;540 50 50"
            ></animateTransform>
            <animate
              attributeName="r"
              dur="1s"
              repeatCount="indefinite"
              calcMode="spline"
              keyTimes="0;0.5;1"
              values="15;0;15"
              keySplines="0.2 0 0.8 1;0.2 0 0.8 1"
            ></animate>
          </circle>
        </g>
      </svg>
    </div>
  );
}

export default Loading;
