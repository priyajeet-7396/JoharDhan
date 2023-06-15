import React from 'react';
import './Footer.css'
import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';
import profileImage from '../../assets/synergy-logo-footer.jpeg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <div className="image-container">
          <img src={profileImage} alt="Profile" className="profile-image" />
        </div>
      </div>
      <div className="footer-middle">
      <span className="name">&copy; 2023-Synergy Technofin</span>

      </div>
      <div className="footer-right">
        <a href="https://twitter.com/SynergyTechnof1">
          <FaTwitter className="icon" />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100075681321791">
          <FaFacebook className="icon" />
        </a>
        <a href="https://www.linkedin.com/company/synergy-technofin-private-limited/mycompany/">
          <FaLinkedin className="icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
