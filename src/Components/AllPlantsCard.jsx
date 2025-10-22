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
  console.log(p);
  return (
    <div className="w-11/12 mx-auto mb-20 ">
      <div className="card bg-base-100 w-96 shadow-sm ">
        <figure>
          <img src={image} alt="Tree" className="h-70" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Plant Nmae : {plantName}
            <div className="badge badge-secondary">Stock:{availableStock}</div>
          </h2>
          <p>Provider name: {providerName}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Price: {price}</div>
            <div className="badge badge-outline">
              Rating:
              <FaStar />
              {rating}
            </div>
          </div>
          <div className="mt-5">
            <Link
            to={`/plantdetails/${plantId}`}
            className="bg-amber-400 rounded-lg hover:bg-amber-600 p-2 text-lg font-semibold text-white"
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
