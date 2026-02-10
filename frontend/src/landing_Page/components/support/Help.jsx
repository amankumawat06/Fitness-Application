import "./support.css";

const Help = () => {
  return (
    <div className="page">
      <div className="page-container">
        <h1 className="page-title">Help & Support</h1>
        <p className="page-subtitle">
          Need assistance? We’re here to help you with FitTrack.
        </p>

        <section className="page-section">
          <h2>Account Support</h2>
          <p>
            If you face login or signup issues, please check your credentials.
            If the problem continues, contact our support team.
          </p>
        </section>

        <section className="page-section">
          <h2>Plans & Payments</h2>
          <p>
            Some features require payment to unlock. Payments are securely
            processed via trusted gateways. We do not store card or UPI details.
          </p>
        </section>

        <section className="page-section">
          <h2>Workout & Goals</h2>
          <p>
            Select your fitness goal from the dashboard and choose a suitable
            plan to unlock personalized exercises.
          </p>
        </section>

        <section className="page-section">
          <h2>Technical Issues</h2>
          <p>
            If you experience bugs or errors, try refreshing the page or logging
            in again. If the issue persists, report it to us.
          </p>
        </section>

        <section className="page-section">
          <h2>Contact Support</h2>
          <div>
            <p>Email: amankumawat4507@gmail.com</p>
            <p>Website: fit-track-fitness-application.vercel.app</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Help;
