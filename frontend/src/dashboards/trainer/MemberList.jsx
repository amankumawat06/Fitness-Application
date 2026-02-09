import axios from "axios";
import { useState, useEffect } from "react";
import "./trainer.css"

const MembersList = () => {
  const [allMembers, setAllMembers] = useState([]);

  let token = localStorage.getItem("token");
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/tariner/members", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setAllMembers(res.data.allMembers);
      });
  }, []);

  return (
    <>
    <div className="p-4 data-section">
      <h3 className="section-title">Members</h3>
    <div className="table-scroll">
      <div className="table-card">
        <div className="table-head table-cols-3">
          <span>Name</span>
          <span>Email</span>
          <span>Status</span>
        </div>

        {allMembers.map((member) => (
          <div className="table-row table-cols-3" key={member._id}>
            <span className="name">{member.name}</span>
            <span className="email">{member.email}</span>
            <span className="status-badge active">Active</span>
          </div>
        ))}
      </div>
      </div>
    </div>
    </>
  );
};

export default MembersList;
