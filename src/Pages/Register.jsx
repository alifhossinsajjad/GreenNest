import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../Provider/AuthContext";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";

const Register = () => {
  const { createUser, setUser, updateUserProfile } = use(AuthContext);
  const [showPassowrd, setShowPassword] = useState(false);
  const Navigate = useNavigate();
  // const [nameError, setNameError] = useState('');

  const handleRegister = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const name = event.target.name.value;
    const photo = event.target.photo.value;
    // console.log('i am register', email, password, name, photo);

    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordPattern.test(password)) {
      toast.error(
        "Password must be at least 8 characters long and contain uppercase, lowercase, and number"
      );
      return;
    }

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("account was create successfully");

        const user = result.user;

        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            event.target.reset();
            toast.success("Name and photo updated successfully");
          })
          .catch((error) => {
            console.log(error);
            toast.error("Name or photo URL not updated");
          });
        setUser(result.user);
        event.target.reset()
      })
      .catch((error) => {
        console.log(error);
        // const errorCode = error.code;
        console.log(error.code);
        toast.error("user already axist in database");

        if (error.code === "auth/email-already-in-us") {
          toast.error("user already axist in database");
        }

        // setNameError(errorCode);
      });
  };

  const handleShowPassord = () => {
    setShowPassword(!showPassowrd);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="font-semibold text-2xl text-center ">
          Register your account
        </h2>
        <div className="card-body">
          <form onSubmit={handleRegister}>
            <fieldset className="fieldset">
              {/* Name */}
              <label className="text">Your Name</label>
              <input
                type="text"
                name="name"
                className="input"
                placeholder="Enter your name"
              />

              {/* Photo */}
              <label className="label">Photo Url</label>
              <input
                type="text"
                name="photo"
                className="input"
                placeholder="Enter your url"
              />

              {/* emial */}
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
              />

              {/* password */}

              <div className="relative">
                <label className="label">Password</label>
                <input
                  type={showPassowrd ? "text" : "password"}
                  name="password"
                  className="input"
                  placeholder="Password"
                />
                <span
                  onClick={handleShowPassord}
                  className="absolute right-8 top-8 cursor-pointer z-50"
                >
                  {showPassowrd ? <FaRegEye /> : <FaEyeSlash />}
                </span>
              </div>
              <button className="btn btn-neutral mt-4">Register</button>
            </fieldset>
          </form>
        </div>
        <p className="text-center">
          Already Have An Account ?{" "}
          <Link to={"/auth/login"} className="text-secondary">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
