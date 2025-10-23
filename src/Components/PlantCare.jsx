import React from "react";

const PlantCare = () => {
  return (
    <div>
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
    </div>
  );
};

export default PlantCare;
