import { useState, useEffect } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const AdminProfile = () => {
  const [user, setUser] = useState("");
  try {
    useEffect(() => {
      let token = localStorage.getItem("token");
      axios
        .get("http://localhost:8080/api/admin/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setUser(res.data.user);
        });
    }, []);
  } catch (err) {
    toast.error(err);
  }

  if (!user) {
    return <div className="profile-loading">Loading Profile...</div>;
  }

  return (
    <>
    <h4 style={{color:"#00ff99", padding: "15px 0 0 19px"}}>Admin Panel</h4>
    <div className="member-profile">
      <h2 className="profile-greeting mb-4">
        Welcome, <span>{user.name}</span> 👋
      </h2>

      <p className="user-id">User ID: {user._id}</p>

      <div className="profile-row">
        <div className="profile-img">IMG</div>

        <div className="profile-fields">
          <input type="text" value={user.name} readOnly />
          <input type="email" value={user.email} readOnly />
        </div>
      </div>

      <button className="edit-btn" disabled>Edit Profile</button>
      <ToastContainer />
    </div>
    </>
  );
};

export default AdminProfile;
