import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const MemberPlans = () => {
  const [plans, setPlans] = useState([]);
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
        console.log(res.data)
      });
  }, []);


  const selectPlan  = async (planId) => {
    try{
      let res = await axios.post("http://localhost:8080/member/select-plan",
      {planId},
      {
        headers:{
          Authorization:`Bearer ${token}`
        }
      }
    ).then((res) =>{
      console.log(res)
      toast.success(res.data.message)
    })
    }catch(err){
      toast.error(err)
    }
  }

  return (
    <div className="p-5">
      <h2>Choose Your Plan</h2>

      {plans.map((plan) => (
        <div className="plan-card" key={plan._id}>
          <h4>{plan.planName}</h4>
          <p>Duration:{plan.duration}</p>
          <button onClick={() => selectPlan(plan._id)}>Select Plan</button>
        </div>
      ))}
      <ToastContainer />
    </div>
  );
};

export default MemberPlans;
