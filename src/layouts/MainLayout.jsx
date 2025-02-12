import { Outlet } from "react-router";
import NavBar from "../components/common/NavBar";
import Footer from "../components/common/Footer";
import { Toaster } from "react-hot-toast";
import Theme from "../components/Theme";

function MainLayout() {
  return (
    <div className="relative dark:bg-[#0e0e0f] dark:text-white">
      <NavBar />
      <div>
        {/* mx-auto max-w-7xl lg:px-9 md:px-5 px-3  */}
        <main className=" min-h-96">
          <Outlet />
        </main>
      </div>
      <Footer />
      <Toaster position="top-right" reverseOrder={true} />
      <Theme />
    </div>
  );
}

export default MainLayout;
