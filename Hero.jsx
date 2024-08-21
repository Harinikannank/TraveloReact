import React from 'react';
import heroreact from "../assets/heroreact.png";

const Hero = () => {
  return (
    <section id="hero" className="relative mt-8 w-full h-screen">
      <div className="h-full">
        <img src={heroreact} alt="Beach" className="w-full h-full object-cover"/>
      </div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center gap-4 z-10">
        <div className="text-white">
          <h1 className="text-5xl tracking-wide text-blue-900">TRAVEL TO EXPLORE</h1>
          <p className="mt-2 text-xl text-blue-900 max-w-lg">
            Jobs fill your pocket, but adventures fill your soul. To Travel is to Live. Take only memories, leave only footprints. A journey of a thousand miles begins with a single step.
          </p>
        </div> 
        <div className="flex bg-white bg-opacity-80 p-4 rounded-lg space-x-4">
          <div className="flex flex-col items-start">
            <label className="text-lg text-blue-900">Where you want to go</label>
            <input className="bg-transparent text-center border-none text-black placeholder-gray-500 mt-1" type="text" placeholder="Search your location" />
          </div>
          <div className="flex flex-col items-start">
            <label className="text-lg text-blue-900">Check-in</label>
            <input type="date" className="bg-transparent border-none text-black mt-1"/>
          </div>
          <div className="flex flex-col items-start">
            <label className="text-lg text-blue-900">Check-out</label>
            <input type="date" className="bg-transparent border-none text-black mt-1"/>
          </div>
          <button className="transition duration-300 ease-in-out uppercase p-3 cursor-pointer rounded-md bg-blue-600 text-white text-lg hover:bg-blue-800">
            Explore Now
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
