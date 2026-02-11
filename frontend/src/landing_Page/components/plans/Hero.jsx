import { Link } from "react-router-dom";
import axios from "axios";

const Hero = () => {

   const handlePayment = async (plan) => {

    const token = localStorage.getItem("token")

    if(!token){
      localStorage.setItem("redirectAfterLogin", "/plans")
      localStorage.setItem("selectedPlan", plan)

      window.location.href = "/login"
      return;
    }

    try {
      const { data } = await axios.post(
        "https://fitness-application-three.vercel.app/api/payment/create-order",
        {
          planName: plan
        }
      );

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: data.amount,
        currency: data.currency,
        order_id: data.orderId,
        name: "FitTrack",
        description: `Payment for ${plan} plan`,

        method:{
          upi: true,
          card: true,
          netbanking: true,
          wallet: true,
          paylater: true,
        },

        handler: function (response) {
          localStorage.setItem("paymentToken", "paiduser67gh7");

          setTimeout(() =>  window.location.href = "/member/selected-goal"  , 200);
        },
        theme: {
          color: "#00ff88",
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();

    } catch (err) {
      console.error(err);
      alert("Payment failed");
    }
  };

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

              {/* <Link to="/login"> */}
                <button className="plan-btn" onClick={() => handlePayment("Basic")}>Get Started</button>
              {/* </Link> */}
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

              {/* <Link to="/login"> */}
                <button className="plan-btn primary" onClick={() => handlePayment("Pro")}>Join Pro</button>
              {/* </Link> */}
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

              {/* <Link to="/login"> */}
                <button className="plan-btn" onClick={() => handlePayment("Premium")}>Go Premium</button>
              {/* </Link> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
