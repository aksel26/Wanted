import React from "react";
import hamburger from "../style/images/icon-menu.png";
import "../style/nav.css";
import finder from "../style/images/svg/find.svg";

export default function Navigator() {
  return (
    // <div className="Wrapper">
    //   <div className="NavBar">
    //     <div className="MainBar">
    //       <div className="logo">
    //         <img src={hamburger} />
    //       </div>
    //       <div className="MainBar_menu">
    //         <ul>
    //           <li>채용</li>
    //           <li>이벤트</li>
    //           <li>직군별 연봉</li>
    //           <li>이력서</li>
    //           <li>커뮤니티</li>
    //           <li>프리랜서</li>
    //           <li>AI 합격예측</li>
    //         </ul>
    //       </div>

    //       <div className="regist">

    //           회원가입/로그인
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div class="header">
      <div class="section">
        <div class="logo">
          <a href="#">
            <img src={hamburger} />
          </a>
        </div>
        <div class="nav">
          <ul>
            <li>채용</li>
            <li>이벤트</li>
            <li>직군별 연봉</li>
            <li>이력서</li>
            <li>커뮤니티</li>
            <li>프리랜서</li>
            <li>AI 합격예측</li>
          </ul>
        </div>
        <div class="profile">
          <ul>
            <li>
              <img src={finder} />
            </li>
            <li>
              <a href="#">회원가입/로그인</a>
            </li>
            <li>
              <a href="#">기업서비스</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
