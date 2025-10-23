import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

const AllPlantsCard = ({ p }) => {
  const {
    image,
    plantName,
    price,
    rating,
    availableStock,
    providerName,
    plantId,
  } = p;

  return (
    <div className="w-full sm:w-[22rem] mx-auto">
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden my-10">
     
        <figure className="relative">
          <img
            src={image}
            alt={plantName}
            className="h-64 w-full object-cover"
          />
          <div className="absolute top-3 right-3 bg-amber-400 text-white font-semibold text-sm px-3 py-1 rounded-full shadow-md">
            ⭐ {rating}
          </div>
        </figure>

        
        <div className="p-5">
          <h2 className="text-xl font-semibold text-gray-800 mb-1">
            {plantName}
          </h2>
          <p className="text-sm text-gray-500 mb-3">
            Provided by{" "}
            <span className="font-medium text-gray-700">{providerName}</span>
          </p>

          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-semibold text-green-600">
              ${price}
            </span>
            <span
              className={`px-3 py-1 text-xs font-semibold rounded-full ${
                availableStock > 0
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-600"
              }`}
            >
              {availableStock > 0
                ? `In Stock: ${availableStock}`
                : "Out of Stock"}
            </span>
          </div>

          <div className="text-center">
            <Link
              to={`/plantdetails/${plantId}`}
              className="inline-block bg-gradient-to-r from-amber-400 to-amber-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllPlantsCard;
