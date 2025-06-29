import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/useCart"; // Your custom hook
import "../styles/Navbar.css";

function Navbar() {
  const { cartItems } = useCart();

  return (
    <nav className="navbar">
      <Link to="/" className="logo-link">
        <img src="/assets/logo.png" alt="Logo" className="logo-img" />
        <span className="logo-text">
          <span className="online">Shop</span>
          <span className="shop">Easy</span>
        </span>
      </Link>

      <div className="nav-right">
        <Link to="/" className="nav-icon">🏠 Home</Link>
        <Link to="/profile" className="nav-icon">👤 Profile</Link>

        <Link to="/cart" className="nav-icon cart-link">
          🛒 Cart
          {cartItems.length > 0 && (
            <span className="cart-badge">{cartItems.length}</span>
          )}
        </Link>

        <Link to="/orders" className="nav-icon">📦 My Orders</Link>
      </div>
    </nav>
  );
}

export default Navbar;
