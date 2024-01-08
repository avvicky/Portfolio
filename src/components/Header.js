import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [dropDown, toggleDropDown] = useState(false);
  return (
    <div className="nav-container">
      <p className="nav-icon">Vignesh</p>
      <div className="nav-menu-desktop">
        <a href="#home" className="nav-link">
          Home
        </a>
        <a href="#portfolio" className="nav-link">
          Portfolio
        </a>
        <a href="#skills" className="nav-link">
          Skills
        </a>
        <a href="#contact" className="nav-link">
          Contact
        </a>
      </div>
      <div className="nav-menu-mobile">
        {dropDown ? (
          <AiOutlineClose
            size={25}
            className="nav-dropdown"
            onClick={() => {
              toggleDropDown(!dropDown);
            }}
          />
        ) : (
          <AiOutlineMenu
            size={25}
            className="nav-dropdown"
            onClick={() => {
              toggleDropDown(!dropDown);
            }}
          />
        )}
        {dropDown && (
          <div className="mobile-nav-container">
            <a href="#home" className="nav-link">
              Home
            </a>
            <a href="#portfolio" className="nav-link">
              Portfolio
            </a>
            <a href="#skills" className="nav-link">
              Skills
            </a>
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
