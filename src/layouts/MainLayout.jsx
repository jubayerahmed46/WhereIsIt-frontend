import { Outlet } from "react-router";
import NavBar from "../components/common/NavBar";
import Footer from "../components/common/Footer";
import { Toaster } from "react-hot-toast";

function MainLayout() {
  return (
    <div>
      <div className="mx-auto max-w-7xl lg:px-14 md:px-6 px-4">
        <NavBar />
        <main className=" px-4 py-6 sm:px-6 lg:px-8 min-h-96">
          <Outlet />
        </main>
      </div>
      <Footer />
      <Toaster position="top-right" reverseOrder={true} />
    </div>
  );
}

export default MainLayout;
