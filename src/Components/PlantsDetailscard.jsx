import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router";

const PlantsDetailscard = ({ plants }) => {
  const navigate = useNavigate();
  const {
    image,
    plantName,
    price,
    rating,
    availableStock,
    careLevel,
    description,
    providerName,
    category,
    plantId,
  } = plants;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(image);
  const [wishlisted, setWishlisted] = useState(false);
  const [activeTab, setActiveTab] = useState("description");
  const [searchQuery, setSearchQuery] = useState("");

  const relatedImages = [
    "https://images.pexels.com/photos/4503273/pexels-photo-4503273.jpeg",
    "https://images.pexels.com/photos/4503271/pexels-photo-4503271.jpeg",
    "https://images.pexels.com/photos/4503272/pexels-photo-4503272.jpeg",
    "https://images.pexels.com/photos/7655914/pexels-photo-7655914.jpeg",
  ];

  const handleBookConsultation = (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      toast.error("Please fill in both Name and Email!");
      return;
    }
    toast.success(`Consultation booked successfully for ${name}! 🌱`);
    setName("");
    setEmail("");
  };

  const handleAddToCart = () => {
    toast.success(`${plantName} added to cart! 🛒`);
  };

  const handleWishlist = () => {
    setWishlisted(!wishlisted);
    toast.success(
      wishlisted ? "Removed from wishlist" : "Added to wishlist! ❤️"
    );
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Link copied to clipboard! 📋");
  };

const handleSearch = (e) => {
  e.preventDefault();
  if (searchQuery.trim()) {
   
    navigate(`/allplants?q=${encodeURIComponent(searchQuery)}`);
  } else {
    navigate('/allplants');
  }
};

  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(
          <svg
            key={i}
            className="w-5 h-5 text-yellow-400 fill-current"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        );
      } else if (hasHalfStar && i === fullStars + 1) {
        stars.push(
          <svg
            key={i}
            className="w-5 h-5 text-yellow-400 fill-current"
            viewBox="0 0 20 20"
          >
            <defs>
              <linearGradient id="half">
                <stop offset="50%" stopColor="#fbbf24" />
                <stop offset="50%" stopColor="#d1d5db" />
              </linearGradient>
            </defs>
            <path
              fill="url(#half)"
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            />
          </svg>
        );
      } else {
        stars.push(
          <svg
            key={i}
            className="w-5 h-5 text-gray-300 fill-current"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        );
      }
    }
    return stars;
  };

  return (
    <>
      {/* Clean Top Bar with Only Search and Navigation */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left: Brand Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="ml-2 text-xl font-bold text-green-700 hidden sm:block">
                  GreenShop
                </span>
              </Link>
            </div>

            {/* Center: Search Bar */}
            <div className="flex-1 max-w-2xl mx-4">
              <form onSubmit={handleSearch} className="relative">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search plants, accessories, pots..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-2.5 bg-gray-50 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                  <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      ></path>
                    </svg>
                  </div>
                  <button
                    type="submit"
                    className="absolute right-0 top-0 h-full px-6 bg-green-600 hover:bg-green-700 text-white font-medium rounded-r-full transition duration-300"
                  >
                    Search
                  </button>
                </div>
              </form>
            </div>

            {/* Right: Action Buttons */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigate(-1)}
                className="flex items-center text-gray-600 hover:text-green-600 transition duration-300"
              >
                <svg
                  className="w-5 h-5 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  ></path>
                </svg>
                <span className="hidden sm:inline">Back</span>
              </button>
              
            </div>
          </div>
        </div>
      </div>

      {/* Main Content - Two Column Layout */}
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Breadcrumb */}
          <div className="mb-6">
            <nav className="text-sm text-gray-600">
              <Link
                to="/"
                className="hover:text-green-600 transition duration-300"
              >
                Home
              </Link>
              <span className="mx-2">/</span>
              <Link
                to="/allplants"
                className="hover:text-green-600 transition duration-300"
              >
                Plants
              </Link>
              <span className="mx-2">/</span>
              <span className="text-green-700 font-medium">{plantName}</span>
            </nav>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - Product Images */}
            <div>
              {/* Main Image */}
              <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden mb-4">
                <img
                  src={selectedImage}
                  alt={plantName}
                  className="w-full h-auto max-h-[500px] object-cover"
                />

                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {availableStock === 0 && (
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                      Out of Stock
                    </span>
                  )}
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                    {careLevel} Care
                  </span>
                  <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                    20% OFF
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                  <button
                    onClick={handleWishlist}
                    className="bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 transition duration-300"
                    title={
                      wishlisted ? "Remove from wishlist" : "Add to wishlist"
                    }
                  >
                    <svg
                      className={`w-5 h-5 ${
                        wishlisted
                          ? "text-red-500 fill-current"
                          : "text-gray-400"
                      }`}
                      fill={wishlisted ? "currentColor" : "none"}
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      ></path>
                    </svg>
                  </button>
                  <button
                    onClick={handleShare}
                    className="bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 transition duration-300"
                    title="Share"
                  >
                    <svg
                      className="w-5 h-5 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>

              {/* Thumbnail Gallery */}
              <div className="flex space-x-3 overflow-x-auto pb-2 scrollbar-hide">
                {[image, ...relatedImages].map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(img)}
                    className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition duration-300 ${
                      selectedImage === img
                        ? "border-green-500 ring-2 ring-green-200"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`View ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column - Product Details */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl shadow-lg p-6 lg:p-8"
              >
                {/* Category and SKU */}
                <div className="flex flex-wrap items-center justify-between mb-4">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {category}
                  </span>
                  <span className="text-gray-500 text-sm">
                    SKU: PLANT-{(plantId || "0000").toString().padStart(4, "0")}
                  </span>
                </div>

                {/* Product Title */}
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                  {plantName}
                </h1>

                {/* Rating and Reviews */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex items-center">
                    {renderStars()}
                    <span className="ml-2 text-gray-600 font-medium">
                      ({rating})
                    </span>
                  </div>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-600">
                    {Math.floor(Math.random() * 1000) + 100} reviews
                  </span>
                  <span className="text-gray-400">•</span>
                  <span className="flex items-center text-sm">
                    <svg
                      className="w-4 h-4 mr-1 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    In Stock: {availableStock}
                  </span>
                </div>

                {/* Price Section */}
                <div className="mb-8">
                  <div className="flex items-baseline space-x-4 mb-2">
                    <span className="text-4xl lg:text-5xl font-bold text-green-700">
                      ${price}
                    </span>
                    <span className="text-xl lg:text-2xl text-gray-500 line-through">
                      ${(price * 1.2).toFixed(2)}
                    </span>
                    <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">
                      Save 20%
                    </span>
                  </div>
                  <p className="text-green-600 font-medium">
                    Inclusive of all taxes • Free shipping
                  </p>
                </div>

                {/* Product Description */}
                <div className="mb-8">
                  <p className="text-gray-600 leading-relaxed line-clamp-3">
                    {description}
                  </p>
                  <Link
                    to="#description"
                    className="text-green-600 hover:text-green-700 font-medium text-sm"
                  >
                    Read more
                  </Link>
                </div>

                {/* Quantity Selector */}
                <div className="mb-8">
                  <label className="block text-gray-700 font-medium mb-2">
                    Quantity
                  </label>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center border border-gray-300 rounded-lg">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="px-4 py-3 text-gray-600 hover:bg-gray-100 transition duration-300"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M20 12H4"
                          ></path>
                        </svg>
                      </button>
                      <span className="px-4 py-3 w-16 text-center text-lg font-semibold">
                        {quantity}
                      </span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="px-4 py-3 text-gray-600 hover:bg-gray-100 transition duration-300"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 4v16m8-8H4"
                          ></path>
                        </svg>
                      </button>
                    </div>
                    <div className="text-lg">
                      <span className="text-gray-600">Total: </span>
                      <span className="text-2xl font-bold text-green-700 ml-2">
                        ${(price * quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <button
                    onClick={handleAddToCart}
                    disabled={availableStock === 0}
                    className={`flex items-center justify-center gap-2 px-6 py-4 rounded-lg font-semibold text-lg transition duration-300 ${
                      availableStock === 0
                        ? "bg-gray-300 cursor-not-allowed"
                        : "bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl"
                    }`}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      ></path>
                    </svg>
                    {availableStock === 0 ? "Out of Stock" : "Add to Cart"}
                  </button>
                  <button
                    onClick={() => toast.info("Proceeding to checkout!")}
                    disabled={availableStock === 0}
                    className={`px-6 py-4 rounded-lg font-semibold text-lg transition duration-300 ${
                      availableStock === 0
                        ? "bg-gray-300 cursor-not-allowed"
                        : "bg-orange-500 hover:bg-orange-600 text-white shadow-lg hover:shadow-xl"
                    }`}
                  >
                    Buy Now
                  </button>
                </div>

                {/* Quick Features */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <div className="flex justify-center mb-1">
                      <svg
                        className="w-6 h-6 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        ></path>
                      </svg>
                    </div>
                    <p className="text-xs font-medium text-gray-700">
                      Air Purifier
                    </p>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <div className="flex justify-center mb-1">
                      <svg
                        className="w-6 h-6 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                    </div>
                    <p className="text-xs font-medium text-gray-700">
                      2-Day Delivery
                    </p>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <div className="flex justify-center mb-1">
                      <svg
                        className="w-6 h-6 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        ></path>
                      </svg>
                    </div>
                    <p className="text-xs font-medium text-gray-700">
                      30-Day Warranty
                    </p>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <div className="flex justify-center mb-1">
                      <svg
                        className="w-6 h-6 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                        ></path>
                      </svg>
                    </div>
                    <p className="text-xs font-medium text-gray-700">
                      Secure Payment
                    </p>
                  </div>
                </div>

                {/* Consultation Form */}
                <div className="border-t pt-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      ></path>
                    </svg>
                    Free Plant Care Consultation
                  </h3>
                  <form onSubmit={handleBookConsultation} className="space-y-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <input
                        type="text"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        required
                      />
                      <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition duration-300"
                    >
                      Book Free Consultation
                    </button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Product Details Tabs */}
          <div className="mt-8 bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="border-b border-gray-200">
              <div className="flex overflow-x-auto scrollbar-hide">
                {[
                  "description",
                  "care",
                  "specifications",
                  "reviews",
                  "shipping",
                ].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-shrink-0 px-6 py-4 font-medium whitespace-nowrap transition duration-300 ${
                      activeTab === tab
                        ? "text-green-600 border-b-2 border-green-600"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    {tab === "description" && "Product Description"}
                    {tab === "care" && "Care Guide"}
                    {tab === "specifications" && "Specifications"}
                    {tab === "reviews" &&
                      `Reviews (${Math.floor(Math.random() * 100)})`}
                    {tab === "shipping" && "Shipping & Returns"}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-6 lg:p-8">
              {activeTab === "description" && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    About {plantName}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {description}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-800">
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <svg
                            className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                          <span>NASA certified air purifying plant</span>
                        </li>
                        <li className="flex items-start">
                          <svg
                            className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                          <span>Perfect for indoor environments</span>
                        </li>
                        <li className="flex items-start">
                          <svg
                            className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                          <span>Low maintenance and pet-friendly</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">
                        Benefits
                      </h4>
                      <p className="text-gray-600">
                        Improves air quality, reduces stress, enhances
                        productivity, and adds natural beauty to your space.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "care" && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900">
                    Care Instructions
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-green-50 p-5 rounded-xl">
                      <h4 className="font-semibold text-green-700 mb-2 flex items-center">
                        <svg
                          className="w-5 h-5 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4 4 0 003 15z"
                          ></path>
                        </svg>
                        Watering
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Water every 7-10 days. Keep soil moist but not soggy.
                      </p>
                    </div>
                    <div className="bg-green-50 p-5 rounded-xl">
                      <h4 className="font-semibold text-green-700 mb-2 flex items-center">
                        <svg
                          className="w-5 h-5 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                          ></path>
                        </svg>
                        Light
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Bright, indirect sunlight. Avoid direct afternoon sun.
                      </p>
                    </div>
                    <div className="bg-green-50 p-5 rounded-xl">
                      <h4 className="font-semibold text-green-700 mb-2 flex items-center">
                        <svg
                          className="w-5 h-5 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                          ></path>
                        </svg>
                        Temperature
                      </h4>
                      <p className="text-gray-600 text-sm">
                        65-80°F (18-27°C). Keep away from cold drafts.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "specifications" && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Plant Specifications
                  </h3>
                  <div className="overflow-hidden rounded-lg border border-gray-200">
                    <table className="min-w-full divide-y divide-gray-200">
                      <tbody className="divide-y divide-gray-200">
                        <tr className="hover:bg-gray-50">
                          <td className="px-6 py-4 font-medium text-gray-900">
                            Plant Type
                          </td>
                          <td className="px-6 py-4 text-gray-600">
                            {category}
                          </td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="px-6 py-4 font-medium text-gray-900">
                            Care Level
                          </td>
                          <td className="px-6 py-4 text-gray-600">
                            {careLevel}
                          </td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="px-6 py-4 font-medium text-gray-900">
                            Mature Size
                          </td>
                          <td className="px-6 py-4 text-gray-600">
                            2-3 feet tall
                          </td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="px-6 py-4 font-medium text-gray-900">
                            Blooming Period
                          </td>
                          <td className="px-6 py-4 text-gray-600">
                            Spring to Summer
                          </td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="px-6 py-4 font-medium text-gray-900">
                            Toxicity
                          </td>
                          <td className="px-6 py-4 text-gray-600">
                            Pet-friendly
                          </td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="px-6 py-4 font-medium text-gray-900">
                            Air Purifying
                          </td>
                          <td className="px-6 py-4 text-gray-600">
                            Yes (NASA certified)
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Related Products */}
          <div className="mt-12">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900">
                Customers Also Bought
              </h2>
              <Link
                to="/plants"
                className="text-green-600 hover:text-green-700 font-medium flex items-center"
              >
                View All
                <svg
                  className="w-5 h-5 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 border border-gray-100 hover:border-green-200 group"
                >
                  <div className="relative">
                    <img
                      src="https://images.pexels.com/photos/4503273/pexels-photo-4503273.jpeg"
                      alt="Related plant"
                      className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
                    />
                    <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md hover:bg-gray-50 opacity-0 group-hover:opacity-100 transition duration-300">
                      <svg
                        className="w-4 h-4 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        ></path>
                      </svg>
                    </button>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-800 mb-1">
                      Monstera Deliciosa
                    </h3>
                    <div className="flex items-center mb-2">
                      <div className="flex text-yellow-400 mr-2">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-4 h-4 fill-current"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-sm text-gray-500">(4.5)</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-green-700 font-bold text-lg">
                        $24.99
                      </span>
                      <button className="text-green-600 hover:text-green-700 font-medium text-sm flex items-center">
                        Add to Cart
                        <svg
                          className="w-4 h-4 ml-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlantsDetailscard;
