import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../Provider/AuthContext";
import { updateProfile } from "firebase/auth";
import Loading from "../Pages/Loading";
import { toast } from "react-toastify";

const MyProfile = () => {
  const { user, loading } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [preview, setPreview] = useState("");
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    if (user) {
      setName(user.displayName || "");
      setPhotoURL(user.photoURL || "");
      setPreview(user.photoURL || "");
    }
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loading />
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

  const handleUpdateProfile = () => {
    if (!name || !photoURL) return;
    setUpdating(true);

    updateProfile(user, { displayName: name, photoURL: photoURL })
      .then(() => {
        toast.success("Profile updated successfully!");
        setPreview(photoURL); 
      })
      .catch((error) => {
        console.error("Profile update failed:", error);
        toast.error("Failed to update profile.");
      })
      .finally(() => {
        setUpdating(false);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-green-50 to-green-200 p-6">
      <div className="relative w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        <div className="absolute -top-16 -left-16 w-72 h-72 bg-green-400 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute -bottom-16 -right-16 w-72 h-72 bg-green-500 rounded-full filter blur-3xl opacity-30"></div>

        <div className="md:w-1/2 bg-gradient-to-br from-green-100 to-green-200 p-12 flex flex-col items-center justify-center gap-5 relative">
          <div className="w-40 h-40 rounded-full overflow-hidden border-8 border-white shadow-xl">
            <img
              src={preview || "https://via.placeholder.com/150"}
              alt="User"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="text-center mt-6">
            <h2 className="text-4xl font-extrabold text-gray-800">
              {user.displayName || "No Name"}
            </h2>
            <p className="text-gray-600 mt-2">{user.email}</p>
            <p className="text-sm text-gray-400 mt-1">
              User ID: {user.uid.slice(0, 8)}...
            </p>
          </div>
        </div>

        <div className="md:w-1/2 p-12 flex flex-col justify-between relative">
          <h3 className="text-2xl font-bold text-gray-700 mb-8">
            Update Your Profile
          </h3>
          <div className="space-y-6">
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-2">
                Display Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your display name"
                className="w-full px-5 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-green-400 focus:outline-none shadow-md transition-all duration-300 hover:shadow-lg"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-2">
                Photo URL
              </label>
              <input
                type="text"
                value={photoURL}
                onChange={(e) => {
                  setPhotoURL(e.target.value);
                  setPreview(e.target.value);
                }}
                placeholder="Enter your photo URL"
                className="w-full px-5 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-green-400 focus:outline-none shadow-md transition-all duration-300 hover:shadow-lg"
              />
            </div>
          </div>

          <div className="flex justify-end mt-10">
            <button
              onClick={handleUpdateProfile}
              disabled={updating}
              className="px-8 py-3 bg-gradient-to-r from-green-500 to-green-700 text-white font-bold rounded-2xl shadow-xl hover:scale-105 transform transition-all duration-300 hover:from-green-600 hover:to-green-800"
            >
              {updating ? "Updating..." : "Update Profile"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
