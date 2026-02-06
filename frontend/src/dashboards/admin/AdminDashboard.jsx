import { NavLink, Outlet } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="admin-wrapper">
      <aside className="admin-sidebar">
        <h2 className="admin-logo">Admin Panel</h2>
          <NavLink to="/admin/dashboard">Dashboard</NavLink>
          <NavLink to="/admin/create-trainer">Create Trainer</NavLink>
          <NavLink to="/admin/trainers">Trainers List</NavLink>
          <NavLink to="/admin/members">Members List</NavLink>
      </aside>

      <main style={{ flex: 1, borderLeft:"2px solid #00ff99"}}>
        <Outlet />
      </main>

    </div>
  );
};

export default AdminDashboard;

