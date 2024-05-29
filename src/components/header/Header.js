import React from "react";

import logo from "../../assets/little.png";

import "./Header.css";

const Header = () => {
  return (
    <header id="home" className="header">
      <div className="logo">
        <img src={logo} alt="Little Lemon Logo" />
      </div>
    </header>
  );
};

export default Header;
