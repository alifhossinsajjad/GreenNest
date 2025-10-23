import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import TopRatedPlantsCard from "../Components/TopRatedPlantsCard";

const TopRatedPlants = () => {
  const data = useLoaderData();
  const [topRatedPlants, setTopRatedPlants] = useState([]);

  useEffect(() => {
    // filter only plants with high rating (you can change the number)
    const filtered = data.filter((plant) => plant.rating >= 4.8);
    setTopRatedPlants(filtered);
  }, [data]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {topRatedPlants.map((plant) => (
        <TopRatedPlantsCard key={plant.plantId} plant={plant} />
      ))}
    </div>
  );
};

export default TopRatedPlants;
