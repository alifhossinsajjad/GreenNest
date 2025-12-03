import React, { useEffect, useState } from "react";
import AllPlantsCard from '../Components/AllPlantsCard'
import { FaArrowLeft, FaSearch } from "react-icons/fa";
import { Link, useLoaderData, useNavigate, useSearchParams } from "react-router";


const AllPlants = () => {
  const data = useLoaderData();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  
  const searchQuery = searchParams.get('q') || '';
  const [localSearchQuery, setLocalSearchQuery] = useState(searchQuery);
  
  const [allPlants, setAllPlants] = useState([]);
  const [filteredPlants, setFilteredPlants] = useState([]);

  useEffect(() => {
    setAllPlants(data);
    
    if (searchQuery.trim()) {
      const filtered = data.filter(plant => 
        plant.plantName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        plant.category?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        plant.description?.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredPlants(filtered);
    } else {
      setFilteredPlants(data);
    }
  }, [data, searchQuery]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (localSearchQuery.trim()) {
      navigate(`/allplants?q=${encodeURIComponent(localSearchQuery)}`);
    } else {
      navigate('/allplants');
    }
  };

  return (
    <div className="p-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 text-center">
          {searchQuery ? `Search Results for "${searchQuery}"` : 'All Plants'}
        </h1>
        
        {/* Search Bar */}
        <form onSubmit={handleSearch} className="max-w-md mx-auto mt-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search plants by name, category..."
              value={localSearchQuery}
              onChange={(e) => setLocalSearchQuery(e.target.value)}
              className="w-full px-4 py-2 pl-10 pr-12 bg-gray-50 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <FaSearch className="text-gray-400" />
            </div>
            <button
              type="submit"
              className="absolute right-0 top-0 h-full px-4 bg-green-600 hover:bg-green-700 text-white rounded-r-full transition duration-300"
            >
              Search
            </button>
          </div>
        </form>

        {searchQuery && (
          <div className="text-center mt-4">
            <p className="text-gray-600">
              Found {filteredPlants.length} {filteredPlants.length === 1 ? 'plant' : 'plants'}
            </p>
            {filteredPlants.length === 0 && (
              <Link
                to="/allplants"
                className="inline-block mt-2 text-green-600 hover:text-green-700"
              >
                Clear search
              </Link>
            )}
          </div>
        )}
      </div>

      {filteredPlants.length > 0 ? (
        <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
          {filteredPlants.map((p) => (
            <AllPlantsCard key={p.plantId} p={p} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <svg
            className="w-24 h-24 text-gray-300 mx-auto mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h2 className="text-2xl font-bold text-gray-700 mb-2">
            No plants found
          </h2>
          <p className="text-gray-600 mb-6">
            {searchQuery 
              ? `We couldn't find any plants matching "${searchQuery}"`
              : 'No plants available at the moment'
            }
          </p>
          {searchQuery && (
            <Link
              to="/allplants"
              className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition duration-300"
            >
              View All Plants
            </Link>
          )}
        </div>
      )}

      <div className="mt-10">
        <Link
          to="/"
          className="flex items-center gap-2 text-gray-600 hover:text-gray-800 font-semibold"
        >
          <FaArrowLeft /> Back To Home
        </Link>
      </div>
    </div>
  );
};

export default AllPlants;