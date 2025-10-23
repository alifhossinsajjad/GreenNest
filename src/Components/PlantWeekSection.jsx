import React from "react";
import PlantThisWeek from "../assets/plantthisweek.avif";
import { PiPlantFill } from "react-icons/pi";

const PlantWeekSection = () => {
  return (
    <div>
   
      <section className="relative w-full bg-gradient-to-r from-green-50 to-green-100 py-20 px-6 md:px-12 overflow-hidden">
    
        <div className="absolute -top-16 -left-16 w-72 h-72 bg-green-300 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute -bottom-16 -right-16 w-72 h-72 bg-green-400 rounded-full filter blur-3xl opacity-30"></div>

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
     
          <div className="md:w-1/2 relative group cursor-pointer">
            <img
              src={PlantThisWeek}
              alt="Fiddle Leaf Fig"
              className="w-full rounded-3xl shadow-2xl transform transition-transform duration-500 group-hover:scale-105"
            />
            <div className="flex items-center gap-2 absolute top-4 left-4 bg-gradient-to-r from-green-600 to-green-700 text-white px-5 py-2 rounded-2xl shadow-lg text-base font-bold animate-bounce">
              <PiPlantFill size={30} className="text-green-300"/> Plant of the Week
            </div>
          </div>

          
          <div className="md:w-1/2 flex flex-col gap-6">
            <h2 className="text-4xl font-extrabold text-gray-800">
              Fiddle Leaf Fig
            </h2>
            <p className="text-gray-600 text-lg">
              The Fiddle Leaf Fig is a stunning indoor plant that brightens up
              any living space. Known for its large, violin-shaped leaves, it’s
              perfect for adding elegance to your home or office.
            </p>

            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                <span className="text-gray-700">
                  Water once a week for lush leaves
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                <span className="text-gray-700">Prefers indirect sunlight</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                <span className="text-gray-700">
                  Use balanced fertilizer monthly
                </span>
              </li>
            </ul>

            <button className="mt-4 px-8 py-3 bg-gradient-to-r from-green-500 to-green-700 text-white font-bold rounded-2xl shadow-lg hover:from-green-600 hover:to-green-800 transition-all duration-300 w-max transform hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlantWeekSection;
