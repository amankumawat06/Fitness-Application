import "./style.css";
import { Link } from "react-router-dom";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";


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
            <li><Link to="/faqs">FAQs</Link></li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/terms-conditions">Terms & Conditions</Link></li>
            <li><Link to="/help-center">Help Center</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <p>Email: amankumawat4507@gmail.com</p>
          <p>Phone: +91 9079720440</p>

          <div className="socials">
            <a href="https://www.instagram.com/amankmwt_06/?next=%2F&hl=en" target="_blank" rel="noopener noreferrer"><span><FaInstagram /></span></a>
            <a href="https://x.com/amankumawatt67" target="_blank" rel="noopener noreferrer"><span><FaTwitter /></span></a>
            <a href="https://youtube.com"target="_blank" rel="noopener noreferrer"><span><FaYoutube /></span></a>
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
