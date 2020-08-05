/*jshint esversion :9*/

import React from "react";
import "./footer-style.scss";
import Logo from "../../Assets/Vinyl_Broken.png";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";

function Footer() {
  return (
    <footer className="footer">
      <div className="item all-items" style={{ paddingTop: "15px" }}>
        About Us
      </div>
      <div>
        <img src={Logo} alt="Melofobia" className="logo all-items" />
      </div>
      <div className="item secondary-item">
        <div className="icons">
          <InstagramIcon />
          <FacebookIcon />
        </div>
        <div style={{ paddingTop: "15px", paddingLeft: "10px" }}>
          <span className="subscribe">Subscribe</span> to Newsletter
        </div>
      </div>
    </footer>
  );
}

export default Footer;
