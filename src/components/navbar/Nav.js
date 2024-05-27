import { Menu, ShoppingCartOutlined } from "@mui/icons-material";
import React from "react";

import "./Nav.css";

const Nav = () => {
  return (
    <>
      <nav className="nav">
        <div className="left">
          <Menu style={{ color: "white", fontSize: 30 }} />
        </div>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <div className="right">
          <ShoppingCartOutlined style={{ color: "white", fontSize: 30 }} />
        </div>
      </nav>
    </>
  );
};

export default Nav;
