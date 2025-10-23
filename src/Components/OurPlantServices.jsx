import React from 'react';
import PlantImage2 from "../assets/plant2.avif";
import { LiaCheckCircle, LiaEnvira } from 'react-icons/lia';
import { MdTipsAndUpdates } from 'react-icons/md';

const OurPlantServices = () => {

    const [isHover, setIsHover] = React.useState(false);
    
    return (
        <div>
            <section>
                    <div className="w-10/12 mx-auto my-20">
               
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
        </div>
    );
};

export default OurPlantServices;