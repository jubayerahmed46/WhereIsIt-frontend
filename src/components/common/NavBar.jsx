import { Link, NavLink } from "react-router";
import Button1 from "./btns/Button1";
import { useState } from "react";
import { motion } from "framer-motion";
import useAuth from "../../hooks/useAuth";
import LogoutUser from "../../pages/authentication/LogoutUser";
import ProfileImageValidate from "./ProfileImageValidate";

function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const { user } = useAuth();
  const [validImageUrl, setValidImageUrl] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleImageError = () => {
    setValidImageUrl(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Framer Motion Variants
  const fadeIn = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const slideIn = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const dropdownAnimation = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      className="min-h-full"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <nav className="bg-[#101828] py-2">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <motion.div className="flex items-center" initial="hidden">
              <div className="shrink-0 hover:bg-gray-800/95 transition-all active:scale-95 pb-1 px-2 rounded-lg">
                <Link to={"/"}>
                  <img className="h-10" src="/logo.png" alt="Your Company" />
                </Link>
              </div>
              <div className="hidden md:block">
                <motion.div
                  className="ml-10 flex items-baseline space-x-4"
                  initial="hidden"
                  animate="visible"
                  variants={fadeIn}
                >
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `rounded-md ${
                        isActive
                          ? "bg-gray-900 text-white"
                          : "hover:bg-gray-700 hover:text-white"
                      } px-3 py-2 text-gray-200 text-sm font-medium`
                    }
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to="lost-and-found"
                    className={({ isActive }) =>
                      `rounded-md ${
                        isActive
                          ? "bg-gray-900 text-white"
                          : "hover:bg-gray-700 hover:text-white"
                      } px-3 py-2 text-gray-200 text-sm font-medium`
                    }
                  >
                    Lost & Found Items
                  </NavLink>
                  <NavLink
                    to="reviews"
                    className={({ isActive }) =>
                      `rounded-md ${
                        isActive
                          ? "bg-gray-900 text-white"
                          : "hover:bg-gray-700 hover:text-white"
                      } px-3 py-2 text-gray-200 text-sm font-medium`
                    }
                  >
                    Our Reviews
                  </NavLink>
                </motion.div>
              </div>
            </motion.div>
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
                            <motion.span
                              className="absolute top-7 right-5 bg-gray-800 text-white rounded-md p-2 text-nowrap"
                              initial="hidden"
                              animate="visible"
                              variants={fadeIn}
                            >
                              {user?.displayName}
                            </motion.span>
                          )}
                        </div>
                        {showDropdown && (
                          <motion.div
                            className="absolute right-0 z-30 mt-2 w-72 flex-col rounded-md bg-white shadow-lg"
                            initial="hidden"
                            animate="visible"
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
                          </motion.div>
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
          <motion.div
            className="md:hidden px-2 pb-3 pt-2 sm:px-3"
            initial="hidden"
            animate="visible"
            variants={slideIn}
          >
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
          </motion.div>
        )}
      </nav>
    </motion.div>
  );
}

export default NavBar;
