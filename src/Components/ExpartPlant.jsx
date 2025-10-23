import React from 'react';
import Expart1 from "../assets/expart1.avif";
import Expart2 from "../assets/expart2.avif";
import Expart3 from "../assets/expart3.avif";
import Expart4 from "../assets/expart-4.avif";

const ExpartPlant = () => {
    return (
        <div>
            <section>
                    <div className="max-w-7xl mx-auto my-24 px-4">
                   
                      <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-green-700 mb-4">
                          Meet Our Green Experts
                        </h2>
                        <p className="text-gray-600 text-lg md:text-xl">
                          Our dedicated plant care specialists are here to guide you with
                          the best advice.
                        </p>
                      </div>
            
                     
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
        </div>
    );
};

export default ExpartPlant;