import React from "react";
import { FaFacebook, FaInstagram, FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer sm:footer-horizontal bg-base-300 text-base-content p-10">
        <nav>
          <h6 className="footer-title">Our Services</h6>
          <a className="link link-hover">Indoor Plant Sales</a>
          <a className="link link-hover"> Plant Care Consultation</a>
          <a className="link link-hover">Eco Decor Ideas</a>
          <a className="link link-hover">Plant Maintenance Support</a>
        </nav>
        <nav>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Privacy policy</a>
        </nav>
        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <a>
              <FaFacebook size={25} />
            </a>
            <a>
              <FaInstagram size={27} />
            </a>
            <a>
              <FaPinterest size={27} />
            </a>
          </div>
        </nav>
       
      </footer>
       <aside>
          <p className="text-center p-7 bg-green-100">
            Copyright © {new Date().getFullYear()} - All right reserved
          </p>
        </aside>
    </div>
  );
};

export default Footer;
