import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="left">
        <p>Contact:</p>
      </div>
      <div className="right contact-info">
        <p>Address: 19/20 Royal Hibernian Way, Dublin</p>
        <p>Phone: +353 1 905 8772</p>
        <p>Email: info@littlelemonrestaurant.com</p>
      </div>
    </footer>
  );
};

export default Footer;
