import { Menu as MenuIcon, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge, IconButton, Menu, MenuItem } from "@mui/material";
import { useState } from "react";

import "./Nav.css";

const Nav = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (event) => {
    handleCloseMenu();
  };

  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
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
          <MenuItem onClick={handleMenuItemClick}>Drinks</MenuItem>
          <MenuItem onClick={handleMenuItemClick}>Beverages</MenuItem>
          <MenuItem onClick={handleMenuItemClick}>Salads</MenuItem>
        </Menu>
      </div>
      <ul className="nav-links">
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
          <a href="#footer">Contact</a>
        </li>
        <li>
          <a href="#body">Book a table</a>
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
