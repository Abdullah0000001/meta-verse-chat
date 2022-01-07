import React from 'react'
import Headings from "../Common/Headings";

function Team() {
    return (
        <div className="pt-5 pb-5 team-section ">
            <div className="section-padding container">
            <Headings textColor={"white"} title={"Our Team"} />
            <div className="row justify-content-between mt-2">
            <div className="col-md-4">
                <div className="team-box">
                <h6>Ali Ameen</h6>
                <p>DIRECTOR-OPERATIONS</p>
                <span>aliameen@gmail.com</span>
                <span>+923123456789</span>
                </div>
            </div>
            <div className="col-md-4">
                <div className="team-box">
                <h6>Ali Ameen</h6>
                <p>DIRECTOR-OPERATIONS</p>
                <span>aliameen@gmail.com</span>
                <span>+923123456789</span>
                </div>
            </div>
            <div className="col-md-4">
                <div className="team-box">
                <h6>Ali Ameen</h6>
                <p>DIRECTOR-OPERATIONS</p>
                <span>aliameen@gmail.com</span>
                <span>+923123456789</span>
                </div>
            </div>
            </div>
            </div>
        </div>
    )
}

export default Team
