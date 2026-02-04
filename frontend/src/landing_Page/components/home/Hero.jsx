import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
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
              <Link to="/login">
                <button className="btn-primary">Get Started</button>
              </Link>
              <Link to="/plans">
                <button className="btn-secondary">View Plans</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
