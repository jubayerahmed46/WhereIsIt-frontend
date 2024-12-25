import { Navigate, Outlet, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";
import Spinner from "../pages/spinner/Spinner";

function PrivetRoute() {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <Spinner />;
  }

  if (user) {
    return <Outlet />;
  }

  return <Navigate to={"auth/login"} state={{ from: location.pathname }} />;
}

export default PrivetRoute;
