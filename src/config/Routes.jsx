import {
  BrowserRouter,
  Route,
  Routes,
  MainLayout,
  AuthLayout,
  Login,
  Signup,
  Home,
} from ".";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" index={true} element={<Home />} />
          <Route path="lost-and-found" element={<h2>posts</h2>} />
          <Route path="auth" element={<AuthLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
