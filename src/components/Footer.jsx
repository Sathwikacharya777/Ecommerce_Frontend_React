// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/orders">Orders</Link></li>
            
          </ul>
        </div>

        {/* Company Info */}
        <div className="footer-section1">
          <h3>Our Office</h3>
          <p>ShopEasy Pvt Ltd <br />Bramhavara, India - 576213</p>
          <div className="social-iconsf">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} ShopEasy Pvt Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
