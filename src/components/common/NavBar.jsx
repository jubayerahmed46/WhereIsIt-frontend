import { Link, NavLink } from "react-router";
import Button1 from "./btns/Button1";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import LogoutUser from "../../pages/authentication/LogoutUser";
import ProfileImageValidate from "./ProfileImageValidate";
import { TfiClose, TfiMenu } from "react-icons/tfi";

function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const { user } = useAuth();
  const [validImageUrl, setValidImageUrl] = useState(true);

  const [hidden, setHidden] = useState(false);
  let lastScrollY = window.scrollY;
  const fixedThreshold = 300;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      if (window.scrollY > lastScrollY && window.scrollY > fixedThreshold) {
        setHidden(true); // Hide navbar when scrolling down
      } else {
        setHidden(false); // Show navbar when scrolling up
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleImageError = () => {
    setValidImageUrl(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const links = [
    { id: 23423, label: "Home", path: "/" },
    { id: 26423, label: "Lost & Found Items", path: "lost-and-found" },
    { id: 83423, label: " Our Reviews", path: "reviews" },
  ];

  if (user) {
    links.push(
      { id: 33423, label: "Post Item", path: "add-item" },
      { id: 53423, label: " My Recoveries Items", path: "my-recovered-posts" },
      { id: 363423, label: " Manage My Items", path: "manage-my-posts" }
    );
  }
  links.push({ id: 363423, label: " Contact Us", path: "contact" });

  return (
    <nav
      // className={` text-white py-2 z-50 transition-all duration-500 ${
      //   hidden ? "relative w-full  -top-24" : "fixed w-full  top-0"
      // }`}
      className={`fixed top-0 w-full   transition-transform duration-300 z-50 text-white  md:py-0 ${
        hidden ? "-translate-y-full" : "translate-y-0 bg-[#003366] "
      } `}
    >
      <div className="mx-auto max-w-7xl lg:px-9 md:px-5 px-3 md:py-0 py-4">
        <div>
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-between  w-full">
              <div className="pb-1 px-2 text-xl font-bold">
                <Link to={"/"}>
                  {/* <img className="h-10" src="/logo.png" alt="Your Company" /> */}
                  WhereIsIt
                </Link>
              </div>
              {/* links, logout and others */}
              <div className="hidden md:flex items-center">
                <div className=" flex items-baseline space-x-4">
                  {links.map((link) => (
                    <NavLink
                      key={link.id}
                      to={link.path}
                      className={({ isActive }) =>
                        `rounded-md -tracking-wide py-8 transition-all duration-200 ${
                          isActive
                            ? "text-[#FB8C00] hover:bg-[#cc0000] hover:text-white font-semibold"
                            : "hover:bg-[#cc0000]"
                        } px-3 py-2 uppercase text-xs rounded-none h-full `
                      }
                    >
                      {link.label}
                    </NavLink>
                  ))}
                </div>
                <div className="hidden md:block">
                  <div className="ml-4 flex items-center md:ml-6">
                    {user ? (
                      <>
                        <LogoutUser />
                        <div className="relative ml-3">
                          <div>
                            <div
                              onMouseOver={() => setShowTooltip(true)}
                              onMouseOut={() => setShowTooltip(false)}
                              className={`cursor-pointer flex items-center rounded-full bg-gray-800 text-sm `}
                            >
                              <ProfileImageValidate
                                validImageUrl={validImageUrl}
                                handleImageError={handleImageError}
                                user={user}
                              />
                              {showTooltip && (
                                <span className="absolute top-7 right-5 bg-gray-800 text-white rounded-md p-2 text-nowrap">
                                  {user?.displayName}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </>
                    ) : (
                      <Link to="auth/login">
                        <Button1 className={"text-white"}>Login</Button1>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="p-2 transition-all duration-150"
              >
                {mobileMenuOpen ? (
                  <TfiClose className="text-xl font-bold" />
                ) : (
                  <TfiMenu className="text-xl" />
                )}
              </button>
            </div>
          </div>
        </div>
        {
          <div
            className={`px-2 pb-3 pt-2 sm:px-3  flex ${
              mobileMenuOpen ? "h-auto" : "hidden"
            } `}
          >
            <div className=" flex flex-col w-full">
              {links.map((link) => (
                <NavLink
                  onClick={() => setMobileMenuOpen(false)}
                  key={link.id}
                  to={link.path}
                  className={({ isActive }) =>
                    `rounded-md -tracking-wide py-3 transition-all duration-200 ${
                      isActive
                        ? "text-[#FB8C00] hover:bg-[#cc0000] hover:text-white font-semibold"
                        : "hover:bg-[#cc0000]"
                    } px-3 py-2 uppercase text-xs rounded-none w-full `
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>
        }
      </div>
    </nav>
  );
}

export default NavBar;
