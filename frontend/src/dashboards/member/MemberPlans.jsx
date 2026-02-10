import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "./member.css"

const MemberPlans = () => {
  const [plans, setPlans] = useState([]);
  const navigate = useNavigate()
  let token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get("https://fitness-application-three.vercel.app/api/member/plans", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setPlans(res.data.plans);
      });
  }, []);

  const selectPlan = async (planId) => {

    let paymentToken = localStorage.getItem("paymentToken")

    if(!paymentToken){
      toast.error("Make your payment first to access your plan page!")
      setTimeout(() => navigate("/plans") , 2000);
      return;
    }

    try {
      let res = await axios
        .post(
          "https://fitness-application-three.vercel.app/api/member/select-plan",
          { planId },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        )
        .then((res) => {
          toast.success(res.data.message);
            navigate("/member/selected-goal")
        });
    } catch (err) {
      toast.error(err);
    }
  };

  if (!plans) {
    return <div className="profile-loading">Loading...</div>;
  }

  return (
    <div className="Mchoose-plan-wrapper">
  <h2 className="Mchoose-plan-title">Choose Your Plan</h2>

  {plans.length > 0 ? (
    <div className="Mplans-grid">
      {plans.map((plan) => (
        <div className="Mplan-box" key={plan._id}>
          <h4>{plan.planName}</h4>
          <p>Duration: {plan.duration} months</p>

          <button onClick={() => selectPlan(plan._id)}>
            Select Plan
          </button>
        </div>
      ))}
    </div>
  ) : (
    <p className="Mno-plan-text">No plans available yet.</p>
  )}

  <ToastContainer />
</div>

  );
};

export default MemberPlans;
