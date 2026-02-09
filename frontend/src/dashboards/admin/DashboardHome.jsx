import axios from "axios";
import { useState,useEffect } from "react";
import "./admin.css"

const DashboardHome = () => {

  let [totalTrainers,setTotalTrainers] = useState([])
  let [totalMembers,setTotalMembers] = useState([])
  let [totalPlans,setTotalPlans] = useState([])

  const token = localStorage.getItem("token") 
  useEffect(() => {
    axios.get("https://fitness-application-rho.vercel.app/api/admin/allTrainers",{
      headers:{
        Authorization:`Bearer ${token}`
      }
    }).then((res) => {
      setTotalTrainers(res.data.allTrainers)
    })
  },[])


  useEffect(() => {
    axios.get("https://fitness-application-rho.vercel.app/api/admin/allMembers",{
      headers:{
        Authorization:`Bearer ${token}`
      }
    }).then((res) => {
      setTotalMembers(res.data.allMembers)
    })
  },[])

  useEffect(() => {
    axios.get("https://fitness-application-rho.vercel.app/api/admin/allPlans",{
      headers:{
        Authorization:`Bearer ${token}`
      }
    }).then((res) => {
      setTotalPlans(res.data.allPlans)
    })
  },[])

  return (
    <>
      <h4 style={{padding:"15px 0 0 19px",color:"#00ff99"}}>Admin Panel</h4>
    <div className="admin-grid p-3">
      <div className="admin-card">
        <h4>Total Trainers</h4>
        <p>{totalTrainers.length}</p>
      </div>

      <div className="admin-card">
        <h4>Total Members</h4>
        <p>{totalMembers.length}</p>
      </div>

      <div className="admin-card">
        <h4>Active Plans</h4>
        <p>{totalPlans.length}</p>
      </div>
    </div>
    </>
  );
};

export default DashboardHome;
