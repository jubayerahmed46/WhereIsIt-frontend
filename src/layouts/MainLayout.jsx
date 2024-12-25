import { Outlet } from "react-router";
import NavBar from "../components/common/NavBar";
import Footer from "../components/common/Footer";
import { Toaster } from "react-hot-toast";

function MainLayout() {
  return (
    <div>
      <NavBar />

      <main>
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <Outlet />
        </div>
      </main>

      <Footer />
      <Toaster position="top-right" reverseOrder={true} />
    </div>
  );
}

export default MainLayout;
