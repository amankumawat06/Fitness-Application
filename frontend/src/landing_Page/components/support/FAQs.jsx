import "./support.css";

const FAQs = () => {
  return (
    <div className="page">
      <div className="page-container">
        <h1 className="page-title">Frequently Asked Questions</h1>
        <p className="page-subtitle">
          Answers to common questions about FitTrack.
        </p>

        <section className="page-section">
          <h2>How do I create an account?</h2>
          <p>Click Login and sign up using your email address.</p>
        </section>

        <section className="page-section">
          <h2>Why is my plan locked?</h2>
          <p>
            Some plans require payment. Complete payment to unlock exercises and
            personalized plans.
          </p>
        </section>

        <section className="page-section">
          <h2>How does payment work?</h2>
          <p>
            Payments are handled securely via Razorpay. We do not store payment
            details.
          </p>
        </section>

        <section className="page-section">
          <h2>Can I cancel my subscription?</h2>
          <p>
            Yes, you can cancel anytime. Access remains until the billing period
            ends.
          </p>
        </section>

        <section className="page-section">
          <h2>Who should I contact for support?</h2>
          <p>Email us at amankumawat4507@gmail.com</p>
        </section>
      </div>
    </div>
  );
};

export default FAQs;
