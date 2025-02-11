import { Outlet } from "react-router";
import NavBar from "../components/common/NavBar";
import Footer from "../components/common/Footer";
import { Toaster } from "react-hot-toast";

function MainLayout() {
  return (
    <div className="relative">
      <NavBar />
      <div>
        {/* mx-auto max-w-7xl lg:px-9 md:px-5 px-3  */}
        <main className=" min-h-96">
          <Outlet />
        </main>
      </div>
      <Footer />
      <Toaster position="top-right" reverseOrder={true} />
    </div>
  );
}

export default MainLayout;
