import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../landing_Page/common/Navbar";
import Footer from "../landing_Page/common/Footer";
import ProtactedRoute from "./ProtactedRoute";
import Login from "../landing_Page/authentication/Login";
import Signup from "../landing_Page/authentication/Signup";
import AdminDashboard from "../dashboards/admin/AdminDashboard"
import Adminlayout from "../dashboards/admin/Adminlayout"
import CreateTrainer from "../dashboards/admin/CreateTrainer"
import TrainersList from "../dashboards/admin/TrainersList"
import HomePage from "../landing_Page/components/home/HomePage"
import AboutHome from "../landing_Page/components/about/AboutHome";
import FeaturesHome from "../landing_Page/components/features/FeaturesHome";
import Plans from "../landing_Page/components/plans/PlansHome";
import Reviews from "../landing_Page/components/reviews/ReviewsHome";

const Routing = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutHome />} />
        <Route path="/features" element={<FeaturesHome />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/reviews" element={<Reviews />} />
        
        {/* <Route
          path="/admin/dashboard"
          element={
            <ProtactedRoute allowedRoles={["admin"]}>
              <h2>Welcome to Admin Dashboard</h2>
            </ProtactedRoute>
          }
        ></Route> */}
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
        
        <Route path="/admin" 
          element={
          <ProtactedRoute allowedRoles={["admin"]}>
            <Adminlayout />
          </ProtactedRoute>
          }
        >
          <Route path="dashboard" element={<AdminDashboard/>} />
          <Route path="create-trainer" element={<CreateTrainer/>} />
          <Route path="trainers" element={<TrainersList/>} />

        </Route>

      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Routing;
