import React from "react";
import { motion } from "framer-motion";

import {
  FaTruck,
  FaShieldAlt,
  FaHeadset,
  FaSeedling,
  FaTools,
  FaRecycle,
  FaAward,
  FaCalendarCheck,
} from "react-icons/fa";
import { Link } from "react-router";

const Services = () => {
  const services = [
    {
      icon: <FaTruck className="text-3xl" />,
      title: "Fast & Free Delivery",
      description:
        "Free delivery on all orders over $50. Delivery within 1-3 business days.",
      color: "from-blue-500 to-cyan-500",
      features: ["Free over $50", "1-3 day delivery", "Track your order"],
    },
    {
      icon: <FaShieldAlt className="text-3xl" />,
      title: "30-Day Plant Guarantee",
      description:
        "If your plant doesn't thrive within 30 days, we'll replace it for free.",
      color: "from-green-500 to-emerald-500",
      features: ["Free replacement", "Health check", "Expert advice"],
    },
    {
      icon: <FaHeadset className="text-3xl" />,
      title: "24/7 Plant Support",
      description:
        "Get help from our plant experts anytime. Chat, call, or email support.",
      color: "from-purple-500 to-pink-500",
      features: ["Live chat", "Phone support", "Email support"],
    },
    {
      icon: <FaSeedling className="text-3xl" />,
      title: "Plant Subscription",
      description:
        "Monthly plant delivery. Discover new plants and care products regularly.",
      color: "from-yellow-500 to-orange-500",
      features: ["Monthly delivery", "Care products", "Member discounts"],
    },
    {
      icon: <FaTools className="text-3xl" />,
      title: "Plant Care Workshops",
      description:
        "Free online and in-person workshops for plant care and maintenance.",
      color: "from-red-500 to-rose-500",
      features: ["Weekly workshops", "Expert guidance", "Q&A sessions"],
    },
    {
      icon: <FaRecycle className="text-3xl" />,
      title: "Eco-Friendly Packaging",
      description:
        "100% sustainable, biodegradable packaging for all our deliveries.",
      color: "from-teal-500 to-green-500",
      features: ["Biodegradable", "Recyclable", "Plastic-free"],
    },
    {
      icon: <FaAward className="text-3xl" />,
      title: "Premium Quality Plants",
      description:
        "All plants are nursery-grown, pesticide-free, and carefully inspected.",
      color: "from-indigo-500 to-blue-500",
      features: ["Nursery-grown", "Pesticide-free", "Quality checked"],
    },
    {
      icon: <FaCalendarCheck className="text-3xl" />,
      title: "Plant Health Checkups",
      description:
        "Schedule professional plant health assessments and treatments.",
      color: "from-amber-500 to-yellow-500",
      features: ["Health reports", "Treatment plans", "Follow-up care"],
    },
  ];

  const featuredServices = [
    {
      title: "Commercial Plant Design",
      description:
        "Complete interior and exterior plant design services for businesses.",
      image:
        "https://images.pexels.com/photos/5699298/pexels-photo-5699298.jpeg",
      features: ["Office plants", "Restaurant decor", "Hotel landscaping"],
    },
    {
      title: "Plant Rental Service",
      description:
        "Rent plants for events, offices, or homes. Flexible plans available.",
      image:
        "https://images.pexels.com/photos/6208087/pexels-photo-6208087.jpeg",
      features: ["Event rentals", "Office plants", "Monthly plans"],
    },
    {
      title: "Custom Plant Pots",
      description:
        "Design your own plant pots with our custom pottery service.",
      image:
        "https://images.pexels.com/photos/5850000/pexels-photo-5850000.jpeg",
      features: ["Custom designs", "Various materials", "Personalized"],
    },
  ];

  const stats = [
    { value: "10,000+", label: "Happy Customers" },
    { value: "500+", label: "Plant Varieties" },
    { value: "24/7", label: "Support Available" },
    { value: "30-Day", label: "Guarantee" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Our <span className="text-yellow-300">Green</span> Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 opacity-90"
            >
              Everything you need to grow, nurture, and enjoy your plants
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Link
                to="/allplants"
                className="px-8 py-3 bg-white text-green-600 font-semibold rounded-full hover:bg-gray-100 transition duration-300 shadow-lg"
              >
                Shop Plants
              </Link>
              <Link
                to="/contact"
                className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-green-600 transition duration-300"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full">
            <path
              fill="#f0fdf4"
              fillOpacity="1"
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive plant care services to ensure your green
              friends thrive
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                <div className="p-6">
                  <div
                    className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${service.color} text-white mb-4`}
                  >
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-sm text-gray-500"
                      >
                        <svg
                          className="w-4 h-4 mr-2 text-green-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-6 pb-6">
                  <button className="w-full py-2 px-4 bg-green-50 text-green-600 font-semibold rounded-lg hover:bg-green-100 transition duration-300">
                    Learn More
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16 bg-gradient-to-b from-white to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Premium Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Specialized services for businesses and plant enthusiasts
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl shadow-xl"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="mb-4 opacity-90">{service.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <button className="px-6 py-2 bg-white text-green-600 font-semibold rounded-full hover:bg-gray-100 transition duration-300">
                    Get Quote
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl overflow-hidden shadow-2xl">
            <div className="px-8 py-12 md:p-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Space?
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Let our plant experts help you create the perfect green
                environment
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="px-8 py-3 bg-white text-green-600 font-semibold rounded-full hover:bg-gray-100 transition duration-300 shadow-lg"
                >
                  Book Consultation
                </Link>
                <Link
                  to="/allplants"
                  className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-green-600 transition duration-300"
                >
                  Browse Plants
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              Find answers to common questions about our services
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Do you offer plant maintenance services?",
                a: "Yes, we offer regular plant maintenance packages including watering, pruning, fertilizing, and health checkups.",
              },
              {
                q: "Can you help me choose the right plants for my space?",
                a: "Absolutely! Our plant experts provide free consultations to help you select the perfect plants based on your light conditions, space, and preferences.",
              },
              {
                q: "What's included in your plant guarantee?",
                a: "Our 30-day guarantee covers plant health. If your plant shows signs of distress within 30 days, we'll replace it or provide a full refund.",
              },
              {
                q: "Do you offer corporate plant services?",
                a: "Yes, we provide comprehensive corporate plant solutions including installation, maintenance, and plant rental for offices and businesses.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
              >
                <div className="p-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-green-600"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {faq.q}
                      </h4>
                      <p className="text-gray-600">{faq.a}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
