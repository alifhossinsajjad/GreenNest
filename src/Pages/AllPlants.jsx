import React, { useEffect, useState } from "react";
import AllPlantsCard from '../Components/AllPlantsCard'
import { FaArrowLeft, FaSearch, FaChevronLeft, FaChevronRight, FaStepBackward, FaStepForward } from "react-icons/fa";
import { Link, useLoaderData, useNavigate, useSearchParams } from "react-router";

const AllPlants = () => {
  const data = useLoaderData();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  
  const searchQuery = searchParams.get('q') || '';
  const pageQuery = parseInt(searchParams.get('page')) || 1;
  
  const [allPlants, setAllPlants] = useState([]);
  const [filteredPlants, setFilteredPlants] = useState([]);
  const [currentPage, setCurrentPage] = useState(pageQuery);
  const [localSearchQuery, setLocalSearchQuery] = useState(searchQuery);
  
  const plantsPerPage = 12;

  useEffect(() => {
    // Set initial data
    setAllPlants(data);
    
    // Filter plants based on search query
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
  }, [data, searchQuery]); // Removed setCurrentPage from this effect

  // Separate useEffect to handle page number from URL
  useEffect(() => {
    // Update current page from URL query parameter
    if (pageQuery !== currentPage) {
      setCurrentPage(pageQuery);
    }
  }, [pageQuery, currentPage]);

  // Calculate pagination values
  const totalPages = Math.ceil(filteredPlants.length / plantsPerPage);
  const indexOfLastPlant = currentPage * plantsPerPage;
  const indexOfFirstPlant = indexOfLastPlant - plantsPerPage;
  const currentPlants = filteredPlants.slice(indexOfFirstPlant, indexOfLastPlant);

  const handleSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (localSearchQuery.trim()) {
      params.set('q', localSearchQuery);
    }
    // Reset to page 1 only on new search
    params.set('page', '1');
    navigate(`/allplants?${params.toString()}`);
    setCurrentPage(1); // Update local state too
  };

  const handlePageChange = (pageNumber) => {
    // Validate page number
    if (pageNumber < 1) pageNumber = 1;
    if (pageNumber > totalPages) pageNumber = totalPages;
    
    setCurrentPage(pageNumber);
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    // Preserve search query if exists
    if (searchQuery) {
      params.set('q', searchQuery);
    }
    navigate(`/allplants?${params.toString()}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleClearSearch = () => {
    setLocalSearchQuery('');
    setCurrentPage(1); // Reset to page 1 when clearing search
    navigate('/allplants?page=1');
  };

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) pageNumbers.push(i);
        pageNumbers.push('...');
        pageNumbers.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pageNumbers.push(1);
        pageNumbers.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) pageNumbers.push(i);
      } else {
        pageNumbers.push(1);
        pageNumbers.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) pageNumbers.push(i);
        pageNumbers.push('...');
        pageNumbers.push(totalPages);
      }
    }
    
    return pageNumbers;
  };

  // Handle edge cases for invalid page numbers
  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      // If current page is greater than total pages, go to last page
      handlePageChange(totalPages);
    }
    if (currentPage < 1 && totalPages > 0) {
      // If current page is less than 1, go to first page
      handlePageChange(1);
    }
  }, [currentPage, totalPages]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-900">
            {searchQuery ? `Search Results for "${searchQuery}"` : 'All Plants'}
          </h1>
          
          {/* Stats Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
            <div className="text-gray-600">
              Showing {indexOfFirstPlant + 1}-{Math.min(indexOfLastPlant, filteredPlants.length)} of {filteredPlants.length} plants
              {searchQuery && ` for "${searchQuery}"`}
            </div>
          </div>
          
          {/* Search Bar */}
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search plants by name, category, or description..."
                value={localSearchQuery}
                onChange={(e) => setLocalSearchQuery(e.target.value)}
                className="w-full px-6 py-3 pl-12 pr-24 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent shadow-sm"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-4">
                <FaSearch className="text-gray-400" />
              </div>
              <button
                type="submit"
                className="absolute right-0 top-0 h-full px-6 bg-green-600 hover:bg-green-700 text-white font-medium rounded-r-full transition duration-300"
              >
                Search
              </button>
              {searchQuery && (
                <button
                  type="button"
                  onClick={handleClearSearch}
                  className="absolute right-24 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 text-sm"
                >
                  Clear
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Plants Grid */}
        {currentPlants.length > 0 ? (
          <>
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
              {currentPlants.map((p) => (
                <AllPlantsCard key={p.plantId} p={p} />
              ))}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="mt-12">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  {/* Pagination Info */}
                  <div className="text-gray-600 text-sm">
                    Page {currentPage} of {totalPages}
                  </div>

                  {/* Pagination Buttons */}
                  <div className="flex items-center gap-2">
                    {/* First Page */}
                    <button
                      onClick={() => handlePageChange(1)}
                      disabled={currentPage === 1}
                      className={`p-2 rounded-lg ${
                        currentPage === 1
                          ? 'text-gray-400 cursor-not-allowed'
                          : 'text-gray-700 hover:bg-gray-100 hover:text-green-600'
                      }`}
                      title="First Page"
                    >
                      <FaStepBackward />
                    </button>

                    {/* Previous Page */}
                    <button
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className={`p-2 rounded-lg ${
                        currentPage === 1
                          ? 'text-gray-400 cursor-not-allowed'
                          : 'text-gray-700 hover:bg-gray-100 hover:text-green-600'
                      }`}
                      title="Previous Page"
                    >
                      <FaChevronLeft />
                    </button>

                    {/* Page Numbers */}
                    <div className="flex items-center gap-1">
                      {getPageNumbers().map((pageNumber, index) => (
                        pageNumber === '...' ? (
                          <span key={`ellipsis-${index}`} className="px-2 text-gray-400">
                            ...
                          </span>
                        ) : (
                          <button
                            key={pageNumber}
                            onClick={() => handlePageChange(pageNumber)}
                            className={`w-10 h-10 rounded-lg font-medium transition duration-300 ${
                              currentPage === pageNumber
                                ? 'bg-green-600 text-white shadow-md'
                                : 'text-gray-700 hover:bg-gray-100 hover:text-green-600'
                            }`}
                          >
                            {pageNumber}
                          </button>
                        )
                      ))}
                    </div>

                    {/* Next Page */}
                    <button
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className={`p-2 rounded-lg ${
                        currentPage === totalPages
                          ? 'text-gray-400 cursor-not-allowed'
                          : 'text-gray-700 hover:bg-gray-100 hover:text-green-600'
                      }`}
                      title="Next Page"
                    >
                      <FaChevronRight />
                    </button>

                    {/* Last Page */}
                    <button
                      onClick={() => handlePageChange(totalPages)}
                      disabled={currentPage === totalPages}
                      className={`p-2 rounded-lg ${
                        currentPage === totalPages
                          ? 'text-gray-400 cursor-not-allowed'
                          : 'text-gray-700 hover:bg-gray-100 hover:text-green-600'
                      }`}
                      title="Last Page"
                    >
                      <FaStepForward />
                    </button>
                  </div>

                  {/* Page Jump - Optional */}
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-gray-600">Go to page:</span>
                    <input
                      type="number"
                      min="1"
                      max={totalPages}
                      value={currentPage}
                      onChange={(e) => {
                        const page = parseInt(e.target.value);
                        if (page >= 1 && page <= totalPages) {
                          handlePageChange(page);
                        }
                      }}
                      className="w-16 px-2 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500"
                    />
                  </div>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gray-100 rounded-full mb-6">
              <svg
                className="w-12 h-12 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              No plants found
            </h2>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              {searchQuery 
                ? `We couldn't find any plants matching "${searchQuery}". Try searching with different keywords.`
                : 'No plants are currently available in our collection.'
              }
            </p>
            {searchQuery ? (
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={handleClearSearch}
                  className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition duration-300"
                >
                  View All Plants
                </button>
                <Link
                  to="/contact"
                  className="px-6 py-3 border-2 border-green-600 text-green-600 font-semibold rounded-lg hover:bg-green-50 transition duration-300"
                >
                  Request a Plant
                </Link>
              </div>
            ) : (
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition duration-300"
              >
                Contact Us for Special Requests
              </Link>
            )}
          </div>
        )}

        {/* Back to Home */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-green-600 font-medium transition duration-300"
          >
            <FaArrowLeft /> Back To Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllPlants;