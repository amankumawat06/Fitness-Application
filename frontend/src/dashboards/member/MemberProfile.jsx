import { useState, useEffect } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const MemberProfile = () => {
  const [user, setUser] = useState("");
  try {
    useEffect(() => {
      let token = localStorage.getItem("token");
      axios
        .get("http://localhost:8080/member/profile", {
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
    <div className="member-profile">
      <h2 className="profile-greeting mb-4">
        Welcome to your profile, <span>{user.name}</span> 👋
      </h2>

      <p className="user-id">User ID: {user._id}</p>

      <div className="profile-row">
        <div className="profile-img">IMG</div>

        <div className="profile-fields">
          <input type="text" value={user.name} readOnly />
          <input type="email" value={user.email} readOnly />
        </div>
      </div>

      <button className="edit-btn">Edit Profile</button>
    </div>
  );
};

export default MemberProfile;
