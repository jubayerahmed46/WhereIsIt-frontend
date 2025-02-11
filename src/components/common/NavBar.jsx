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
  const [showDropdown, setShowDropdown] = useState(false);
  const [scroll, setScroll] = useState(false);

  const initializeState = window.scrollY;

  useState(() => {
    if (window.scrollY > initializeState) {
      setScroll(true);
    } else {
      setScroll(false);
    }
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

  return (
    <nav className="">
      <div>
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center justify-between  w-full">
            <div className="pb-1 px-2 text-xl font-bold">
              <Link to={"/"}>
                {/* <img className="h-10" src="/logo.png" alt="Your Company" /> */}
                WhereIsIt
              </Link>
            </div>
            {/* links, logout and others */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {links.map((link) => (
                  <NavLink
                    key={link.id}
                    to={link.path}
                    className={({ isActive }) =>
                      `rounded-md ${
                        isActive ? "bg-gray-900 text-white" : "text-secondColor"
                      } px-3 py-2 uppercase text-xs font-semibold`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
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
                              className={`cursor-pointer flex items-center rounded-full bg-gray-800 text-sm ${
                                showDropdown && "ring ring-gray-300"
                              }`}
                              onClick={() => setShowDropdown((prev) => !prev)}
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
                            {showDropdown && (
                              <div
                                className="absolute right-0 z-30 mt-2 w-72 flex-col rounded-md bg-white shadow-lg"
                                variants={dropdownAnimation}
                              >
                                <div className="flex flex-col mx-auto py-8 w-[80%]">
                                  <NavLink
                                    to="add-item"
                                    onClick={() => setShowDropdown(false)}
                                    className={({ isActive }) =>
                                      `rounded-md ${
                                        isActive
                                          ? "bg-gray-900 text-white"
                                          : "hover:bg-gray-700 hover:text-white"
                                      } px-3 py-2 text-sm font-medium`
                                    }
                                  >
                                    Add Lost or Found Item
                                  </NavLink>
                                  <NavLink
                                    onClick={() => setShowDropdown(false)}
                                    to="/my-recovered-posts"
                                    className={({ isActive }) =>
                                      `rounded-md ${
                                        isActive
                                          ? "bg-gray-900 text-white"
                                          : "hover:bg-gray-700 hover:text-white"
                                      } px-3 py-2 text-sm font-medium`
                                    }
                                  >
                                    My Recoveries Items
                                  </NavLink>
                                  <NavLink
                                    onClick={() => setShowDropdown(false)}
                                    to="/manage-my-posts"
                                    className={({ isActive }) =>
                                      `rounded-md ${
                                        isActive
                                          ? "bg-gray-900 text-white"
                                          : "hover:bg-gray-700 hover:text-white"
                                      } px-3 py-2 text-sm font-medium`
                                    }
                                  >
                                    Manage My Items
                                  </NavLink>
                                </div>
                              </div>
                            )}
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
    </nav>
  );
}

export default NavBar;
