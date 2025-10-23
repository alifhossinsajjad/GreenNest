import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router";
import AllPlantsCard from "../Components/AllPlantsCard.Jsx";
import { FaArrowLeft } from "react-icons/fa";


const AllPlants = () => {
  const data = useLoaderData();
  // console.log(data);

  const [allPlants, setAllPlants] = useState([]);

  useEffect(() => {
    setAllPlants(data);
  }, [data]);

  return (
    <div>
      <div className="grid xl:lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center p-20">
        {allPlants.map((p) => (
          <AllPlantsCard key={p.plantId} p={p} />
        ))}
      </div>

      <div>
        <Link to={'/'} className="flex items-center gap-2 text-gray-500 hover:text-lg hover:text-gray-800 font-bold">
          <FaArrowLeft />
          Back To Home
        </Link>
      </div>
    </div>
  );
};

export default AllPlants;
