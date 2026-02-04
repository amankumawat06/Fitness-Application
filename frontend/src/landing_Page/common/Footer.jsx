import "./style.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-col">
          <h3 className="footer-logo">Fit<span>Track</span></h3>
          <p>
            A modern fitness platform designed to help you train smarter,
            stay consistent, and achieve real results.
          </p>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/features">Features</Link></li>
            <li><Link to="/plans">Plans</Link></li>
            <li><Link to="/reviews">Reviews</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Support</h4>
          <ul>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Help Center</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <p>Email: support@fittrack.com</p>
          <p>Phone: +91 98765 43210</p>

          <div className="socials">
            <span>🌐</span>
            <span>📘</span>
            <span>📸</span>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} FitTrack. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
