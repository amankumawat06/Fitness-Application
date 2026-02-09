import { NavLink, Outlet } from "react-router-dom";
import {
  FaChartLine,
  FaUserPlus,
  FaDumbbell,
  FaUsers,
  FaUser
} from "react-icons/fa";

const AdminDashboard = () => {
  return (
    <div className="admin-wrapper">
      <aside className="admin-sidebar icon-sidebar">
        
        <NavLink to="/admin/dashboard" className="side-item">
          <span className="icon"><FaChartLine className="icon" /></span>
          <span className="label">Dashboard</span>
        </NavLink>

        <NavLink to="/admin/create-trainer" className="side-item">
          <span className="icon"><FaUserPlus className="icon" /></span>
          <span className="label">Create Trainer</span>
        </NavLink>

        <NavLink to="/admin/trainers" className="side-item">
          <span className="icon"><FaDumbbell className="icon" /></span>
          <span className="label">Trainers List</span>
        </NavLink>

        <NavLink to="/admin/members" className="side-item">
          <span className="icon"><FaUsers className="icon" /></span>
          <span className="label">Members List</span>
        </NavLink>
        <NavLink to="/admin/profile" className="side-item">
          <span className="icon"><FaUser className="icon" /></span>
          <span className="label">Profile</span>
        </NavLink>

      </aside>

      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminDashboard;
