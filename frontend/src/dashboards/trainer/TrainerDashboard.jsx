import { NavLink, Outlet } from "react-router-dom";
import "./style.css"

const TrainerDashboard = () => {
  return (
    <div className="wrapper">
      <aside className="sidebar">
        <h2 className="logo">Trainer Panel</h2>
          <NavLink to="/trainer/members">Members List</NavLink>
      </aside>

      <main style={{ flex: 1, borderLeft:"2px solid #00ff99"}}>
        <Outlet />
      </main>

    </div>
  );
};

export default TrainerDashboard;

