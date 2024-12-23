import {
  BrowserRouter,
  Route,
  Routes,
  MainLayout,
  AuthLayout,
  Login,
  Signup,
  Home,
  PrivetRoute,
  AddItem,
} from ".";
import PostDefails from "../pages/post-details/PostDetails";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" index={true} element={<Home />} />
          <Route path="lost-and-found" element={<h2>posts</h2>} />
          {/* Protected Route */}
          <Route element={<PrivetRoute />}>
            <Route path="add-item" element={<AddItem />}></Route>
          </Route>
          <Route element={<PrivetRoute />}>
            <Route path="posts/:id" element={<PostDefails />} />
          </Route>
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
