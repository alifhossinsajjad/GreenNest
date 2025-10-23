import { useLoaderData } from "react-router";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Carosul from "./carosul";
import TopRatedPlantsCard from "../Components/TopRatedPlantsCard";
import { RiPlantFill } from "react-icons/ri";

const Home = () => {
  const plants = useLoaderData();

  
  const topRatedPlants = plants.filter((plant) => plant.rating > 4.6);

  return (
    <div className="space-y-16">
    
      <section>
        <Carosul plants={plants} />
      </section>

   
      <section className="max-w-6xl mx-auto px-4">
        <h2 className=" flex justify-center items-center text-3xl font-bold text-green-700 mb-8">
          <RiPlantFill className="text-green-600 " size={80}/> Our Top Rated Plants
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {topRatedPlants.map((plant) => (
            <TopRatedPlantsCard key={plant.plantId} plant={plant} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
