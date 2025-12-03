import React, { useState } from "react";
import { motion } from "framer-motion";

import { 
  FaCalendarAlt, 
  FaUser, 
  FaTag, 
  FaArrowRight, 
  FaBookOpen,
  FaLeaf,
  FaWater,
  FaSun,
  FaSeedling,
  FaShareAlt,
  FaBookmark,
  FaChevronLeft,
  FaChevronRight
} from "react-icons/fa";
import { Link } from "react-router";

const BlogTips = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Blog categories
  const categories = [
    { id: "all", name: "All Topics", count: 28, icon: <FaBookOpen /> },
    { id: "care", name: "Plant Care", count: 12, icon: <FaLeaf /> },
    { id: "watering", name: "Watering Tips", count: 8, icon: <FaWater /> },
    { id: "light", name: "Light Guide", count: 6, icon: <FaSun /> },
    { id: "propagation", name: "Propagation", count: 10, icon: <FaSeedling /> },
    { id: "decor", name: "Home Decor", count: 7, icon: <FaTag /> }
  ];

  // Blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "10 Common Plant Care Mistakes You're Probably Making",
      excerpt: "Learn about the most common mistakes plant owners make and how to avoid them for healthier, happier plants.",
      author: "Sarah Green",
      date: "Mar 15, 2024",
      readTime: "8 min read",
      category: "care",
      tags: ["Beginner", "Care", "Mistakes"],
      image: "https://dengarden.com/.image/w_1200,h_675,g_auto,c_fill/MzowMDAwMDAwMDAwMTAzNjk3/hand-with-water-can-watering-indoor-plants-on-kitchen-counter-stockpack-gettyimages.jpg",
      featured: true
    },
    {
      id: 2,
      title: "The Ultimate Guide to Watering Indoor Plants",
      excerpt: "Master the art of watering with our comprehensive guide covering different plant types and seasons.",
      author: "Dr. Plant",
      date: "Mar 12, 2024",
      readTime: "10 min read",
      category: "watering",
      tags: ["Watering", "Guide", "Indoor"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgEDscOlxrIaqyQkw8Lk5MDOAuWOVkewT_XV3BerC86Dt-FMjuzigJCZplvlRdiC106A8&usqp=CAU",
      featured: true
    },
    {
      id: 3,
      title: "How to Propagate Your Plants: A Step-by-Step Guide",
      excerpt: "Turn one plant into many with our easy propagation techniques for popular houseplants.",
      author: "Mike Gardener",
      date: "Mar 10, 2024",
      readTime: "12 min read",
      category: "propagation",
      tags: ["Propagation", "DIY", "Guide"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTXam0NoVpAe4K7brgp8FeJX_Wzra-wVpD0OMQO-E_nsq9PKD4BMVK5RlPa8ksoB-BS_M&usqp=CAU"
    },
    {
      id: 4,
      title: "Best Low-Light Plants for Dark Apartments",
      excerpt: "Don't let low light stop you from having beautiful indoor plants. Here are our top picks.",
      author: "Lisa Plant",
      date: "Mar 8, 2024",
      readTime: "6 min read",
      category: "light",
      tags: ["Low Light", "Apartment", "Beginner"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbhH_KrBqzERHi39GgoBZRPO_LkWLACOWea7SHqtd78Xevvwc90jma3q_FXl7UBSye3qM&usqp=CAU"
    },
    {
      id: 5,
      title: "Natural Pest Control for Houseplants",
      excerpt: "Safe and effective ways to deal with common plant pests without harmful chemicals.",
      author: "Eco Gardener",
      date: "Mar 5, 2024",
      readTime: "7 min read",
      category: "care",
      tags: ["Pests", "Organic", "Care"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgfox9-4XcsdIreBCwAjnMxipki6_j46LGcl67UncXkRwhkpPIkDgpjsi9Zg3HwZr-jdo&usqp=CAU"
    },
    {
      id: 6,
      title: "Creating a Plant Wall: Design Ideas and Tips",
      excerpt: "Transform your space with a stunning living wall. Get inspired with these creative ideas.",
      author: "Design Botanist",
      date: "Mar 3, 2024",
      readTime: "9 min read",
      category: "decor",
      tags: ["Decor", "Design", "Vertical Garden"],
      image: "https://dengarden.com/.image/c_fill,w_4826,h_3202,g_faces:center/MzowMDAwMDAwMDAwMTAzNjk2/plant-care-dust-hobbies-stockpack-gettyimages.jpg"
    },
    {
      id: 7,
      title: "Understanding Plant Nutrition: Fertilizer Basics",
      excerpt: "Everything you need to know about feeding your plants for optimal growth and health.",
      author: "Plant Scientist",
      date: "Feb 28, 2024",
      readTime: "11 min read",
      category: "care",
      tags: ["Fertilizer", "Nutrition", "Advanced"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQE9ha4f72M0iP63uzIOra5CBIwqIKfvSx3Q&s"
    },
    {
      id: 8,
      title: "Seasonal Plant Care: Spring Preparation Guide",
      excerpt: "Get your plants ready for spring with our comprehensive seasonal care checklist.",
      author: "Seasonal Gardener",
      date: "Feb 25, 2024",
      readTime: "8 min read",
      category: "care",
      tags: ["Seasonal", "Spring", "Checklist"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaGEk1lZNfPTQfbPkWRgbkkvqWy2mPAqQO_g&s"
    },
    {
      id: 9,
      title: "Pet-Friendly Plants: Safe Choices for Homes with Animals",
      excerpt: "Beautiful houseplants that are safe for your furry friends. Create a pet-safe indoor garden.",
      author: "Pet Lover",
      date: "Feb 22, 2024",
      readTime: "6 min read",
      category: "decor",
      tags: ["Pet Safe", "Toxic Plants", "Family"],
      image: "https://live-production.wcms.abc-cdn.net.au/a89bcfca3a1ad38021bbf3372c054e8e?impolicy=wcms_crop_resize&cropH=541&cropW=960&xPos=0&yPos=43&width=862&height=485"
    }
  ];

  // Featured tips
  const quickTips = [
    {
      title: "Watering Rule",
      tip: "Water when top inch of soil is dry",
      icon: <FaWater />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Light Needs",
      tip: "Most houseplants prefer indirect light",
      icon: <FaSun />,
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Humidity",
      tip: "Group plants together for humidity",
      icon: <FaLeaf />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Cleaning",
      tip: "Wipe leaves monthly for better growth",
      icon: <FaSeedling />,
      color: "from-teal-500 to-green-500"
    }
  ];

  // Filter posts by category
  const filteredPosts = activeCategory === "all" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  // Pagination logic
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-emerald-600 to-green-500 text-white">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-700/20 to-green-600/20"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full translate-y-48 -translate-x-48"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6"
            >
              <FaBookOpen className="text-lg" />
              <span className="font-medium">Plant Knowledge Hub</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Grow Your <span className="text-yellow-300">Plant</span> Knowledge
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 opacity-90"
            >
              Expert tips, guides, and inspiration for plant lovers of all levels
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Link
                to="/allplants"
                className="px-8 py-3 bg-white text-emerald-600 font-semibold rounded-full hover:bg-gray-100 transition duration-300 shadow-lg hover:shadow-xl"
              >
                Shop Plants
              </Link>
              <a
                href="#subscribe"
                className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-emerald-600 transition duration-300"
              >
                Get Weekly Tips
              </a>
            </motion.div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full">
            <path fill="#f0fdf4" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Quick Tips Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickTips.map((tip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className={`inline-flex p-3 rounded-full bg-gradient-to-br ${tip.color} text-white mb-4`}>
                  {tip.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{tip.title}</h3>
                <p className="text-gray-600 text-sm">{tip.tip}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar - Categories */}
            <div className="lg:w-1/4">
              <div className="sticky top-24">
                <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                    <FaBookOpen className="mr-2 text-emerald-600" />
                    Categories
                  </h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => {
                          setActiveCategory(category.id);
                          setCurrentPage(1);
                        }}
                        className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-300 ${
                          activeCategory === category.id
                            ? 'bg-emerald-50 text-emerald-700'
                            : 'hover:bg-gray-50 text-gray-700'
                        }`}
                      >
                        <div className="flex items-center">
                          <span className="mr-3 text-emerald-600">
                            {category.icon}
                          </span>
                          <span className="font-medium">{category.name}</span>
                        </div>
                        <span className="bg-emerald-100 text-emerald-800 text-xs font-semibold px-2 py-1 rounded-full">
                          {category.count}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Newsletter */}
                <div className="bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl shadow-lg p-6 text-white">
                  <h3 className="text-lg font-bold mb-3">Get Weekly Plant Tips</h3>
                  <p className="text-sm opacity-90 mb-4">
                    Join 10,000+ plant lovers receiving expert care tips
                  </p>
                  <form className="space-y-3">
                    <input
                      type="email"
                      placeholder="Your email"
                      className="w-full px-4 py-2 rounded-lg bg-white/20 placeholder-white/70 border border-white/30 focus:outline-none focus:border-white"
                    />
                    <button
                      type="submit"
                      className="w-full py-2 bg-white text-emerald-600 font-semibold rounded-lg hover:bg-gray-100 transition duration-300"
                    >
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Main Content - Blog Posts */}
            <div className="lg:w-3/4">
              {/* Featured Posts */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Articles</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {blogPosts.filter(post => post.featured).slice(0, 2).map((post, index) => (
                    <motion.article
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      viewport={{ once: true }}
                      className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
                    >
                      <div className="relative h-64 overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-emerald-500 text-white text-sm font-semibold rounded-full">
                            Featured
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                          <span className="flex items-center">
                            <FaCalendarAlt className="mr-1" />
                            {post.date}
                          </span>
                          <span>•</span>
                          <span className="flex items-center">
                            <FaUser className="mr-1" />
                            {post.author}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition duration-300">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 mb-4">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex gap-2">
                            {post.tags.map((tag, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-medium rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <Link
                            to={`/blog/${post.id}`}
                            className="flex items-center text-emerald-600 font-semibold hover:text-emerald-700 transition duration-300"
                          >
                            Read More
                            <FaArrowRight className="ml-2" />
                          </Link>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </div>
              </div>

              {/* All Posts */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">
                    {activeCategory === 'all' ? 'Latest Articles' : `${categories.find(c => c.id === activeCategory)?.name}`}
                  </h2>
                  <div className="text-sm text-gray-500">
                    Showing {indexOfFirstPost + 1}-{Math.min(indexOfLastPost, filteredPosts.length)} of {filteredPosts.length} articles
                  </div>
                </div>

                {currentPosts.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {currentPosts.map((post, index) => (
                      <motion.article
                        key={post.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100"
                      >
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                          />
                        </div>
                        <div className="p-5">
                          <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                            <span className="flex items-center">
                              <FaCalendarAlt className="mr-1" />
                              {post.date}
                            </span>
                            <span className="px-2 py-1 bg-gray-100 rounded">
                              {post.readTime}
                            </span>
                          </div>
                          
                          <h3 className="font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition duration-300 line-clamp-2">
                            {post.title}
                          </h3>
                          
                          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                            {post.excerpt}
                          </p>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center text-sm text-gray-500">
                              <FaUser className="mr-2" />
                              {post.author}
                            </div>
                            <div className="flex items-center gap-3">
                              <button
                                className="text-gray-400 hover:text-emerald-600 transition duration-300"
                                title="Save for later"
                              >
                                <FaBookmark />
                              </button>
                              <button
                                className="text-gray-400 hover:text-emerald-600 transition duration-300"
                                title="Share"
                              >
                                <FaShareAlt />
                              </button>
                            </div>
                          </div>
                        </div>
                      </motion.article>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <FaBookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-700 mb-2">No articles found</h3>
                    <p className="text-gray-600">Try selecting a different category</p>
                  </div>
                )}

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex justify-center items-center gap-2 mt-12">
                    <button
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className={`p-2 rounded-lg ${
                        currentPage === 1
                          ? 'text-gray-400 cursor-not-allowed'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <FaChevronLeft />
                    </button>
                    
                    {[...Array(totalPages)].map((_, index) => {
                      const pageNumber = index + 1;
                      const showEllipsis = totalPages > 7 && Math.abs(pageNumber - currentPage) > 2;
                      const showPage = pageNumber === 1 || pageNumber === totalPages || 
                                     (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1);
                      
                      if (showPage) {
                        return (
                          <button
                            key={pageNumber}
                            onClick={() => handlePageChange(pageNumber)}
                            className={`w-10 h-10 rounded-lg font-medium transition duration-300 ${
                              currentPage === pageNumber
                                ? 'bg-emerald-500 text-white'
                                : 'text-gray-700 hover:bg-gray-100'
                            }`}
                          >
                            {pageNumber}
                          </button>
                        );
                      } else if (showEllipsis && (pageNumber === currentPage - 2 || pageNumber === currentPage + 2)) {
                        return (
                          <span key={pageNumber} className="px-2 text-gray-400">
                            ...
                          </span>
                        );
                      }
                      return null;
                    })}
                    
                    <button
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className={`p-2 rounded-lg ${
                        currentPage === totalPages
                          ? 'text-gray-400 cursor-not-allowed'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <FaChevronRight />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="subscribe" className="py-16 bg-gradient-to-r from-emerald-500 to-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Never Miss a Plant Tip
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and get weekly plant care tips, exclusive content, and special offers
            </p>
            <form className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-3 rounded-full border-0 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button
                  type="submit"
                  className="px-8 py-3 bg-white text-emerald-600 font-semibold rounded-full hover:bg-gray-100 transition duration-300 shadow-lg"
                >
                  Subscribe Now
                </button>
              </div>
              <p className="text-white/70 text-sm mt-3">
                No spam, just greenery! Unsubscribe anytime.
              </p>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Popular Tags */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Popular Topics</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Beginner Tips", "Plant Care", "Propagation", "Watering", "Fertilizing", 
              "Pest Control", "Pruning", "Repotting", "Seasonal Care", "Plant Diseases",
              "Soil Mix", "Humidity", "Light Requirements", "Air Purifying", "Pet Safe"
            ].map((tag, index) => (
              <motion.button
                key={tag}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-emerald-100 hover:text-emerald-700 transition duration-300"
              >
                {tag}
              </motion.button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogTips;