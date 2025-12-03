import React from "react";
import { Link } from "react-router";

const AllPlantsCard = ({ p }) => {
  const {
    image,
    plantName,
    price,
    availableStock,
    providerName,
    plantId,
    description,
  } = p;

  return (
    <div className="w-full h-full">
      <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full">

        {/* Image */}
        <figure className="h-48 w-full overflow-hidden">
          <img
            src={image}
            alt={plantName}
            className="w-full h-full object-cover"
          />
        </figure>

        {/* Content */}
        <div className="p-4 flex flex-col flex-grow">

          <h2 className="text-lg font-semibold text-gray-800">{plantName}</h2>

          <p className="text-xs text-gray-500 mb-2">
            Provided by <span className="font-medium">{providerName}</span>
          </p>

          {/* Short description */}
          <p className="text-sm text-gray-600 mb-3 line-clamp-3">
            {description}
          </p>

          {/* Price + Stock */}
          <div className="flex justify-between items-center mt-auto mb-3">
            <span className="text-lg font-bold text-green-600">${price}</span>

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

          {/* Button */}
          <Link
            to={`/plantdetails/${plantId}`}
            className="text-center bg-amber-500 text-white font-semibold py-2 rounded-lg 
            hover:bg-amber-600 transition-all duration-300"
          >
            See More
          </Link>

        </div>
      </div>
    </div>
  );
};

export default AllPlantsCard;
