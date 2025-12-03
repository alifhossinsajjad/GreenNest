import React, { useContext } from "react";

import { AuthContext } from "../Provider/AuthContext";
import { toast } from "react-toastify";
import plantLogo from "../assets/plantlogo.png";
import { Link, NavLink } from "react-router";
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

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
    { name: "My Profile", to: "/myprofile" },
  ];

  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center h-20">
        <NavLink
          to="/"
          className="flex items-center gap-2 font-bold text-2xl text-green-700"
        >
          <img src={plantLogo} alt="GreenNest Logo" className="w-10 h-10" />
          GreenNest
        </NavLink>

        <ul className="hidden lg:flex items-center gap-8 font-medium text-gray-700">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  isActive
                    ? "text-green-600 border-b-2 border-green-600 pb-1 transition-all"
                    : "hover:text-green-500 transition-all"
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4 relative">
          {user ? (
            <div className="dropdown dropdown-end">
              <label
                tabIndex={0}
                className="cursor-pointer flex items-center gap-2"
              >
                <img
                  src={user.photoURL || ""}
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full border-2 border-green-500 shadow-sm"
                />
                <span className="hidden md:inline font-medium text-gray-700">
                  {user.displayName || "User"}
                </span>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-white rounded-box w-52 mt-2"
              >
                <li>
                  <Link className="hover:bg-green-50">{user.displayName}</Link>
                </li>
                <li>
                  <button
                    onClick={handleLogOut}
                    className="hover:bg-red-50 text-red-600 font-semibold"
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
                className="px-4 py-2 bg-green-500 text-white rounded-lg font-semibold shadow hover:bg-green-600 transition-all"
              >
                Login
              </Link>
              <Link
                to="/auth/register"
                className="px-4 py-2 bg-green-100 text-green-700 rounded-lg font-semibold shadow hover:bg-green-200 transition-all"
              >
                Register
              </Link>
            </div>
          )}
        </div>

        <div className="lg:hidden dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <IoMdMenu size={70} />
          </label>
          <ul
            tabIndex={0}
            className="menu dropdown-content bg-white shadow p-4 rounded-box w-52 mt-4 flex flex-col gap-2"
          >
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    isActive
                      ? "text-green-600 font-semibold"
                      : "hover:text-green-500"
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
            {user ? (
              <>
                <li>
                  <span className="text-gray-700">{user.displayName}</span>
                </li>
                <li>
                  <button
                    onClick={handleLogOut}
                    className="text-red-600 font-semibold hover:bg-red-50 w-full text-left px-2 py-1 rounded"
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
                    className="text-green-600 font-semibold hover:bg-green-50 w-full block px-2 py-1 rounded"
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    to="/auth/register"
                    className="text-green-700 font-semibold hover:bg-green-100 w-full block px-2 py-1 rounded"
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
