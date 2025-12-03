import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../Provider/AuthContext";
import { toast } from "react-toastify";
import plantLogo from "../assets/plantlogo.png";
import { Link, NavLink } from "react-router";
import { IoMdMenu } from "react-icons/io";
import { FaSun, FaMoon, FaRegMoon, FaRegSun } from "react-icons/fa";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [theme, setTheme] = useState("light");
  const isDarkMode = theme === "dark"; // Calculate isDarkMode here

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else if (systemPrefersDark) {
      setTheme("dark");
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      setTheme("light");
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, []);

  // Toggle theme function
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("You have successfully logged out!");
      })
      .catch((error) => {
        console.error(error);
        toast.error("Failed to log out");
      });
  };

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "Plants", to: "/allplants" },
    { name: "Our Services", to: "/services" },
    { name: "Blog & Tips", to: "/blog-tips" },
    { name: "Contact us", to: "/contact" },
    { name: "My Profile", to: "/myprofile" },
  ];

  return (
    <nav className="w-full bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center h-20">
        <NavLink
          to="/"
          className="flex items-center gap-2 font-bold text-2xl text-green-700 dark:text-green-400"
        >
          <img
            src={plantLogo}
            alt="GreenNest Logo"
            className="w-10 h-10 dark:invert"
          />
          GreenNest
        </NavLink>

        <ul className="hidden lg:flex items-center gap-8 font-medium text-gray-700 dark:text-gray-300">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  isActive
                    ? "text-green-600 dark:text-green-400 border-b-2 border-green-600 dark:border-green-400 pb-1 transition-all"
                    : "hover:text-green-500 dark:hover:text-green-300 transition-all"
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4 relative">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-3 rounded-xl hover:bg-base-300 transition-all duration-200 group"
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <FaRegMoon className="w-5 h-5 text-base-content group-hover:text-primary transition-colors" />
            ) : (
              <FaRegSun className="w-5 h-5 text-base-content group-hover:text-primary transition-colors" />
            )}
          </button>

          {user ? (
            <div className="dropdown dropdown-end">
              <label
                tabIndex={0}
                className="cursor-pointer flex items-center gap-2"
              >
                <img
                  src={user.photoURL || ""}
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full border-2 border-green-500 dark:border-green-400 shadow-sm"
                />
                <span className="hidden md:inline font-medium text-gray-700 dark:text-gray-300">
                  {user.displayName || "User"}
                </span>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-white dark:bg-gray-800 rounded-box w-52 mt-2"
              >
                <li>
                  <Link className="hover:bg-green-50 dark:hover:bg-gray-700 dark:text-gray-300">
                    {user.displayName}
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleLogOut}
                    className="hover:bg-red-50 dark:hover:bg-red-900 text-red-600 dark:text-red-400 font-semibold"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <div className="flex gap-2">
              <Link
                to="/auth/login"
                className="px-4 py-2 bg-green-500 text-white rounded-lg font-semibold shadow hover:bg-green-600 transition-all dark:bg-green-600 dark:hover:bg-green-700"
              >
                Login
              </Link>
              <Link
                to="/auth/register"
                className="px-4 py-2 bg-green-100 text-green-700 rounded-lg font-semibold shadow hover:bg-green-200 transition-all dark:bg-green-900 dark:text-green-300 dark:hover:bg-green-800"
              >
                Register
              </Link>
            </div>
          )}
        </div>

        <div className="lg:hidden dropdown dropdown-end">
          <label
            tabIndex={0}
            className="btn btn-ghost btn-circle dark:text-white"
          >
            <IoMdMenu size={70} />
          </label>
          <ul
            tabIndex={0}
            className="menu dropdown-content bg-white dark:bg-gray-800 shadow p-4 rounded-box w-52 mt-4 flex flex-col gap-2"
          >
            {/* Theme toggle in mobile menu */}
            <li className="flex justify-between items-center px-2 py-1">
              <span className="text-gray-700 dark:text-gray-300">Theme</span>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300"
                aria-label="Toggle theme"
              >
                {isDarkMode ? ( // Now using isDarkMode which is defined
                  <FaSun className="w-4 h-4" />
                ) : (
                  <FaMoon className="w-4 h-4" />
                )}
              </button>
            </li>

            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    isActive
                      ? "text-green-600 dark:text-green-400 font-semibold"
                      : "text-gray-700 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-300"
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
            {user ? (
              <>
                <li>
                  <span className="text-gray-700 dark:text-gray-300 px-2">
                    {user.displayName}
                  </span>
                </li>
                <li>
                  <button
                    onClick={handleLogOut}
                    className="text-red-600 dark:text-red-400 font-semibold hover:bg-red-50 dark:hover:bg-red-900 w-full text-left px-2 py-1 rounded"
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    to="/auth/login"
                    className="text-green-600 dark:text-green-400 font-semibold hover:bg-green-50 dark:hover:bg-gray-700 w-full block px-2 py-1 rounded"
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    to="/auth/register"
                    className="text-green-700 dark:text-green-300 font-semibold hover:bg-green-100 dark:hover:bg-green-900 w-full block px-2 py-1 rounded"
                  >
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;