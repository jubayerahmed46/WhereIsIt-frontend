import { Link, NavLink } from "react-router";
import Button1 from "./btns/Button1";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import LogoutUser from "../../pages/authentication/LogoutUser";
import ProfileImageValidate from "./ProfileImageValidate";

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

  console.log(hidden);

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
    { id: 33423, label: "Post My Item", path: "add-item" },
    { id: 53423, label: " My Recoveries Items", path: "my-recovered-posts" },
    { id: 363423, label: " Manage My Items", path: "manage-my-posts" },
  ];

  return (
    <nav
      // className={` text-white py-2 z-50 transition-all duration-500 ${
      //   hidden ? "relative w-full  -top-24" : "fixed w-full  top-0"
      // }`}
      className={`fixed top-0 w-full  transition-transform duration-300 z-50 text-white ${
        hidden ? "-translate-y-full" : "translate-y-0 bg-[#003366] "
      } `}
    >
      <div className="mx-auto max-w-7xl lg:px-9 md:px-5 px-3">
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
                            ? "text-[#FB8C00] font-bold"
                            : "hover:bg-[#cc0000] "
                        } px-3 py-2 uppercase text-xs rounded-none h-full font-medium`
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
                className="rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white "
              >
                {mobileMenuOpen ? (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden px-2 pb-3 pt-2 sm:px-3">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block rounded-md ${
                  isActive
                    ? "bg-gray-800 text-white"
                    : "hover:bg-gray-700 hover:text-white text-white/90"
                } px-3 py-2 text-base font-medium `
              }
            >
              Home
            </NavLink>
            <NavLink
              to="lost-and-found"
              className={({ isActive }) =>
                `block rounded-md ${
                  isActive
                    ? "bg-gray-800 text-white"
                    : "hover:bg-gray-700 hover:text-white text-white/90"
                } px-3 py-2 text-base font-medium`
              }
            >
              Lost & Found Items
            </NavLink>
            <NavLink
              to="reviews"
              className={({ isActive }) =>
                `block rounded-md ${
                  isActive
                    ? "bg-gray-800 text-white"
                    : "hover:bg-gray-700 hover:text-white text-white/90"
                } px-3 py-2 text-base font-medium`
              }
            >
              Our Reviews
            </NavLink>
            {user ? (
              <>
                <NavLink
                  to="add-item"
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Add Lost or Found Item
                </NavLink>
                <NavLink
                  to="/my-recovered-posts"
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  My Recoveries Items
                </NavLink>
                <NavLink
                  to="/manage-my-posts"
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Manage My Items
                </NavLink>
                <LogoutUser />
              </>
            ) : (
              <Link to="auth/login" className="block rounded-md px-3 py-2">
                <Button1 className={"text-white"}>Login</Button1>
              </Link>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
