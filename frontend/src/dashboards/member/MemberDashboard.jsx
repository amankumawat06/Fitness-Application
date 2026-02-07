import { NavLink, Outlet } from "react-router-dom";
import "./style.css"

const TrainerDashboard = () => {
  return (
    <div className="wrapper">
      <aside className="sidebar">
        <h2 className="logo">Member Panel</h2>
          <NavLink to="/member/profile">Profile</NavLink>
          <NavLink to="/member/goal">Goal</NavLink>
          <NavLink to="/member/plans">Plans</NavLink>
      </aside>

      <main style={{ flex: 1, borderLeft:"2px solid #00ff99"}}>
        <Outlet />
      </main>

    </div>
  );
};

export default TrainerDashboard;