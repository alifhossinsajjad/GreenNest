import React from "react";
import { FaFacebook, FaInstagram, FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-emerald-50 text-gray-700">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h6 className="text-lg font-semibold text-green-700 mb-4">
            Our Services
          </h6>
          <ul className="space-y-2">
            <li className="hover:text-green-600 transition cursor-pointer">
              Indoor Plant Sales
            </li>
            <li className="hover:text-green-600 transition cursor-pointer">
              Plant Care Consultation
            </li>
            <li className="hover:text-green-600 transition cursor-pointer">
              Eco Decor Ideas
            </li>
            <li className="hover:text-green-600 transition cursor-pointer">
              Plant Maintenance Support
            </li>
          </ul>
        </div>

        <div>
          <h6 className="text-lg font-semibold text-green-700 mb-4">Company</h6>
          <ul className="space-y-2">
            <li className="hover:text-green-600 transition cursor-pointer">
              About Us
            </li>
            <li className="hover:text-green-600 transition cursor-pointer">
              Contact
            </li>
            <li className="hover:text-green-600 transition cursor-pointer">
              Privacy Policy
            </li>
          </ul>
        </div>

        <div>
          <h6 className="text-lg font-semibold text-green-700 mb-4">
            Follow Us
          </h6>
          <div className="flex gap-4">
            <a className="hover:text-blue-600 transition">
              <FaFacebook size={25} />
            </a>
            <a className="hover:text-pink-500 transition">
              <FaInstagram size={27} />
            </a>
            <a className="hover:text-red-600 transition">
              <FaPinterest size={27} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-green-200 mt-6">
        <p className="text-center text-gray-500 py-5 text-sm">
          &copy; {new Date().getFullYear()} GreenNest. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
