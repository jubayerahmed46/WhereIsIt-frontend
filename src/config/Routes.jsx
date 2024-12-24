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
  LostAndFoundItems,
  PostDefails,
  ManageMyPosts,
  AllRecoveredPage,
  EditPost,
} from ".";
import PageNotFound from "../pages/not-found/PageNotFound";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" index={true} element={<Home />} />
          <Route path="lost-and-found" element={<LostAndFoundItems />} />
          {/* Protected Route */}
          <Route element={<PrivetRoute />}>
            <Route path="add-item" element={<AddItem />}></Route>
          </Route>
          <Route element={<PrivetRoute />}>
            <Route path="manage-my-posts" element={<ManageMyPosts />}></Route>
          </Route>
          <Route element={<PrivetRoute />}>
            <Route
              path="my-recovered-posts"
              element={<AllRecoveredPage />}
            ></Route>
          </Route>

          <Route element={<PrivetRoute />}>
            <Route path="posts/:id" element={<PostDefails />} />
          </Route>
          <Route element={<PrivetRoute />}>
            <Route path="manage-my-posts/:id" element={<EditPost />} />
          </Route>
          <Route path="auth" element={<AuthLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
          </Route>
          {/* Catch-all Route */}
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
