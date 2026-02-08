import { NavLink, Outlet } from "react-router-dom";
import "./trainer.css"
import { FaUsers} from "react-icons/fa";

const TrainerDashboard = () => {
  return (
    <div className="wrapper">
      <aside className="sidebar icon-sidebar">
        {/* <h2 className="logo">Trainer Panel</h2> */}
          <NavLink to="/trainer/members" className="side-item">
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

export default TrainerDashboard;

