import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthContext";

const MyProfile = () => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <h2 className="text-2xl font-semibold text-gray-600">
          Loading user data...
        </h2>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <h2 className="text-2xl font-semibold text-gray-600">
          Please log in to view your profile.
        </h2>
      </div>
    );
  }
  return (
    <div>
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <div className="card w-96 bg-white shadow-xl p-6 rounded-2xl">
          <div className="flex flex-col items-center text-center">
            <img
              src={user?.photoURL}
              alt="User Profile"
              className="w-28 h-28 rounded-full mb-4 border-4 border-blue-400"
            />
            <h2 className="text-2xl font-bold text-gray-800">
              {user.displayName || "No Name Available"}
            </h2>
            <p className="text-gray-600 mt-1">{user.email}</p>
            <p className="text-sm text-gray-400 mt-2">
              User ID: {user.uid.slice(0, 8)}...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
