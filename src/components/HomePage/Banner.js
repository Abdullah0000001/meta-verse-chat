import React from "react";
import bannerImg from "./../../images/banner.jpg";
import { scroller } from "react-scroll";

function Banner() {

  const scrollToServices = (e) => {
    e.preventDefault();
    scroller.scrollTo("services-section", {
      duration: 100,
      delay: 100,
      smooth: "easeInOutQuart",
      offset: -100,
    });
  };


  return (
    <div className="banner">
      <img alt="bannerBgImg" src={bannerImg} />

      <div className="col-8 center-content">
        <h1>
          Make history.
          <br />
          Don’t just report on it.
        </h1>
        <p className="col-md-9 col-sm-9 col-9 mt-5 mb-5 m-auto">
          Go beyond reporting on historical data. Use actionable intelligence
          from every digital event to positively impact business outcomes.
          Continuously. In real-time. At scale.
        </p>
        <button className="button greenBgColor" onClick={(e)=> scrollToServices(e)}>Get Started</button>
        {/* <div className="hello">
        <a class="ca3-scroll-down-link ca3-scroll-down-arrow" data-ca3_iconfont="ETmodules" data-ca3_icon=""></a>
        </div> */}
        <div className="down-arrow"><i class="bi bi-chevron-down"></i></div>
      </div>
    </div>
  );
}

export default Banner;
