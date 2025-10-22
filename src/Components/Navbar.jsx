import React, { use } from "react";
import plantLogo from "../assets/plantlogo.png";
import { FaUser } from "react-icons/fa";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Provider/AuthContext";
import { toast } from "react-toastify";
import MyLink from "./MyNavLink";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then((result) => {
        console.log(result.user);
        toast.success("you are successfully log out");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="navbar  bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <MyLink to={"/"}>Home</MyLink>
            </li>
            <li>
              <MyLink to={"/allplants"}>Plants</MyLink>
            </li>
            <li>
              <MyLink to={"/myprofile"}>My Profile</MyLink>
            </li>
          </ul>
        </div>
        <NavLink to={"/"} className="flex font-bold items-center text-xl">
          <img src={plantLogo} className="w-18" alt="" /> GreenNest
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 relative">
          <li>
            <MyLink to={"/"}>Home</MyLink>
          </li>
          <li>
            <MyLink to={"/allplants"}>Plants</MyLink>
          </li>
          <li>
            <MyLink to={"/myprofile"}>My Profile</MyLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <img
          className="w-15"
          src={`${user ? user.photoURL && user.name : <FaUser />}`}
          alt=""
        />
        {/* <h1>{name}</h1> */}
        {user ? (
          <button
            onClick={handleLogOut}
            to={"/auth/login"}
            className="btn bg-green-300 font-bold text-white text-lg  gap-2"
          >
            logOut
          </button>
        ) : (
          <Link
            to={"/auth/login"}
            className="btn btn-ghost bg-green-500 text-white font-bold text-lg gap-2"
          >
            <FaUser />
            login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
