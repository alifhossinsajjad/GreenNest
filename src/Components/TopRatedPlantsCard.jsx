import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

const TopRatedPlantsCard = ({ plant }) => {
  const { plantName, image, rating, price, category, providerName, plantId } =
    plant;

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden group">

      <div className="relative">
        <img
          src={image}
          alt={plantName}
          className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <span className="flex items-center gap-1 absolute top-3 right-3 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
          <FaStar size={20}  className="text-[#FFD700]"/> {rating}
        </span>
      </div>

      <div className="p-5 space-y-2">
        <h3 className="text-lg font-semibold text-gray-800 group-hover:text-green-700 transition-colors">
          {plantName}
        </h3>
        <p className="text-sm text-gray-500">{category}</p>
        <p className="text-gray-800 font-medium">
          <span className="text-green-600 font-bold">${price}</span>
        </p>
        <p className="text-xs text-gray-400 italic">Provider: {providerName}</p>

     
        <div className="text-center inline-block mt-3 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-xl font-semibold transition-all duration-300 cursor-pointer">
          <Link
            to={`/plantdetails/${plantId}`}
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopRatedPlantsCard;
