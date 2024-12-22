import { BrowserRouter, Route, Routes, MainLayout } from ".";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" index={true} element={<h2>home</h2>} />
          <Route path="lost&found" element={<h2>posts</h2>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
