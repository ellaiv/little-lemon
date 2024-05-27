import React from "react";

import logo from "../../assets/little.png";

import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="center">
        <img src={logo} alt="Little Lemon Logo" className="logo" />
      </div>
    </header>
  );
};

export default Header;
