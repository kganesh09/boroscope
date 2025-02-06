import React from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../AuthContext";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/admin/login");
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <h3>Admin Panel</h3>
        </div>
        <nav className="sidebar-nav">
          <ul>
            <li>
              <NavLink to="Products" activeClassName="active">
                products
              </NavLink>
            </li>
            <li>
              <NavLink to="add-product" activeClassName="active-link">
                Add Product
              </NavLink>
            </li>
            <li>
              <NavLink to="enquiries" activeClassName="active-link">
                Enquiries
              </NavLink>
            </li>
            <li>
              <button className="logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminDashboard;
