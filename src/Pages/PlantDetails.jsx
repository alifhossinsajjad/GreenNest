import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import PlantsDetailscard from "../Components/PlantsDetailscard";

const PlantDetails = () => {
  const data = useLoaderData();

  // console.log(data);

  const { plantId } = useParams();


  const [plants, setPlants] = useState({});


  useEffect(() => {
    const allPlantsDetails = data.find((p) => p.id == plantId);
    setPlants(allPlantsDetails);
  }, [plantId, data]);



  return (
    <div>
      <PlantsDetailscard plants={plants} />
    </div>
  );
};

export default PlantDetails;
