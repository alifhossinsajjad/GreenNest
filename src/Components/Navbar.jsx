import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../Provider/AuthContext";
import { toast } from "react-toastify";
import plantLogo from "../assets/plantlogo.png";
import { Link, NavLink } from "react-router";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { FaSun, FaMoon, FaRegMoon, FaRegSun } from "react-icons/fa";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [theme, setTheme] = useState("light");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isDarkMode = theme === "dark";

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
      // Also add/remove dark class for Tailwind
      if (savedTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    } else if (systemPrefersDark) {
      setTheme("dark");
      document.documentElement.setAttribute("data-theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.setAttribute("data-theme", "light");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Toggle theme function
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    
    // Add/remove dark class for Tailwind
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16 md:h-20">
        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center gap-2 font-bold text-xl md:text-2xl text-green-700 dark:text-green-400"
        >
          <img
            src={plantLogo}
            alt="GreenNest Logo"
            className="w-8 h-8 md:w-10 md:h-10 dark:invert"
          />
          <span className="hidden sm:inline">GreenNest</span>
        </NavLink>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-6 lg:gap-8 font-medium text-gray-700 dark:text-gray-300">
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

        {/* Right Side Actions */}
        <div className="flex items-center gap-3 md:gap-4">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 md:p-3 rounded-lg md:rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <FaRegMoon className="w-5 h-5 md:w-6 md:h-6 text-gray-700 dark:text-gray-300" />
            ) : (
              <FaRegSun className="w-5 h-5 md:w-6 md:h-6 text-gray-700 dark:text-gray-300" />
            )}
          </button>

          {/* User/Auth Section */}
          {user ? (
            <div className="dropdown dropdown-end hidden md:block">
              <label
                tabIndex={0}
                className="cursor-pointer flex items-center gap-2"
              >
                <img
                  src={user.photoURL || ""}
                  alt="User Avatar"
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-green-500 dark:border-green-400 shadow-sm"
                />
                <span className="hidden lg:inline font-medium text-gray-700 dark:text-gray-300">
                  {user.displayName || "User"}
                </span>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-white dark:bg-gray-800 rounded-box w-48 mt-2"
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
            <div className="hidden md:flex gap-2">
              <Link
                to="/auth/login"
                className="px-3 py-1.5 md:px-4 md:py-2 bg-green-500 text-white text-sm md:text-base font-semibold rounded-lg shadow hover:bg-green-600 transition-all dark:bg-green-600 dark:hover:bg-green-700"
              >
                Login
              </Link>
              <Link
                to="/auth/register"
                className="px-3 py-1.5 md:px-4 md:py-2 bg-green-100 text-green-700 text-sm md:text-base font-semibold rounded-lg shadow hover:bg-green-200 transition-all dark:bg-green-900 dark:text-green-300 dark:hover:bg-green-800"
              >
                Register
              </Link>
            </div>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <IoMdClose className="w-6 h-6" />
            ) : (
              <IoMdMenu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-40 bg-black bg-opacity-50" onClick={() => setIsMobileMenuOpen(false)} />
        )}

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed top-16 right-0 w-64 h-[calc(100vh-4rem)] bg-white dark:bg-gray-900 shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-4 h-full overflow-y-auto">
            {/* User Info in Mobile Menu */}
            {user && (
              <div className="flex items-center gap-3 mb-6 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <img
                  src={user.photoURL || ""}
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full border-2 border-green-500 dark:border-green-400"
                />
                <div>
                  <p className="font-semibold text-gray-900 dark:text-gray-100">
                    {user.displayName || "User"}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {user.email}
                  </p>
                </div>
              </div>
            )}

            {/* Mobile Navigation Links */}
            <ul className="space-y-1 mb-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.to}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center px-4 py-3 rounded-lg transition-all ${
                        isActive
                          ? "bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 font-semibold"
                          : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Theme Toggle in Mobile Menu */}
            <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-gray-900 dark:text-gray-100">
                  Theme
                </span>
                <button
                  onClick={toggleTheme}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 transition-all"
                  aria-label="Toggle theme"
                >
                  {isDarkMode ? (
                    <>
                      <FaSun className="w-4 h-4" />
                      <span className="text-sm">Light</span>
                    </>
                  ) : (
                    <>
                      <FaMoon className="w-4 h-4" />
                      <span className="text-sm">Dark</span>
                    </>
                  )}
                </button>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Current: {isDarkMode ? "Dark Mode" : "Light Mode"}
              </p>
            </div>

            {/* Auth Buttons in Mobile Menu */}
            {!user ? (
              <div className="space-y-3">
                <Link
                  to="/auth/login"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-center px-4 py-3 bg-green-500 text-white font-semibold rounded-lg shadow hover:bg-green-600 transition-all dark:bg-green-600 dark:hover:bg-green-700"
                >
                  Login
                </Link>
                <Link
                  to="/auth/register"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-center px-4 py-3 bg-green-100 text-green-700 font-semibold rounded-lg shadow hover:bg-green-200 transition-all dark:bg-green-900 dark:text-green-300 dark:hover:bg-green-800"
                >
                  Register
                </Link>
              </div>
            ) : (
              <button
                onClick={() => {
                  handleLogOut();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full px-4 py-3 bg-red-50 dark:bg-red-900 text-red-600 dark:text-red-400 font-semibold rounded-lg hover:bg-red-100 dark:hover:bg-red-800 transition-all"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;