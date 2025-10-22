import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import Navbar from "./Navbar";
import Footer from "./Footer";

const PlantsDetailscard = ({ plants }) => {
  const {
    image,
    plantName,
    price,
    rating,
    availableStock,
    careLevel,
    description,
    providerName,
    category,
  } = plants;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleBookConsultation = (e) => {
    e.preventDefault();

    if (!name.trim() || !email.trim()) {
      toast.error("Please fill in both Name and Email!");
      return;
    }

    toast.success(`Consultation booked successfully for ${name}! 🌱`, {
      position: "top-right",
      autoClose: 3000,
    });

   
    setName("");
    setEmail("");
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 px-4 py-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full flex flex-col md:flex-row overflow-hidden"
        >
          <div className="md:w-1/2 relative">
            <img
              src={image}
              alt={plantName}
              className="h-80 md:h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          <div className="md:w-1/2 p-6 md:p-10 flex flex-col justify-center space-y-5">
            <motion.h1
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl font-bold text-green-700"
            >
              {plantName}
            </motion.h1>

            <p className="text-gray-600">{description}</p>

            <div className="grid grid-cols-2 gap-y-2 text-gray-700">
              <p>
                <span className="font-semibold">Category:</span> {category}
              </p>
              <p>
                <span className="font-semibold">Care Level:</span> {careLevel}
              </p>
              <p>
                <span className="font-semibold">Rating:</span> ⭐ {rating}
              </p>
              <p>
                <span className="font-semibold">Stock:</span> {availableStock}
              </p>
              <p>
                <span className="font-semibold">Provider:</span> {providerName}
              </p>
              <p>
                <span className="font-semibold">Price:</span> ${price}
              </p>
            </div>

            <form
              onSubmit={handleBookConsultation}
              className="mt-4 flex flex-col space-y-3"
            >
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input input-bordered w-full rounded-lg px-4 py-2"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input input-bordered w-full rounded-lg px-4 py-2"
                required
              />
              <button
                type="submit"
                className="px-6 py-2 bg-green-600 text-white font-medium rounded-full hover:bg-green-700 transition"
              >
                Book Now
              </button>
            </form>
          </div>
        </motion.div>
      </div>

      <Footer/>
    </>
  );
};

export default PlantsDetailscard;
