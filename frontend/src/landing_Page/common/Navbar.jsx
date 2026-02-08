import { useState, useEffect } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import "./style.css";
import { jwtDecode } from "jwt-decode";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [role,setRole] = useState(null)

  useEffect(() => {
     const token = localStorage.getItem("token");
     
     if(token){
       setIsLoggedIn(!!token);

       try {
        const decoded = jwtDecode(token);
        setRole(decoded.role);
      } catch (err) {
        console.error("Invalid token");
      }
     }

  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("role")

    setIsLoggedIn(false)
    setRole(null)
    navigate("/login")
  }

  return (
    <>
      <nav className="navbar">
        <div className="navContainer">
          {/* <div className="navLogo">
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              <img className="logo" src="../public/assets/logo.png" />
            </Link>
          </div> */}
          <div className="navLogo">
          <Link to="/" className="logo-text" onClick={() => setIsMenuOpen(false)}>
            <span className="logo-fit">Fit</span>
            <span className="logo-track">Track</span>
          </Link>
        </div>

          <div className={`navLinks ${isMenuOpen ? "open" : ""}`}>
            <ul>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? "active" : "")}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) => (isActive ? "active" : "")}
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/features"
                  className={({ isActive }) => (isActive ? "active" : "")}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Features
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/plans"
                  className={({ isActive }) => (isActive ? "active" : "")}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Plans
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/reviews"
                  className={({ isActive }) => (isActive ? "active" : "")}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Reviews
                </NavLink>
              </li>
              {isLoggedIn &&  role === "member" &&(
                <li>
                <NavLink
                  to="/member/profile"
                  className={({ isActive }) => (isActive ? "active" : "")}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Dashboard
                </NavLink>
              </li>
              )}
              {isLoggedIn &&  role === "trainer" &&(
                <li>
                <NavLink
                  to="/trainer/members"
                  className={({ isActive }) => (isActive ? "active" : "")}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Dashboard
                </NavLink>
              </li>
              )}
              {isLoggedIn &&  role === "admin" &&(
                <li>
                <NavLink
                  to="/admin/dashboard"
                  className={({ isActive }) => (isActive ? "active" : "")}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Dashboard
                </NavLink>
              </li>
              )}
            </ul>
          </div>
          <div className="navbuttons">
            {
              isLoggedIn ? (
              <button className="nav-login-btn" onClick={handleLogout}>
                Logout
              </button>
               ) : (
              <NavLink to="/login" className={({isActive}) => (isActive ? "nav-login-btn activeBtn" : "nav-login-btn")}>
                Login
            </NavLink>
               )
            }
            <div
              className="hamburger"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FaTimes /> : <FaBars /> }
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
