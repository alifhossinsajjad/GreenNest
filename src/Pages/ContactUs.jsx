import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { toast } from 'react-toastify';
import { 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaClock, 
  FaFacebook, 
  FaInstagram, 
  FaTwitter, 
  FaLinkedin,
  FaWhatsapp,
  FaPaperPlane,
  FaCheckCircle,
  FaHeadset,
  FaLeaf,
  FaBuilding
} from 'react-icons/fa';
import { Link } from 'react-router';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    contactMethod: 'email'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast.success('Message sent successfully! We\'ll get back to you within 24 hours.', {
      position: "top-right",
      autoClose: 5000,
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      contactMethod: 'email'
    });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: "Our Location",
      details: ["123 Green Street", "Plantville, PV 12345", "United States"],
      color: "from-green-500 to-emerald-500",
      link: "https://maps.google.com",
      linkText: "View on Map"
    },
    {
      icon: <FaPhoneAlt className="text-2xl" />,
      title: "Phone Numbers",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
      color: "from-blue-500 to-cyan-500",
      link: "tel:+15551234567",
      linkText: "Call Now"
    },
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: "Email Address",
      details: ["hello@greenshop.com", "support@greenshop.com"],
      color: "from-purple-500 to-pink-500",
      link: "mailto:hello@greenshop.com",
      linkText: "Send Email"
    },
    {
      icon: <FaClock className="text-2xl" />,
      title: "Business Hours",
      details: ["Mon-Fri: 9:00 AM - 7:00 PM", "Sat: 10:00 AM - 5:00 PM", "Sun: 11:00 AM - 4:00 PM"],
      color: "from-orange-500 to-yellow-500",
      link: null
    }
  ];

  const departments = [
    {
      name: "Customer Support",
      email: "support@greenshop.com",
      phone: "+1 (555) 123-4000",
      description: "Order issues, product questions, returns"
    },
    {
      name: "Plant Care Advice",
      email: "care@greenshop.com",
      phone: "+1 (555) 123-4001",
      description: "Plant care questions, troubleshooting"
    },
    {
      name: "Commercial Sales",
      email: "sales@greenshop.com",
      phone: "+1 (555) 123-4002",
      description: "Bulk orders, corporate accounts"
    },
    {
      name: "Partnerships",
      email: "partners@greenshop.com",
      phone: "+1 (555) 123-4003",
      description: "Business partnerships, collaborations"
    }
  ];

  const faqs = [
    {
      question: "What is your response time for emails?",
      answer: "We typically respond to all emails within 24 hours during business days. For urgent matters, please call our support line."
    },
    {
      question: "Do you offer plant consultations?",
      answer: "Yes! We offer free 15-minute plant consultations. Book through our website or call our plant care department."
    },
    {
      question: "What are your shipping times?",
      answer: "Most orders ship within 1-2 business days. Delivery takes 3-5 business days for standard shipping."
    },
    {
      question: "Can I visit your physical store?",
      answer: "Yes! Our flagship store is open during business hours. We'd love to see you in person!"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-green-600 to-emerald-700 text-white">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-48 translate-x-48"></div>
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
              <FaHeadset className="text-lg" />
              <span className="font-medium">We're Here to Help</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Get in <span className="text-yellow-300">Touch</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 opacity-90"
            >
              Have questions about plants, orders, or partnerships? Our team is here to help!
            </motion.p>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full">
            <path fill="#f0fdf4" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 -mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              >
                <div className={`h-2 bg-gradient-to-r ${info.color}`}></div>
                <div className="p-6 text-center">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${info.color} text-white mb-4`}>
                    {info.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{info.title}</h3>
                  <div className="space-y-2 mb-6">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600">{detail}</p>
                    ))}
                  </div>
                  {info.link && (
                    <a
                      href={info.link}
                      className={`inline-block px-6 py-2 bg-gradient-to-r ${info.color} text-white font-semibold rounded-full hover:opacity-90 transition duration-300`}
                      target={info.link.startsWith('http') ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                    >
                      {info.linkText}
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-green-100 rounded-lg">
                  <FaPaperPlane className="text-green-600 text-xl" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Send us a Message</h2>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="How can we help?"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Contact Method
                  </label>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    {['email', 'phone'].map((method) => (
                      <label
                        key={method}
                        className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition duration-300 ${
                          formData.contactMethod === method
                            ? 'border-green-500 bg-green-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <input
                          type="radio"
                          name="contactMethod"
                          value={method}
                          checked={formData.contactMethod === method}
                          onChange={handleChange}
                          className="w-4 h-4 text-green-600 focus:ring-green-500"
                        />
                        <span className="ml-3 font-medium capitalize">{method}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                    placeholder="Tell us about your inquiry..."
                  ></textarea>
                </div>

                <div className="flex items-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:opacity-90 transition duration-300 flex items-center gap-2 ${
                      isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>

            {/* Departments & Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Departments */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <FaBuilding className="text-blue-600 text-xl" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Contact Departments</h2>
                </div>
                
                <div className="space-y-6">
                  {departments.map((dept, index) => (
                    <div
                      key={index}
                      className="p-4 border border-gray-200 rounded-xl hover:border-green-300 hover:bg-green-50 transition duration-300"
                    >
                      <h3 className="font-bold text-gray-900 mb-2">{dept.name}</h3>
                      <p className="text-sm text-gray-600 mb-3">{dept.description}</p>
                      <div className="flex flex-col sm:flex-row gap-4 text-sm">
                        <a
                          href={`mailto:${dept.email}`}
                          className="text-blue-600 hover:text-blue-700 font-medium"
                        >
                          {dept.email}
                        </a>
                        <a
                          href={`tel:${dept.phone}`}
                          className="text-green-600 hover:text-green-700 font-medium"
                        >
                          {dept.phone}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQs */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <FaCheckCircle className="text-purple-600 text-xl" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
                </div>
                
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div
                      key={index}
                      className="border-l-4 border-green-500 pl-4 py-2"
                    >
                      <h4 className="font-semibold text-gray-900 mb-1">{faq.question}</h4>
                      <p className="text-gray-600 text-sm">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
                <p className="mb-6 opacity-90">Follow us for plant tips, updates, and special offers!</p>
                
                <div className="flex gap-4">
                  {[
                    { icon: <FaFacebook />, label: 'Facebook', color: 'hover:bg-blue-600' },
                    { icon: <FaInstagram />, label: 'Instagram', color: 'hover:bg-pink-600' },
                    { icon: <FaTwitter />, label: 'Twitter', color: 'hover:bg-sky-500' },
                    { icon: <FaLinkedin />, label: 'LinkedIn', color: 'hover:bg-blue-700' },
                    { icon: <FaWhatsapp />, label: 'WhatsApp', color: 'hover:bg-green-700' }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href="#"
                      className={`flex items-center justify-center w-12 h-12 bg-white/20 rounded-full text-xl hover:scale-110 transition duration-300 ${social.color}`}
                      title={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map & Location */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Visit Our Store</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Come visit our flagship store and experience the beauty of our plants in person
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="h-96 bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center">
                  <div className="text-center">
                    <FaMapMarkerAlt className="text-6xl text-green-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">GreenShop Flagship Store</h3>
                    <p className="text-gray-600">123 Green Street, Plantville, PV 12345</p>
                    <button className="mt-4 px-6 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition duration-300">
                      Get Directions
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                  <FaLeaf className="text-green-600 mr-2" />
                  Store Features
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-center text-sm text-gray-600">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Over 500+ plant varieties
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Free plant consultations
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Gardening workshops
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Coffee & plant lounge
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Free parking available
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-6">
                <h4 className="font-bold text-gray-900 mb-4">Need Immediate Help?</h4>
                <div className="space-y-4">
                  <a
                    href="tel:+15551234567"
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition duration-300"
                  >
                    <FaPhoneAlt />
                    Call Now: +1 (555) 123-4567
                  </a>
                  <a
                    href="https://wa.me/15551234567"
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl overflow-hidden shadow-2xl">
            <div className="px-8 py-12 md:p-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Grow With Us?
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Whether you're a beginner or a seasoned plant parent, we're here to help you succeed
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/allplants"
                  className="px-8 py-3 bg-white text-green-600 font-semibold rounded-full hover:bg-gray-100 transition duration-300 shadow-lg"
                >
                  Browse Plants
                </Link>
                <Link
                  to="/services"
                  className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-green-600 transition duration-300"
                >
                  Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Response Time Promise */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-green-50 rounded-full">
              <FaCheckCircle className="text-green-600" />
              <span className="font-medium text-green-700">
                We promise to respond within 24 hours
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;