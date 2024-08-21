import React, { useState } from 'react';
import Destinationsingapore from "../assets/Destinationsingapore.jpg";
import destinationThailand from "../assets/destinationThailand.png";
import Paris from "../assets/Paris.jpg";
import NewZealand from "../assets/NewZealand.jpeg";
import Bora from "../assets/Bora.jpeg";
import London from "../assets/London.jpeg";

const Recommend = () => {
  const data = [
    {
      image: Destinationsingapore,
      title: "Singapore",
      subTitle: "Singapore is a tropical island city-state in Southeast Asia, located at the southern tip of the Malay Peninsula.",
      cost: "38,000",
      duration: "Approx 2 night trip",
    },
    {
      image: destinationThailand,
      title: "Thailand",
      subTitle: "Thailand is a multi-ethnic country in Southeast Asia with a population of 64.1 million. It's known for its unique culture, Buddhist temples, exotic wildlife, and local food.",
      cost: "54,200",
      duration: "Approx 2 night trip",
    },
    {
      image: Paris,
      title: "Paris",
      subTitle: "Paris is the capital of France and is known for its beauty, culture, and business. It's been a major center in Western Europe for both culture and business.",
      cost: "45,500",
      duration: "Approx 2 night trip",
    },
    {
      image: NewZealand,
      title: "New Zealand",
      subTitle: "New Zealand is an archipelago of two main islands, the North Island and the South Island, and over 700 smaller islands in the southwest Pacific Ocean.",
      cost: "24,100",
      duration: "Approx 1 night trip",
    },
    {
      image: Bora,
      title: "Bora Bora",
      subTitle: "Bora Bora is a mountainous island in French Polynesia that's known as the 'Pearl of the Pacific' and is considered one of the most beautiful places in the world.",
      cost: "95,400",
      duration: "Approx 2 night 2 day trip",
    },
    {
      image: London,
      title: "London",
      subTitle: "London is the capital of the United Kingdom and England, and is the country's largest city. It's located on the River Thames in southeastern England.",
      cost: "38,800",
      duration: "Approx 3 night 2 day trip",
    },
  ];

  const packages = [
    "The Weekend Break",
    "The Package Holiday",
    "The Group Tour",
    "Long Term Slow Travel",
  ];

  const [active, setActive] = useState(1);

  return (
    <section id="recommend" className="p-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold">Recommended Destinations</h2>
      </div>
      <div className="flex justify-center mb-4">
        <ul className="flex space-x-4">
          {packages.map((pkg, index) => (
            <li
              key={index}
              className={`cursor-pointer px-4 py-2 ${
                active === index + 1
                  ? "border-b-4 border-purple-600 text-purple-600"
                  : "text-gray-600"
              }`}
              onClick={() => setActive(index + 1)}
            >
              {pkg}
            </li>
          ))}
        </ul>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((destination, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl hover:bg-purple-50"
          >
            <img
              src={destination.image}
              alt={destination.title}
              className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">
                {destination.title}
              </h3>
              <p className="text-gray-600 mb-4">{destination.subTitle}</p>
              <div className="flex justify-between items-center">
                <h4 className="text-lg font-bold text-purple-600">
                  {destination.cost}
                </h4>
                <div className="text-gray-500">
                  <span>1000 Kms</span>
                  <span className="ml-2">{destination.duration}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Recommend;
