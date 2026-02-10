import { Navigate } from "react-router-dom";

const ProtectedGoalAccess = ({ children }) => {
   const paymentToken = localStorage.getItem("paymentToken");

  if (!paymentToken) {
    return <Navigate to="/plans" replace />;
  }

  return children;
};

export default ProtectedGoalAccess;
