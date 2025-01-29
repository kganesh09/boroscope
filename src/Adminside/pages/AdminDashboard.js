import React, { useEffect, useState } from "react";
import { useAuth } from "../../AuthContext";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const [data, setData] = useState(null);
  const { logout } = useAuth();
  const navigate = useNavigate();
  const API_BASE_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("adminToken");

      try {
        const response = await fetch(`${API_BASE_URL}/admin/dashboard`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status === 401) {
          logout();
          navigate("/admin/login");
        }

        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Failed to fetch data:", error.message);
      }
    };

    fetchData();
  }, [logout, navigate]);

  const handleLogout = () => {
    logout();
    navigate("/admin/login");
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default AdminDashboard;
