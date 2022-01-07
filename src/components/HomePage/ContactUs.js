import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Headings from "../Common/Headings";

function ContactUs() {
  return (
      <div>
    <div className="pt-5 pb-5 contact-section off-whiteBgColor">
      <div className="section-padding container">
      <ScrollAnimation animateIn="fadeInUp" animateOnce="true">
        <Headings textColor={"black"} title={"Contact us"} />
        <div className="row justify-content-between mt-2">
          <div className="col-md-6">
            <span className="float-left blackColor mb-2">First name</span>
            <input className="custom-input" autoComplete="off" required />
          </div>
          <div className="col-md-6">
            <span className="float-left blackColor mb-2">Last name</span>
            <input className="custom-input" autoComplete="off" required />
          </div>
          <div className="col-md-6">
            <span className="float-left blackColor mb-2">Email</span>
            <input className="custom-input" autoComplete="off" required />
          </div>
          <div className="col-md-6">
            <span className="float-left blackColor mb-2">Phone number</span>
            <input className="custom-input" autoComplete="off" required />
          </div>
          <div className="col-md-6">
            <span className="float-left blackColor mb-2">Subject</span>
            <textarea className="custom-input pt-10 pb-10" autoComplete="off" required />
          </div>
          <div className="col-md-6">
            <span className="float-left blackColor mb-2">Message</span>
            <textarea className="custom-input pt-10 pb-10" autoComplete="off" required />
          </div>
          <div className="col-md-12">
            <div className="text-center mt-4">
              <button className="button blackBgColor whiteColor bounce">SUBMIT</button>
            </div>
          </div>
        </div>
        </ScrollAnimation>
      </div>
    </div>
    
    <hr style={{color:"grey"}}/>
    </div>
    
  );
}

export default ContactUs;
