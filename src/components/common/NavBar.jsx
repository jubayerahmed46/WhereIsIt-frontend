import { Link, NavLink } from "react-router";
import Button1 from "./btns/Button1";
import { useState } from "react";
import { motion } from "framer-motion";

function NavBar() {
  const [showToltip, setShowToltip] = useState(false);
  return (
    <>
      <div className="min-h-full">
        <nav className="bg-gray-800 py-2">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <div className="shrink-0">
                  <img className="h-10" src="/logo.png" alt="Your Company" />
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    <NavLink
                      to={"/"}
                      className={({ isActive }) =>
                        `rounded-md ${
                          isActive
                            ? "bg-gray-900 text-white"
                            : "hover:bg-gray-700 hover:text-white"
                        } px-3 py-2 text-gray-200 text-sm font-medium `
                      }
                    >
                      Home
                    </NavLink>
                    <NavLink
                      to={"lost&found"}
                      className={({ isActive }) =>
                        `rounded-md ${
                          isActive
                            ? "bg-gray-900 text-white"
                            : "hover:bg-gray-700 hover:text-white"
                        } px-3 py-2 text-gray-200 text-sm font-medium `
                      }
                    >
                      Lost & Found Items
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6">
                  {false ? (
                    <>
                      <Button1
                        className={
                          " focus:ring-gray-400 hover:bg-gray-700/80 bg-gray-700/90"
                        }
                      >
                        Logout
                      </Button1>
                      {/* Profile dropdown */}
                      <div className="relative ml-3">
                        <details>
                          <summary
                            onMouseOver={() => setShowToltip(true)}
                            onMouseOut={() => setShowToltip(false)}
                            type="button"
                            className="cursor-pointer relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                            id="user-menu-button"
                            aria-expanded="false"
                            aria-haspopup="true"
                          >
                            <img
                              className="size-8 rounded-full"
                              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                              alt=""
                            />
                            {showToltip && (
                              <motion.span className=" absolute z-20 top-7 right-5 bg-gray-800 text-white rounded-md p-2 text-nowrap">
                                Jubayer Ahmed
                              </motion.span>
                            )}
                          </summary>

                          <div
                            className="absolute right-0 z-30 mt-2 w-72 flex flex-col rounded-md bg-white  shadow-lg ring-1 ring-black/5 focus:outline-none"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="user-menu-button"
                            tabIndex={-1}
                          >
                            <div className="w-[80%] flex-col flex mx-auto py-8">
                              <NavLink
                                to={"/"}
                                className={({ isActive }) =>
                                  `rounded-md ${
                                    isActive
                                      ? "bg-gray-900 text-white"
                                      : "hover:bg-gray-700 hover:text-white"
                                  } px-3 py-2  text-sm font-medium `
                                }
                              >
                                Add Lost & Found Item
                              </NavLink>
                              <NavLink
                                to={"lost&found"}
                                className={({ isActive }) =>
                                  `rounded-md ${
                                    isActive
                                      ? "bg-gray-900 text-white"
                                      : "hover:bg-gray-700 hover:text-white"
                                  } px-3 py-2  text-sm font-medium `
                                }
                              >
                                All Recovered Items
                              </NavLink>
                              <NavLink
                                to={"all-recovered-items"}
                                className={({ isActive }) =>
                                  `rounded-md ${
                                    isActive
                                      ? "bg-gray-900 text-white"
                                      : "hover:bg-gray-700 hover:text-white"
                                  } px-3 py-2  text-sm font-medium `
                                }
                              >
                                Manage My Items
                              </NavLink>
                            </div>
                          </div>
                        </details>
                      </div>
                    </>
                  ) : (
                    <Link to={"auth/login"}>
                      <Button1>Login</Button1>
                    </Link>
                  )}
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                <button
                  type="button"
                  className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className="block size-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                  <svg
                    className="hidden size-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="md:hidden" id="mobile-menu">
            <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
              <a
                href="#"
                className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
                aria-current="page"
              >
                Dashboard
              </a>
              <a
                href="#"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Team
              </a>
              <a
                href="#"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Projects
              </a>
              <a
                href="#"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Calendar
              </a>
              <a
                href="#"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Reports
              </a>
            </div>
            <div className="border-t border-gray-700 pb-3 pt-4">
              <div className="flex items-center px-5">
                <div className="shrink-0">
                  <img
                    className="size-10 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base/5 font-medium text-white">
                    Tom Cook
                  </div>
                  <div className="text-sm font-medium text-gray-400">
                    tom@example.com
                  </div>
                </div>
                <button
                  type="button"
                  className="relative ml-auto shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  Login
                </button>
              </div>
              <div className="mt-3 space-y-1 px-2">
                <a
                  href="#"
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                >
                  Your Profile
                </a>
                <a
                  href="#"
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                >
                  Settings
                </a>
                <a
                  href="#"
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                >
                  Sign out
                </a>
              </div>
            </div>
          </div>
        </nav>
        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Dashboard
            </h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            {/* Your content */}
          </div>
        </main>
      </div>
    </>
  );
}

export default NavBar;
