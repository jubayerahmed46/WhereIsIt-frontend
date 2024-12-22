import {
  BrowserRouter,
  Route,
  Routes,
  MainLayout,
  AuthLayout,
  Login,
  Signup,
} from ".";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" index={true} element={<h2>home</h2>} />
          <Route path="lost&found" element={<h2>posts</h2>} />
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
