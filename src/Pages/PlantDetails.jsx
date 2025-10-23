import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import PlantsDetailscard from "../Components/PlantsDetailscard";

const PlantDetails = () => {
  const data = useLoaderData();
  console.log(data);
  const { plantId } = useParams();
  

  const [plants, setPlants] = useState({});


  useEffect(() => {
    const allPlantsDetails = data.map((p) => p.id == plantId);
    setPlants(allPlantsDetails);
  }, [plantId, data]);



  return (
   <div>
      {plants ? (
        <PlantsDetailscard plants={plants} />
      ) : (
        <div className="flex justify-center items-center min-h-screen text-gray-600">
          Loading Plant Details...
        </div>
      )}
    </div>
  );
};

export default PlantDetails;
