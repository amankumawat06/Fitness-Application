import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "./member.css"

const MemberGoal = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const setGoal = async (goal) => {
    try {
      let res = await axios.post(
        "http://localhost:8080/member/set-goal",
        { goal },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      if (res.data.success) {
        toast.success(res.data.message)
        setTimeout(() =>  navigate("/member/plans") , 1500);
      }
    } catch (err) {
    toast.error(res.data.message)
    }
  };

  return (
    <div className="set-goal-wrapper">
  <h2 className="set-goal-title">Set Your Goal</h2>

  <div className="goal-options">
    <button onClick={() => setGoal("weight_loss")}>
      Weight Loss
    </button>

    <button onClick={() => setGoal("weight_gain")}>
      Weight Gain
    </button>

    <button onClick={() => setGoal("fitness")}>
      Fitness
    </button>
  </div>

  <ToastContainer />
</div>

  );
};

export default MemberGoal;
