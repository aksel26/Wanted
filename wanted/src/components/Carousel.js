// import React from "react";
import React, { useState, useRef, useEffect, useCallback } from "react";
import hamburger from "../style/images/icon-menu.png";
import "../style/carousel.css";
import slide1 from "../style/images/slide1.jpg";
import slide2 from "../style/images/slide2.jpg";
import slide3 from "../style/images/slide3.jpg";
import slide4 from "../style/images/slide4.jpg";
import slide5 from "../style/images/slide5.jpg";
import slide6 from "../style/images/slide6.jpg";
// import { ReactComponent as LeftBtn } from "../style/images/svg/left.svg";
import LeftBtn from "../style/images/svg/left.svg";
import RightBtn from "../style/images/svg/right.svg";

export default function Carousel() {
  const images = [slide1, slide2, slide3, slide4, slide5, slide6];

  const slider = useRef();
  let num = 0;

  function leftHandle(e) {
    num += 30;
    slider.current.style.transform = `translateX(${num}%)`;
  }

  function rightHandle() {
    num -= 30;
    slider.current.style.transform = `translateX(${num}%)`;
  }

  return (
    <div>
      <div className="ddd">
        <div className="wrapper">
          <div className="slide-container" ref={slider}>
            {images.map((item) => (
              <div className="slide-box">
                <img src={item} />
              </div>
            ))}
          </div>

          {/* <LeftBtn width="500" height="500" fill="orange" onClick={leftHandle} />
      <RightBtn width="500" height="500" fill="orange" onClick={rightHandle} /> */}
        </div>
        <div className="leftBtn">
          <img src={LeftBtn} onClick={leftHandle} />
        </div>
        <div className="rightBtn">
          <img src={RightBtn} onClick={rightHandle} />
        </div>
      </div>
    </div>
  );
}
