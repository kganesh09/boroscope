import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./userside/CommonElement/header";  
import Home from "./userside/pages/home";
import Service from "./userside/pages/Service";
import About from "./userside/pages/AboutUs";
import Product from "./userside/pages/Product";
import ContactChat from "./userside/CommonElement/ContactChat";
import AdminLogin from "./Adminside/pages/AdminLogin";
import AdminDashboard from "./Adminside/pages/AdminDashboard";
import ProtectedRoute from "./ProtectRoutes";
import { AuthProvider } from "./AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Content />
      </Router>
    </AuthProvider>
  );
}

function Content() {
  const location = useLocation();

  // Conditional rendering for user-side components
  const isUserSide = !location.pathname.startsWith("/admin");

  return (
    <>
      {isUserSide && <Header />}
      <Routes>
        {/* User-Side Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />

        {/* Admin-Side Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
      {isUserSide && <ContactChat />}
    </>
  );
}

export default App;
