import React, { useState, useEffect } from "react";

import Loading from "./Loading";
import { Link, useSearchParams } from "react-router";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [plantsData, setPlantsData] = useState([]);

  useEffect(() => {
    // Fetch plants data
    fetch("/Data/Plant.json")
      .then((res) => res.json())
      .then((data) => {
        setPlantsData(data);

        // Filter plants based on search query
        if (query.trim()) {
          const filtered = data.filter(
            (plant) =>
              plant.plantName.toLowerCase().includes(query.toLowerCase()) ||
              plant.category.toLowerCase().includes(query.toLowerCase()) ||
              plant.description.toLowerCase().includes(query.toLowerCase())
          );
          setSearchResults(filtered);
        } else {
          setSearchResults(data);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching plants:", error);
        setLoading(false);
      });
  }, [query]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Search Results for "{query}"
          </h1>
          <p className="text-gray-600">
            Found {searchResults.length}{" "}
            {searchResults.length === 1 ? "plant" : "plants"}
          </p>
        </div>

        {/* Results Grid */}
        {searchResults.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {searchResults.map((plant) => (
              <div
                key={plant.plantId}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 border border-gray-100 hover:border-green-200 group"
              >
                <Link to={`/plantdetails/${plant.plantId}`}>
                  <div className="relative">
                    <img
                      src={plant.image}
                      alt={plant.plantName}
                      className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
                    />
                    <div className="absolute top-3 right-3">
                      {plant.availableStock === 0 ? (
                        <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                          Out of Stock
                        </span>
                      ) : (
                        <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                          In Stock
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-800 mb-1">
                      {plant.plantName}
                    </h3>
                    <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                      {plant.description}
                    </p>
                    <div className="flex items-center mb-2">
                      <div className="flex text-yellow-400 mr-2">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(plant.rating)
                                ? "fill-current"
                                : "text-gray-300"
                            }`}
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-sm text-gray-500">
                        ({plant.rating})
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-green-700 font-bold text-lg">
                        ${plant.price}
                      </span>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                        {plant.category}
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
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
              We couldn't find any plants matching "{query}"
            </p>
            <Link
              to="/allplants"
              className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition duration-300"
            >
              Browse All Plants
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
