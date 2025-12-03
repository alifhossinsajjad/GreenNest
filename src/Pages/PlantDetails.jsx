import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import PlantsDetailscard from "../Components/PlantsDetailscard";

const PlantDetails = () => {
  const data = useLoaderData();
  const { plantId } = useParams();
  const [plants, setPlants] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (data && plantId) {
      const allPlantsDetails = data.find((p) => p.plantId == plantId);
      setPlants(allPlantsDetails);
      setLoading(false);
    }
  }, [plantId, data]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading plant details...</p>
        </div>
      </div>
    );
  }

  if (!plants) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <svg className="w-16 h-16 text-red-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.928-.833-2.698 0L4.34 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
          </svg>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Plant Not Found</h2>
          <p className="text-gray-600">The plant you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return <PlantsDetailscard plants={plants} />;
};

export default PlantDetails;