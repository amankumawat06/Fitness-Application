import React from 'react'

const Hero = () => {
  return (
    <div>
      <section className="services">
      <div className="services-container">

        <h2>
          Training <span>Programs</span>
        </h2>

        <p className="services-subtitle">
          Choose a workout category that fits your fitness goal.
        </p>

        <div className="services-grid">

          <div className="service-card">
            <img src="/assets/exercises/chest.webp" alt="Chest workout" />
            <h3>Chest Training</h3>
            <p>Build strength and size with focused chest workouts.</p>
          </div>

          <div className="service-card">
            <img src="/assets/exercises/back.jpg" alt="Back workout" />
            <h3>Back Training</h3>
            <p>Improve posture and power with back-focused exercises.</p>
          </div>

          <div className="service-card">
            <img src="/assets/exercises/legs.jpeg" alt="Leg workout" />
            <h3>Leg Day</h3>
            <p>Increase lower-body strength and endurance.</p>
          </div>

          <div className="service-card">
            <img src="/assets/exercises/core-abs.avif" alt="Core workout" />
            <h3>Core Strength</h3>
            <p>Stabilize your body and improve overall performance.</p>
          </div>

          <div className="service-card">
            <img src="/assets/exercises/full-body.webp" alt="Full body workout" />
            <h3>Full Body</h3>
            <p>Balanced workouts targeting all muscle groups.</p>
          </div>

          <div className="service-card">
            <img src="/assets/exercises/cardio.webp" alt="Cardio workout" />
            <h3>Cardio & Fat Burn</h3>
            <p>Boost stamina and burn calories efficiently.</p>
          </div>

        </div>

      </div>
    </section>
    </div>
  )
}

export default Hero
