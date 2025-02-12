import { useEffect, useState } from "react";
import { IoMdSettings } from "react-icons/io";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

function Theme() {
  const [showCard, setShowCard] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.body.classList.add("bg-[#0e0e0f]");
    } else {
      document.documentElement.classList.remove("dark");
      document.body.classList.remove("bg-[#0e0e0f]");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="fixed z-50 bottom-4 right-4">
      {/* Settings Button */}
      <button
        className="bg-white dark:bg-black/75 p-2 rounded-full shadow-xl border-2"
        onClick={() => setShowCard((prev) => !prev)}
      >
        <IoMdSettings className="text-black text-2xl animate-[spin_6s_ease-in-out_infinite] dark:text-white" />
      </button>

      {/* Theme Toggle Card */}
      {showCard && (
        <div className="absolute bottom-12 p-3 right-0 bg-white dark:bg-black dark:text-white rounded-md shadow-md">
          <label className="swap swap-rotate rounded-full">
            {/* This hidden checkbox controls the state */}
            <input
              type="checkbox"
              checked={theme === "dark"}
              onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
            />

            {/* Light Mode Icon */}
            <MdOutlineLightMode className="swap-on text-4xl text-yellow-500" />

            {/* Dark Mode Icon */}
            <MdOutlineDarkMode className="swap-off text-4xl text-gray-800 dark:text-white" />
          </label>
        </div>
      )}
    </div>
  );
}

export default Theme;
