import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../landing_Page/common/Navbar";
import Footer from "../landing_Page/common/Footer";
import Login from "../landing_Page/authentication/Login";
import Signup from "../landing_Page/authentication/Signup";
import Home from "../landing_Page/components/home/HomePage";
import About from "../landing_Page/components/about/AboutHome";
import Features from "../landing_Page/components/features/FeaturesHome";
import Plans from "../landing_Page/components/plans/PlansHome";
import Reviews from "../landing_Page/components/reviews/ReviewsHome";
//Protacted Routes
import ProtactedRoute from "./ProtactedRoute";
import AdminDashboard from "../dashboards/admin/AdminDashboard";
import DashboardHome from "../dashboards/admin/DashboardHome";
import CreateTrainer from "../dashboards/admin/CreateTrainer";
import TrainersList from "../dashboards/admin/TrainersList";
import MembersList from "../dashboards/admin/MembersList";
import TrainerDashboard from "../dashboards/trainer/TrainerDashboard";
import TrainerDashboardMembers from "../dashboards/trainer/MemberList"

import MemberDashboard from "../dashboards/member/MemberDashboard"
import MemberProfile from "../dashboards/member/MemberProfile";
import MemberGoal from "../dashboards/member/MemberGoal";
import MemberPlans from "../dashboards/member/MemberPlans";
import Dashboard from "../dashboards/member/Dashboard";

import PageNotFound from "../PageNotFound";

const Routing = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route
          path="/member"
          element={
            <ProtactedRoute allowedRoles={["member"]}>
              <MemberDashboard />
            </ProtactedRoute>
          }
        >
          <Route path="profile" element={<MemberProfile />} />
          <Route path="goal" element={<MemberGoal />} />
          <Route path="plans" element={<MemberPlans />} />
          <Route path="selected-goal" element={<Dashboard />} />
        </Route>

        <Route
          path="/trainer"
          element={
            <ProtactedRoute allowedRoles={["trainer"]}>
              <TrainerDashboard />
            </ProtactedRoute>
          }
        >
          <Route path="members" element={<TrainerDashboardMembers />} />
        </Route>

        <Route
          path="/admin"
          element={
            <ProtactedRoute allowedRoles={["admin"]}>
              <AdminDashboard />
            </ProtactedRoute>
          }
        >
          <Route path="dashboard" element={<DashboardHome />} />
          <Route path="create-trainer" element={<CreateTrainer />} />
          <Route path="trainers" element={<TrainersList />} />
          <Route path="members" element={<MembersList />} />
        </Route>
          <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Routing;
