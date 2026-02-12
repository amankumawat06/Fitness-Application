import { NavLink, Outlet } from "react-router-dom";
import "./member.css";
import { FaUser, FaBullseye, FaClipboardList, FaFireAlt } from "react-icons/fa";
import { GiWeightScale } from "react-icons/gi";

const TrainerDashboard = () => {
  let paymentToken = localStorage.getItem("paymentToken")
  return (
    <div className="wrapper">
      <aside className="sidebar icon-sidebar">
        <NavLink to="/member/profile" className="side-item">
          <span className="icon">
            <FaUser className="icon" />
          </span>
          <span className="label">Profile</span>
        </NavLink>

        <NavLink to="/member/goal" className="side-item">
          <span className="icon">
            <FaBullseye className="icon" />
          </span>
          <span className="label">Goal</span>
        </NavLink>

        <NavLink to="/member/plans" className="side-item">
          <span className="icon">
            {" "}
            <FaClipboardList className="icon" />
          </span>
          <span className="label">Plans</span>
        </NavLink>

        <NavLink to="/member/selected-goal" className="side-item">
          <span className="icon">
            <FaFireAlt className="icon" />
          </span>
          <span className="label">Your Plan</span>
        </NavLink>
        <NavLink to="/member/bmi" className="side-item">
          <span className="icon">
            <GiWeightScale className="icon" />
          </span>
          <span className="label">Check BMI</span>
        </NavLink>
      </aside>

      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default TrainerDashboard;
