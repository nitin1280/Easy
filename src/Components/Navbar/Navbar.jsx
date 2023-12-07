import React, { useState } from "react";
import "./Navbar.css";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <span className="nav-logo">DevLHB</span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="/home">✔Home______</a>
        <a href="/about">About_______</a>
        <a href="/service">Service______</a>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;