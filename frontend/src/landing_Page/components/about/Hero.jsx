import React from 'react'

const Hero = () => {
  return (
    <div>
      <section className="about">
        <h2 className="about-heading mb-5">
          About <span>Us</span>
        </h2>
        <div className="about-container">
          <div className="about-image">
            <img src="/assets/aboutHeroImage.jpeg" alt="Training environment" />
          </div>

          <div className="about-content">
            <p className="about-tagline">
              Your fitness journey, backed by structure and discipline.
            </p>

            <p>
              We are a modern fitness platform built to help you train smarter,
              stay consistent, and achieve real results. From expert-designed
              workout plans to goal-based training, everything is crafted to fit
              your lifestyle.
            </p>

            <ul className="about-points">
              <li>✔ Goal-based workout plans</li>
              <li>✔ Certified trainers</li>
              <li>✔ Structured progress tracking</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero
