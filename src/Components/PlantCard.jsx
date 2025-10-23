import { Link } from "react-router";
import { motion } from "framer-motion";

const PlantCard = ({ plant }) => {
  const { image, plantName, price, rating, plantId } = plant;

  return (
    <motion.div
      className="relative rounded-2xl overflow-hidden shadow-lg group hover:shadow-2xl transition-all duration-500 "
      whileHover={{ scale: 1.03 }}
    >
    
      <img
        src={image}
        alt={plantName}
        className="w-full h-[500px] object-cover transform group-hover:scale-100 transition-transform duration-700"
      />

   
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-all duration-500"></div>

    
      <div className="absolute bottom-0 left-0 p-6 text-white z-10 space-y-2">
        <h2 className="text-2xl font-bold">Plant Name: {plantName}</h2>
        <p className="text-lg font-bold ">Price: ${price}</p>
        <p className="text-lg font-semibold ">Rating: ⭐ {rating} / 5</p>
        <Link
          to={`/plantdetails/:${plantId}`}
          className="inline-block mt-3 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300"
        >
          View Details
        </Link>
      </div>
    </motion.div>
  );
};

export default PlantCard;
