import React from 'react';
import travelreact from "../assets/travelreact.jpeg";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="brand flex items-center space-x-2">
          <img src={travelreact} alt="Travelo Logo" className="h-20 w-20" />
          <span className="text-3xl font-bold">Travelo</span>
        </div>
        <ul className="flex space-x-4 text-lg">
          <li><a href="#Home" className="hover:text-blue-500">Home</a></li>
          <li><a href="#Services" className="hover:text-blue-500">Services</a></li>
          <li><a href="#recommendations" className="hover:text-blue-500">Places</a></li>
          <li><a href="#testimonials" className="hover:text-blue-500">Testimonials</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
