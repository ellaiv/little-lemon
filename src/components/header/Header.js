import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faHamburger } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/Little-Lemon-Logo-circle-white.png";

import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Little Lemon Logo" className="logo" />
      <div className="icons">
        <FontAwesomeIcon icon={faShoppingCart} className="icon" />
        <FontAwesomeIcon icon={faHamburger} className="icon" />
      </div>
    </header>
  );
};

export default Header;
