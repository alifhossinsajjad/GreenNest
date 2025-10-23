import { useLoaderData } from "react-router";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Carosul from "./carosul";
import TopRatedPlantsCard from "../Components/TopRatedPlantsCard";
import { RiPlantFill } from "react-icons/ri";
import React from "react";
import PlantImage from "../assets/plant(1).avif";
import PlantImage2 from "../assets/plant2.avif";
import { MdTipsAndUpdates } from "react-icons/md";

import { LiaCheckCircle, LiaEnvira } from "react-icons/lia";

const Home = () => {
  const plants = useLoaderData();

  const topRatedPlants = plants.filter((plant) => plant.rating > 4.6);

  const [openIndex, setOpenIndex] = React.useState(null);
  const faqs = [
    {
      question: "How can I take care of my plant?",
      answer:
        "Our experts provide step-by-step guidance on watering, sunlight, soil, and other care tips to ensure your plant thrives in any environment.",
    },
    {
      question: "Do you offer advice for all types of plants?",
      answer:
        "Yes! We provide consultations for indoor plants, outdoor plants, air-purifiers, flowering plants, and more. Each plant type gets personalized care instructions.",
    },
    {
      question: "Will your recommendations work for my home environment?",
      answer:
        "Absolutely! Our guidance is tailored to different light conditions, humidity levels, and space constraints, ensuring your plants flourish wherever they are.",
    },
    {
      question: "Can I customize my plant care plan?",
      answer:
        "Yes, you can! We offer personalized care plans based on your plant species, home environment, and lifestyle. Adjust watering schedules, sunlight, and fertilization according to your needs.",
    },
  ];

  const [isHover, setIsHover] = React.useState(false);

  return (
    <div className="space-y-16">
      <section>
        <Carosul plants={plants} />
      </section>

      <section className="max-w-6xl mx-auto px-4">
        <h2 className=" flex justify-center items-center text-3xl font-bold text-green-700 mb-8">
          <RiPlantFill className="text-green-600 " size={80} /> Our Top Rated
          Plants
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {topRatedPlants.map((plant) => (
            <TopRatedPlantsCard key={plant.plantId} plant={plant} />
          ))}
        </div>
      </section>

      {/* Feature section */}
      <section>
        <div className="w-10/12 mx-auto my-20">
          {/* Section Title */}
          <div className="text-center my-10">
            <h2 className="text-4xl font-bold text-green-700">
              Our Plant Consultation Services
            </h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
              Expert guidance and care solutions for your indoor and outdoor
              plants. Ensure healthy growth and vibrant greenery all year round.
            </p>
          </div>

        
          <div className="flex flex-col md:flex-row items-center justify-start gap-10">
            
            <img
              className="w-full md:w-3/5 lg:w-1/3 rounded-xl shadow-2xl object-cover"
              src={PlantImage2}
              alt="Plant Consultation"
            />

            <div className="flex flex-col gap-6 md:w-1/2">
      
              <div
                className={`p-6 group flex gap-4 rounded-xl border border-transparent transition-all cursor-pointer hover:bg-violet-100 hover:border-violet-300 `}
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
              >
                
                <div className="flex items-center gap-2 space-y-2">
                    <MdTipsAndUpdates size={40} className="text-yellow-400"/>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                    Personalized Care Tips
                  </h3>
                  <p className="text-sm text-gray-600 max-w-xs">
                    Get tailored guidance on watering, sunlight, and soil for
                    your specific plant species.
                  </p>
                  </div>
                </div>
              </div>

            
              <div className="p-6 group flex gap-4 rounded-xl border border-transparent transition-all cursor-pointer hover:bg-green-100 hover:border-green-300">
                
                <div className="flex items-center space-y-2 gap-2">
                    <LiaEnvira size={40} className="text-green-500"/>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                    Expert Plant Diagnostics
                  </h3>
                  <p className="text-sm text-gray-600 max-w-xs">
                    Identify issues with your plants and get expert
                    recommendations for treatment and care.
                  </p>
                  </div>
                </div>
              </div>

              <div className="p-6 group flex gap-4 rounded-xl border border-transparent transition-all cursor-pointer hover:bg-orange-100 hover:border-orange-300">
                
                <div className="flex items-center space-y-2 gap-2">
                    <LiaCheckCircle size={40} className="text-green-500"/>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                    Seasonal Growth Reports
                  </h3>
                  <p className="text-sm text-gray-600 max-w-xs">
                    Receive insights on plant growth trends, fertilization
                    schedules, and pruning tips.
                  </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FQA section */}
      <section>
        <div className="my-20">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-start justify-center gap-8 px-4 md:px-0">
            <img
              className="max-w-sm w-full rounded-xl h-auto"
              src={PlantImage}
              alt=""
            />
            <div>
              <p className="text-indigo-600 text-sm font-medium">FAQ's</p>
              <h1 className="text-3xl font-semibold">Looking for answer?</h1>
              <p className="text-sm text-slate-500 mt-2 pb-4">
                Grow Healthy Spaces Without the Hassle — Expert, Personalized,
                and Sustainable Plant Consultation Services.
              </p>
              {faqs.map((faq, index) => (
                <div
                  className="border-b border-slate-200 py-4 cursor-pointer"
                  key={index}
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-medium">{faq.question}</h3>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={`${
                        openIndex === index ? "rotate-180" : ""
                      } transition-all duration-500 ease-in-out`}
                    >
                      <path
                        d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2"
                        stroke="#1D293D"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p
                    className={`text-sm text-slate-500 transition-all duration-500 ease-in-out max-w-md ${
                      openIndex === index
                        ? "opacity-100 max-h-[300px] translate-y-0 pt-4"
                        : "opacity-0 max-h-0 -translate-y-2"
                    }`}
                  >
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
