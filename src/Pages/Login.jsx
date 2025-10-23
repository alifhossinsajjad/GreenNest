import React, { use, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../Provider/AuthContext";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../Firebase/Firebase.config";

const Login = () => {
  const { logInUser, signInWithGoogle } = use(AuthContext);

  const [showPassword, setShowPassword] = useState(false);

  const emailRef = useRef();

  const [error, setError] = useState("");

  const location = useLocation();
  // console.log(location);
  const navigate = useNavigate();

  const hanleLogIn = (event) => {
    event.preventDefault();

    const email = event.target.email?.value;
    const password = event.target.password.value;

    logInUser(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("LogIn successful");
        // navigate (`${location.state ? location.state : '/'}`);
        navigate(location?.state || "/");

        event.target.reset();
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(error);
        // toast.error('invalid yor email or password')

        setError(errorCode);
      });
  };

  const handleForgetPassword = () => {
    const email = emailRef.current.value;
    if (!email) {
      toast.error("Please provide your email address to reset password");
      return;
    }
    sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log("password reset");
        toast.success("Password reset email sent. Please check your email.");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handlegoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        navigate(location?.state || "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleShowPassord = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-green-50 to-green-100 p-4">
      <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-green-500 text-white text-center py-6">
          <h2 className="text-3xl font-extrabold">Login to Your Account</h2>
          <p className="text-green-100 mt-1">
            Welcome back! Please login to continue
          </p>
        </div>

        {/* Form */}
        <div className="p-8">
          <form onSubmit={hanleLogIn} className="space-y-5">
            {/* Email */}
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                ref={emailRef}
                placeholder="Email"
                required
                className="px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:outline-none shadow-sm"
              />
            </div>

            {/* Password */}
            <div className="flex flex-col relative">
              <label className="text-gray-700 font-medium mb-2">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                required
                className="px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:outline-none shadow-sm"
              />
              <span
                onClick={handleShowPassord}
                className="absolute right-4 top-10 cursor-pointer text-gray-500 hover:text-gray-700 transition-all"
              >
                {showPassword ? <FaRegEye /> : <FaEyeSlash />}
              </span>
            </div>

            {/* Forget Password */}
            <div className="flex justify-end">
              <button
                type="button"
                onClick={handleForgetPassword}
                className="text-green-600 hover:underline text-sm font-medium"
              >
                Forgot Password?
              </button>
            </div>

            {/* Error */}
            {error && <p className="text-red-600 text-center">{error}</p>}

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3 bg-green-500 text-white font-semibold rounded-xl shadow-lg hover:bg-green-600 transition-all duration-300"
            >
              Login
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-4 text-gray-500 font-medium">OR</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Google Login */}
          <button
            onClick={handlegoogleSignIn}
            className="w-full flex items-center justify-center gap-3 py-3 bg-white text-gray-700 border border-gray-300 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
          >
            <svg
              aria-label="Google logo"
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>

          {/* Register Link */}
          <p className="text-center mt-6 text-gray-600">
            Don’t have an account?{" "}
            <Link
              to={"/auth/register"}
              className="text-green-500 font-semibold hover:underline"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
