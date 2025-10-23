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


import Expart1 from '../assets/expart1.avif'
import Expart2 from '../assets/expart2.avif'
import Expart3 from '../assets/expart3.avif'
import Expart4 from '../assets/expart-4.avif'


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

      {/* plant care Tips section */}
      <section>
        <div className="max-w-7xl mx-auto my-24 px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-green-700 mb-4">
              Essential Plant Care Tips
            </h2>
            <p className="text-gray-600 text-lg md:text-xl">
              Keep your plants healthy and thriving with our simple care tips.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl shadow-2xl p-8 flex flex-col items-center text-center transition-transform duration-500 hover:scale-105 hover:shadow-3xl">
              <div className="bg-blue-200 p-6 rounded-full mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-14 h-14 text-blue-600"
                >
                  <path d="M12 2C8 8 4 12 4 17a8 8 0 0 0 16 0c0-5-4-9-8-15z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-blue-700 mb-3">
                Watering
              </h3>
              <p className="text-gray-700 mb-4">
                Water your plants regularly but let the soil dry slightly
                between waterings to avoid root rot.
              </p>
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                Daily/Weekly
              </span>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-3xl shadow-2xl p-8 flex flex-col items-center text-center transition-transform duration-500 hover:scale-105 hover:shadow-3xl">
              <div className="bg-yellow-200 p-6 rounded-full mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-14 h-14 text-yellow-600"
                >
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-yellow-700 mb-3">
                Sunlight
              </h3>
              <p className="text-gray-700 mb-4">
                Place your plants in bright, indirect sunlight. Rotate them
                regularly for even growth.
              </p>
              <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium">
                4-6 hrs/day
              </span>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl shadow-2xl p-8 flex flex-col items-center text-center transition-transform duration-500 hover:scale-105 hover:shadow-3xl">
              <div className="bg-green-200 p-6 rounded-full mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-14 h-14 text-green-600"
                >
                  <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14h-2v-2h2zm0-4h-2V7h2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-green-700 mb-3">
                Fertilizing
              </h3>
              <p className="text-gray-700 mb-4">
                Feed your plants with a balanced fertilizer every 4-6 weeks
                during growing season.
              </p>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                Monthly
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* expet section */}
      <section>
        <div className="max-w-7xl mx-auto my-24 px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-green-700 mb-4">
              Meet Our Green Experts
            </h2>
            <p className="text-gray-600 text-lg md:text-xl">
              Our dedicated plant care specialists are here to guide you with
              the best advice.
            </p>
          </div>

          {/* Experts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {/* Expert 1 */}
            <div className="bg-white rounded-3xl shadow-2xl p-6 flex flex-col items-center text-center transition-transform duration-500 hover:scale-105 hover:shadow-3xl">
              <img
                src={Expart1}
                className="w-32 h-32 rounded-full object-cover mb-4 shadow-lg"
              />
              <h3 className="text-xl font-semibold text-green-700 mb-1">
                Alice Green
              </h3>
              <p className="text-gray-600 text-sm mb-2">
                Indoor Plant Specialist
              </p>
              <div className="flex gap-2">
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                  Watering
                </span>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                  Fertilizing
                </span>
              </div>
            </div>

            {/* Expert 2 */}
            <div className="bg-white rounded-3xl shadow-2xl p-6 flex flex-col items-center text-center transition-transform duration-500 hover:scale-105 hover:shadow-3xl">
              <img
                src={Expart2}
                className="w-32 h-32 rounded-full object-cover mb-4 shadow-lg"
              />
              <h3 className="text-xl font-semibold text-green-700 mb-1">
                Brian Leaf
              </h3>
              <p className="text-gray-600 text-sm mb-2">
                Outdoor Garden Specialist
              </p>
              <div className="flex gap-2">
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                  Sunlight
                </span>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                  Pruning
                </span>
              </div>
            </div>

            {/* Expert 3 */}
            <div className="bg-white rounded-3xl shadow-2xl p-6 flex flex-col items-center text-center transition-transform duration-500 hover:scale-105 hover:shadow-3xl">
              <img
                src={Expart3}
                className="w-32 h-32 rounded-full object-cover mb-4 shadow-lg"
              />
              <h3 className="text-xl font-semibold text-green-700 mb-1">
                Clara Bloom
              </h3>
              <p className="text-gray-600 text-sm mb-2">
                Foliage & Flower Specialist
              </p>
              <div className="flex gap-2">
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                  Fertilizing
                </span>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                  Soil Care
                </span>
              </div>
            </div>

            {/* Expert 4 */}
            <div className="bg-white rounded-3xl shadow-2xl p-6 flex flex-col items-center text-center transition-transform duration-500 hover:scale-105 hover:shadow-3xl">
              <img
                src={Expart4}
                className="w-32 h-32 rounded-full object-cover mb-4 shadow-lg"
              />
              <h3 className="text-xl font-semibold text-green-700 mb-1">
                David Moss
              </h3>
              <p className="text-gray-600 text-sm mb-2">Succulent Specialist</p>
              <div className="flex gap-2">
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                  Succulents
                </span>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                  Air Purifiers
                </span>
              </div>
            </div>
          </div>
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
                  <MdTipsAndUpdates size={40} className="text-yellow-400" />
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
                  <LiaEnvira size={40} className="text-green-500" />
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
                  <LiaCheckCircle size={40} className="text-green-500" />
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
