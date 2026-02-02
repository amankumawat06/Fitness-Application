import { NavLink, Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      
      {/* Sidebar */}
      <aside style={{ width: "220px", background: "#111", color: "#fff", padding: "20px" }}>
        <h3>Admin Panel</h3>
        <nav style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <NavLink to="/admin/dashboard">Dashboard</NavLink>
          <NavLink to="/admin/create-trainer">Create Trainer</NavLink>
          <NavLink to="/admin/trainers">Trainers List</NavLink>
        </nav>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, padding: "20px" }}>
        <Outlet />
      </main>

    </div>
  );
};

export default AdminLayout;
