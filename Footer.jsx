import React from 'react';
import facebook from "../assets/facebook.jpg";
import instagram from "../assets/instagram.png";
import Linkedin from "../assets/Linkedin.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <span className="block">&copy; 2024 Travelo. All rights reserved.</span>
        </div>
        <ul className="flex space-x-6 mb-4 md:mb-0">
          <li>
            <a href="#hero" className="hover:text-yellow-500">Home</a>
          </li>
          <li>
            <a href="#services" className="hover:text-yellow-500">About</a>
          </li>
          <li>
            <a href="#recommend" className="hover:text-yellow-500">Places</a>
          </li>
          <li>
            <a href="#testimonials" className="hover:text-yellow-500">Testimonials</a>
          </li>
        </ul>
        <ul className="flex space-x-6">
          <li>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img className="hover:text-yellow-500 text-2xl" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img className="hover:text-yellow-500 text-2xl" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <img className="hover:text-yellow-500 text-2xl" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
