import { Helmet } from "react-helmet-async";
import { Outlet } from "react-router";

function AuthLayout() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>WhereIsIt | Authentication</title>
      </Helmet>
      <Outlet />
    </div>
  );
}

export default AuthLayout;
