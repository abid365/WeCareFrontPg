import React from "react";
import "./Navbar.css";
import $ from "jquery";
const Navbar = () => {
  // navbar functionality
  const jqueryCode = () => {
    console.log("ok");
    $(".hello").slideToggle("slow");
  };
  return (
    <div>
      <nav className="navbar">
        <div className="brand-group">
          <img id="brand-icon" src="/src/assets/medical.svg" alt="brnad-icon" />
          <h1 className="brand">We Care</h1>
        </div>
        <button
          onClick={jqueryCode}
          style={{ borderRadius: "8px;", border: "none" }}
          className="button menu"
        >
          Menu
        </button>

        <ul className="general">
          <li>Featured</li>
          <li>About Us</li>
          <li>Fasilities</li>
          <li>Find Doctor</li>
          <li>Contact</li>
          <li className="button">Book Now</li>
        </ul>
      </nav>
      <div className="hello">
        {" "}
        <ul className="toggle">
          <li>Featured</li>
          <li>About Us</li>
          <li>Fasilities</li>
          <li>Find Doctor</li>
          <li>Contact</li>
          <li style={{ textAlign: "center" }} className="button">
            Book Now
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
