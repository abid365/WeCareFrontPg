import React from "react";
import "./Hero.css";
import { MdOutlineDateRange } from "react-icons/md";
import { BiSolidCheckShield } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
const Hero = () => {
  return (
    <div className="parent-div" style={{ marginTop: "1rem" }}>
      <div>
        <h1 className="h-text">
          Protect Your Health<br></br> And Take Care of<br></br> Your Health
        </h1>

        {/* sub-parent*/}
        <div className="grid-container">
          {/* 1st */}
          <div className="group-desc">
            <MdOutlineDateRange className="logo"></MdOutlineDateRange>
            <div>
              <h1>Make An Appointment</h1>
              <p className="class-desription">
                Schedule With Your Favourite Doctor<br></br> Anytime
              </p>
            </div>
          </div>
          {/* 2nd */}
          <div className="group-desc">
            <BiSolidCheckShield className="logo"></BiSolidCheckShield>
            <div>
              <h1>Health Gurantee Forever</h1>
              <p className="class-desription">
                We Always Provide The Best<br></br> Warrenty For You
              </p>
            </div>
          </div>
          {/* 3rd */}
          <div className="group-desc">
            <FaUserCircle className="logo"></FaUserCircle>
            <div>
              <h1>Find Your Best Doctor</h1>
              <p className="class-desription">
                We Always Provide The Best<br></br> Warrenty For You
              </p>
            </div>
          </div>
          {/* 4th */}
          <div className="group-desc">
            <HiLocationMarker className="logo"></HiLocationMarker>
            <div>
              <h1>Spread In Various Places</h1>
              <p className="class-desription">
                Now Clinics Are Available In<br></br> Various Places
              </p>
            </div>
          </div>
        </div>
        <button
          style={{ border: "none", marginTop: "2rem" }}
          className="button"
        >
          {" "}
          Book Now
        </button>
      </div>
      {/* hero figure */}
      <div id="doc-fig">
        <img
          style={{ paddingTop: "1rem" }}
          src="/src/assets/female-doctor.png"
          alt="Female Doctor"
        />
      </div>
    </div>
  );
};

export default Hero;
