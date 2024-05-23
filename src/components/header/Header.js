import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/images.jpg";

import "./Header.css";

const Header = () => {
  return (
    <header>
      <img src={logo} alt="Little Lemon Logo" />
      <FontAwesomeIcon icon={"shopping-cart"} />
      <FontAwesomeIcon icon={"hamburger"} />
    </header>
  );
};

export default Header;
