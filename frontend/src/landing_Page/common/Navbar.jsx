import { useState } from "react";
import { NavLink,Link } from "react-router-dom";
import "./style.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <nav>
        <div className="navContainer">
          <div className="navLogo">
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              <img className="logo" src="../public/assets/photo.jpg" />
            </Link>
          </div>
          <div className={`navLinks ${isMenuOpen ?  "open" : ""}`}>
            <ul>
              <li>
                <NavLink to="/" className={({isActive}) => isActive ? "active" : ""} onClick={() => setIsMenuOpen(false)}>Home</NavLink>
              </li>
              <li>
                <NavLink to="/about" className={({isActive}) => isActive ? "active" : ""} onClick={() => setIsMenuOpen(false)}>About Us</NavLink>
              </li>
              <li>
                <NavLink to="/features" className={({isActive}) => isActive ? "active" : ""} onClick={() => setIsMenuOpen(false)}>Features</NavLink>
              </li>
              <li>
                <NavLink to="/plans" className={({isActive}) => isActive ? "active" : ""} onClick={() => setIsMenuOpen(false)}>Plans</NavLink>
              </li>
              <li>
                <NavLink to="/reviews" className={({isActive}) => isActive ? "active" : ""} onClick={() => setIsMenuOpen(false)}>Reviews</NavLink>
              </li>
            </ul>
          </div>
          <div className="navbuttons">
            <NavLink to="/login">
              <button className="btn btn-outline-secondary">Login</button>
            </NavLink>
            <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>☰</div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
