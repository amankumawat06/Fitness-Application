import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

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
      console.log(res);
    } catch (err) {
    toast.error(res.data.message)
      console.log(err);
    }
  };

  return (
    <div className="p-5">
      <h2>Set your Goal</h2>

      <button onClick={() => setGoal("weight_loss")}>Weight Loss</button>

      <button onClick={() => setGoal("weight_gain")}>Weight Gain</button>

      <button onClick={() => setGoal("fitness")}>Fitness</button>
      <ToastContainer />
    </div>
  );
};

export default MemberGoal;
