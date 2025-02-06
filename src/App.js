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
import AddProduct from "./Adminside/components/AddProduct";
import Enquiries from "./Adminside/components/Enquires";
import Products from "./Adminside/components/Products";
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

  // Check if the current route belongs to the user-side
  const isUserSide = !location.pathname.startsWith("/admin");

  return (
    <>
      {/* User-Side Header */}
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
        >
          {/* Nested Admin Routes */}
          <Route path="add-product" element={<AddProduct />} />
          <Route path="enquiries" element={<Enquiries />} />
          <Route path="Products" element={<Products />} />
        </Route>
      </Routes>

      {/* User-Side Floating Chat */}
      {isUserSide && <ContactChat />}
    </>
  );
}

export default App;
