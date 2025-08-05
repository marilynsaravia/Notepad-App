import { useEffect, useState } from "react";
import { getImageNavbar } from "../utils";
import { FiMoon, FiSun, FiSearch } from "react-icons/fi";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Read dark mode setting from localStorage (if it exists)
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const handleToggle = () => setIsDarkMode(!isDarkMode);

  return (
    <div className="w-full h-auto py-4 px-4 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
      <img
        className="w-[120px] md:w-[150px]"
        src={getImageNavbar(isDarkMode ? "dark-logo.png" : "logo.png")}
        alt="Notepad App Logo"
      />

      {/* Search bar */}
      <div className="relative w-full md:w-[700px]">
        <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
          <FiSearch />
        </span>
        <input
          type="text"
          placeholder="Search for title"
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-5 py-2 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded-full text-base focus:outline-none focus:ring-1 focus:ring-violet-400"
        />
      </div>

      {/* Dark mode toggle */}
      <div className="flex items-center">
        <label htmlFor="theme-toggle" className="flex items-center cursor-pointer">
          <div className="relative">
            <input
              type="checkbox"
              id="theme-toggle"
              className="sr-only"
              checked={isDarkMode}
              onChange={handleToggle}
            />
            <div className="w-10 h-5 bg-gray-200 dark:bg-gray-600 rounded-full shadow-inner" />
            <div
              className={`dot absolute top-0 w-5 h-5 rounded-full transition-transform duration-300 ${
                isDarkMode ? "translate-x-full bg-yellow-400" : "bg-violet-500"
              }`}
            />
          </div>
          <span className="ml-3 text-sm text-gray-700 dark:text-gray-200">
            {isDarkMode ? (
              <FiSun className="inline-block text-xl" />
            ) : (
              <FiMoon className="inline-block text-xl" />
            )}
          </span>
        </label>
      </div>
    </div>
  );
};

export default Navbar;
