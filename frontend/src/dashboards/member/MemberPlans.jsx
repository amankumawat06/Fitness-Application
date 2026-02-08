import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "./member.css"

const MemberPlans = () => {
  const [plans, setPlans] = useState([]);
  const navigate = useNavigate()
  let token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get("http://localhost:8080/member/plans", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setPlans(res.data.plans);
        console.log(res.data);
      });
  }, []);

  const selectPlan = async (planId) => {
    try {
      let res = await axios
        .post(
          "http://localhost:8080/member/select-plan",
          { planId },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        )
        .then((res) => {
          toast.success(res.data.message);
          setTimeout(() => navigate("/member/selected-goal"), 1300);
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
