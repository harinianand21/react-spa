import { Link, Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
  <div className="page-container">
    <h1>Dashboard</h1>

    <div className="dashboard-nav">
      <Link to="profile">Profile</Link>
      <Link to="settings">Settings</Link>
      <Link to="notifications">Notifications</Link>
    </div>

    <Outlet />
  </div>
);
}
