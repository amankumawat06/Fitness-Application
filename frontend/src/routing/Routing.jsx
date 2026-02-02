import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../landing_Page/common/Navbar";
import Footer from "../landing_Page/common/Footer";
import ProtactedRoute from "./ProtactedRoute";
import Login from "../landing_Page/authentication/Login";
import Signup from "../landing_Page/authentication/Signup";
const Routing = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route
          path="/admin/dashboard"
          element={
            <ProtactedRoute allowedRoles={["admin"]}>
              <h2>Welcome to Admin Dashboard</h2>
            </ProtactedRoute>
          }
        ></Route>
        <Route
          path="/trainer/dashboard"
          element={
            <ProtactedRoute allowedRoles={["trainer"]}>
              <h2>Welcome to Trainer Dashboard</h2>
            </ProtactedRoute>
          }
        ></Route>
        <Route
          path="/member/dashboard"
          element={
            <ProtactedRoute allowedRoles={["member"]}>
              <h2>Welcome to Member Dashboard</h2>
            </ProtactedRoute>
          }
        ></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Routing;
