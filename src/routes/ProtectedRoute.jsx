import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ isAuth, fallbackPath }) => {
  return !isAuth ? <Navigate to={fallbackPath} replace /> : <Outlet />;
};

export default ProtectedRoute;
