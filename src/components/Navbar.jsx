import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/useCart";
import "../styles/Navbar.css";
import { FaGithub, FaLinkedin, FaInstagram, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const { cartItems } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <Link to="/" className="logo-link" onClick={closeMenu}>
        <img src="/assets/logo.png" alt="Logo" className="logo-img" />
        <span className="logo-text">
          <span className="online">Shop</span>
          <span className="shop">Easy</span>
        </span>
      </Link>

      {/* 🍔 Hamburger Button */}
      <div className="hamburger" onClick={toggleMenu}>
        {/* ✅ Show badge only when cart has items AND menu is closed */}
        {cartItems.length > 0 && !menuOpen && (
          <span className="cart-badge1">{cartItems.length}</span>
        )}
      
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>


      {/* 🔗 Nav Links */}
      <div className={`nav-right ${menuOpen ? "open" : ""}`}>
        <Link to="/" className="nav-icon" onClick={closeMenu}>Home</Link>
        <Link to="/profile" className="nav-icon" onClick={closeMenu}>Profile</Link>
        <Link to="/cart" className="nav-icon cart-link" onClick={closeMenu}>
          Cart
          {cartItems.length > 0 && (
            <span className="cart-badge">{cartItems.length}</span>
          )}
        </Link>
        <Link to="/orders" className="nav-icon" onClick={closeMenu}>My Orders</Link>

        {/* 🔗 Mobile Socials */}
        <div className="nav-social mobile-only">
          <a href="https://github.com/Sathwikacharya777" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/sathwika-acharya-ijjub13" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/_7_.wik._" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* 🔗 Desktop Socials */}
      <div className="nav-social desktop-only">
        <a href="https://github.com/Sathwikacharya777" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/sathwika-acharya-ijjub13" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://www.instagram.com/_7_.wik._" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
