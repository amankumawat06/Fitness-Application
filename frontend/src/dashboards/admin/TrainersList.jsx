import axios from "axios";
import { useState, useEffect } from "react";

const TrainerList = () => {
  let [allTrainers, setAllTrainers] = useState([]);

  let token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get("http://localhost:8080/admin/allTrainers", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setAllTrainers(res.data.allTrainers);
      });
  }, []);

  return (
    <div className="p-4 data-section">
      <h3 className="section-title">Trainers</h3>
     <div className="table-scroll">
      <div className="table-card">
        <div className="table-head table-cols-4">
          <span>Name</span>
          <span>Email</span>
          <span>Specialization</span>
          <span>Status</span>
        </div>

        {allTrainers.map((trainer) => (
          <div className="table-row table-cols-4" key={trainer._id}>
            <span className="name">{trainer.name}</span>
            <span className="email">{trainer.email}</span>
            <span>{trainer.specialization}</span>
            <span className="status-badge active">Active</span>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default TrainerList;
