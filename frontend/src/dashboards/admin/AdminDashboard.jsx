// import { NavLink, Outlet } from "react-router-dom";

// const AdminDashboard = () => {
//   return (
//     <div className="admin-wrapper">
//       <aside className="admin-sidebar">
//         <h2 className="admin-logo">Admin Panel</h2>
//           <NavLink to="/admin/dashboard">Dashboard</NavLink>
//           <NavLink to="/admin/create-trainer">Create Trainer</NavLink>
//           <NavLink to="/admin/trainers">Trainers List</NavLink>
//           <NavLink to="/admin/members">Members List</NavLink>
//       </aside>

//       <main className="main-content">
//         <Outlet />
//       </main>

//     </div>
//   );
// };

// export default AdminDashboard;

import { NavLink, Outlet } from "react-router-dom";
import {
  FaChartLine,
  FaUserPlus,
  FaDumbbell,
  FaUsers,
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

      </aside>

      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminDashboard;
