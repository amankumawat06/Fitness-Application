import "./support.css";

const PrivacyPolicy = () => {
  return (
    <div className="page">
      <div className="page-container">
        <h1 className="page-title">Privacy Policy</h1>
        <p className="page-date">Last updated: January 2026</p>

        <p className="page-text">
          FitTrack respects your privacy and is committed to protecting your
          personal information.
        </p>

        <section className="page-section">
          <h2>Information We Collect</h2>
          <ul className="page-list">
            <li>Name & email address</li>
            <li>Login credentials</li>
            <li>Fitness goals & plans</li>
          </ul>
        </section>

        <section className="page-section">
          <h2>Payment Information</h2>
          <p>
            Payments are securely processed via third-party gateways like
            Razorpay. We do not store payment details.
          </p>
        </section>

        <section className="page-section">
          <h2>Contact Us</h2>
          <div>
            <p>Email: amankumawat4507@gmail.com</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
