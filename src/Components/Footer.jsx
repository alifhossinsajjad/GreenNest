import React from "react";
import Logo from '../assets/plantlogo.png'
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-emerald-50 text-gray-700">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo Section */}
        <div>
          <div className="mb-4">
            <div className="flex items-center">
              <img src={Logo} alt="" className="w-10" />
              <h2 className="text-2xl font-bold text-green-700">
              <span className="text-emerald-600">Green</span>Nest
            </h2>
            </div>
            <p className="text-sm text-gray-600 mt-1">
              Bringing nature to your doorstep
            </p>
          </div>
          <p className="text-sm text-gray-600">
            Your trusted partner for indoor plants and green living solutions.
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h6 className="text-lg font-semibold text-green-700 mb-4">
            Quick Links
          </h6>
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className="hover:text-green-600 transition cursor-pointer"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/allplants"
                className="hover:text-green-600 transition cursor-pointer"
              >
                Plants Gallery
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="hover:text-green-600 transition cursor-pointer"
              >
                Our Services
              </Link>
            </li>
            <li>
              <Link
                to="/blog-tips"
                className="hover:text-green-600 transition cursor-pointer"
              >
                Blog & Tips
              </Link>
            </li>
           
          </ul>
        </div>

        {/* Services Section */}
        <div>
          <h6 className="text-lg font-semibold text-green-700 mb-4">
            Our Services
          </h6>
          <ul className="space-y-2">
            <li>
              <Link
                to=""
                className="hover:text-green-600 transition cursor-pointer"
              >
                Indoor Plant Sales
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="hover:text-green-600 transition cursor-pointer"
              >
                Plant Care Consultation
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="hover:text-green-600 transition cursor-pointer"
              >
                Eco Decor Ideas
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="hover:text-green-600 transition cursor-pointer"
              >
                Plant Maintenance Support
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="hover:text-green-600 transition cursor-pointer"
              >
                Plant Delivery Service
              </Link>
            </li>
          </ul>
        </div>

        {/* Company & Social Links Section */}
        <div>
          <div className="mb-6">
            <h6 className="text-lg font-semibold text-green-700 mb-4">
              Company
            </h6>
            <ul className="space-y-2">
              <li>
                <Link
                  to=""
                  className="hover:text-green-600 transition cursor-pointer"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-green-600 transition cursor-pointer"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="hover:text-green-600 transition cursor-pointer"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="hover:text-green-600 transition cursor-pointer"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="hover:text-green-600 transition cursor-pointer"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h6 className="text-lg font-semibold text-green-700 mb-4">
              Follow Us
            </h6>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition"
                aria-label="Facebook"
              >
                <FaFacebook size={25} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-700 transition"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={25} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500 transition"
                aria-label="Instagram"
              >
                <FaInstagram size={25} />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-600 transition"
                aria-label="Pinterest"
              >
                <FaPinterest size={25} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="max-w-6xl mx-auto px-6 py-4 border-t border-green-200">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center md:text-left">
          <div>
            <p className="text-sm font-medium text-green-700">Email</p>
            <p className="text-sm text-gray-600">contact@greennest.com</p>
          </div>
          <div>
            <p className="text-sm font-medium text-green-700">Phone</p>
            <p className="text-sm text-gray-600">+88 01824557339</p>
          </div>
          <div>
            <p className="text-sm font-medium text-green-700">Address</p>
            <p className="text-sm text-gray-600">
              123 Green Street, Garden City
            </p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-green-200 mt-6">
        <p className="text-center text-gray-500 py-5 text-sm">
          &copy; {new Date().getFullYear()} GreenNest. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
