import React from "react";
import "../styles/Profile.css";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

function Profile() {
  return (
    <div className="profile-container">
      <img src="/assets/profile.png" alt="Profile" className="profile-image" />

      <div className="profile-info">
        <h2>Virat kohli</h2>
        <p><strong>Phone:</strong> +91 98765 43210</p>
        <p><strong>Email:</strong> Virat@example.com</p>

        {/* Social Media Icons */}
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/virat.kohli?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Profile;
