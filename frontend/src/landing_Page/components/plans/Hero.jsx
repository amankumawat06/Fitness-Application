import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      <section className="plans">
        <div className="plans-container">
          <h2>
            Choose Your <span>Plan</span>
          </h2>

          <p className="plans-subtitle">
            Simple pricing. Real results. No hidden charges.
          </p>

          <div className="plans-grid">
            <div className="plan-card">
              <h3>Basic</h3>
              <p className="price">
                ₹499<span>/month</span>
              </p>

              <ul>
                <li>✔ Access to basic workouts</li>
                <li>✔ Goal selection</li>
                <li>✔ Community support</li>
                <li>✖ Trainer guidance</li>
              </ul>

              <Link to="/login">
                <button className="plan-btn">Get Started</button>
              </Link>
            </div>

            <div className="plan-card popular">
              <span className="badge">Most Popular</span>
              <h3>Pro</h3>
              <p className="price">
                ₹999<span>/month</span>
              </p>

              <ul>
                <li>✔ Personalized workout plans</li>
                <li>✔ Trainer guidance</li>
                <li>✔ Progress tracking</li>
                <li>✔ Priority support</li>
              </ul>

              <Link to="/login">
                <button className="plan-btn primary">Join Pro</button>
              </Link>
            </div>

            <div className="plan-card">
              <h3>Premium</h3>
              <p className="price">
                ₹1499<span>/month</span>
              </p>

              <ul>
                <li>✔ Everything in Pro</li>
                <li>✔ 1-on-1 trainer sessions</li>
                <li>✔ Diet & nutrition guidance</li>
                <li>✔ Advanced analytics</li>
              </ul>

              <Link to="/login">
                <button className="plan-btn">Go Premium</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
