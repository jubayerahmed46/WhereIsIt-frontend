import { Navigate, Outlet, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";

function PrivetRoute() {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <h2>Loading......</h2>;
  }

  if (user) {
    return <Outlet />;
  }

  return <Navigate to={"auth/login"} state={{ from: location.pathname }} />;
}

export default PrivetRoute;
