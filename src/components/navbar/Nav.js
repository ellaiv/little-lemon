import { Menu as MenuIcon, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge, IconButton, Menu, MenuItem } from "@mui/material";
import { useState } from "react";

import "./Nav.css";

const Nav = ({ setDisplayMainContent }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
    setDisplayMainContent(false);
  };

  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
    setDisplayMainContent(false);
  };

  return (
    <nav className="nav">
      <div className="left">
        <IconButton style={{ color: "white" }} onClick={handleMenuClick}>
          <MenuIcon />
        </IconButton>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleCloseMenu}
        >
          <MenuItem onClick={handleCloseMenu}>Drinks</MenuItem>
          <MenuItem onClick={handleCloseMenu}>Beverages</MenuItem>
          <MenuItem onClick={handleCloseMenu}>Salads</MenuItem>
        </Menu>
      </div>
      <ul className="nav-links">
        <li>
          <a href="#home" onClick={() => setDisplayMainContent(false)}>
            Home
          </a>
        </li>
        <li>
          <a href="#" onClick={() => setDisplayMainContent(false)}>
            Services
          </a>
        </li>
        <li>
          <a href="#" onClick={() => setDisplayMainContent(false)}>
            About
          </a>
        </li>
        <li>
          <a href="#footer" onClick={() => setDisplayMainContent(false)}>
            Contact
          </a>
        </li>
        <li>
          <a href="#body" onClick={() => setDisplayMainContent(true)}>
            Book a table
          </a>
        </li>
      </ul>
      <div className="right">
        <IconButton
          style={{ color: "white" }}
          onClick={() => handleAddToCart("Product")}
        >
          <Badge badgeContent={cartItems.length} color="error">
            <ShoppingCartOutlined />
          </Badge>
        </IconButton>
      </div>
    </nav>
  );
};

export default Nav;
