import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { toast, ToastContainer } from "react-toastify";

const Hero = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }
    try {
      const decoded = jwtDecode(token);
      const role = decoded.role;
      if (token && role === "member") navigate("/member/profile");
      else if (token && role === "admin") navigate("/admin/dashboard");
      else if (token && role === "trainer") navigate("/trainer/members");
      else navigate("/plans");
    } catch (err) {
      console.error("Invalid token", err);
      toast.error("Session expired. Please login again.");
      navigate("/login");
    }
  };

  return (
    <div>
      <section className="hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>
              Make Your <span>Best Version</span>
            </h1>

            <p>
              Smart workout plans, expert trainers, and a fitness journey
              designed just for you.
            </p>

            <div className="hero-buttons">
              {/* <Link to={handleGetStarted}> */}
              <button className="btn-primary" onClick={handleGetStarted}>
                Get Started
              </button>
              {/* </Link> */}
              <Link to="/plans">
                <button className="btn-secondary">View Plans</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </div>
  );
};

export default Hero;
