import "./support.css";

const TermsConditions = () => {
  return (
    <div className="page">
      <div className="page-container">
        <h1 className="page-title">Terms & Conditions</h1>
        <p className="page-date">Last updated: January 2026</p>

        <p className="page-text">
          By using FitTrack, you agree to these Terms & Conditions.
        </p>

        <section className="page-section">
          <h2>Use of Website</h2>
          <p>
            FitTrack is a fitness platform. Use it responsibly and lawfully.
          </p>
        </section>

        <section className="page-section">
          <h2>User Accounts</h2>
          <ul className="page-list">
            <li>Provide accurate information</li>
            <li>Maintain account security</li>
            <li>Responsible for account activity</li>
          </ul>
        </section>

        <section className="page-section">
          <h2>Payments</h2>
          <p>
            Paid features require payment. Payments are processed securely via
            third-party gateways.
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

export default TermsConditions;
