import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="brand-group">
        <img id="brand-icon" src="/src/assets/medical.svg" alt="brnad-icon" />
        <h1 className="brand">We Care</h1>
      </div>
      <ul>
        <li>Featured</li>
        <li>About Us</li>
        <li>Fasilities</li>
        <li>Find Doctor</li>
        <li>Contact</li>
        <li className="button">Book Now</li>
      </ul>
    </nav>
  );
};

export default Navbar;
