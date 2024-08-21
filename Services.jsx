import React from 'react';
import bestprice from "../assets/bestprice.jpeg";
import covid from "../assets/covid.png";
import payment from "../assets/payment.png";
import findthebest from "../assets/findthebest.jpg"; // Assuming you have this image as well

const Services = () => {
  const data = [
    {
      icon: bestprice,
      title: "Get Best Prices",
      subTitle: "Pay through our application and save thousands and get amazing rewards.",
      hoverEffect: "hover:scale-105 hover:shadow-lg hover:bg-blue-100", // Scale and shadow effect
    },
    {
      icon: covid,
      title: "Covid Safe",
      subTitle: "We have all the curated hotels that have all the precautions for a Covid-safe environment.",
      hoverEffect: "hover:-translate-y-2 hover:bg-red-100", // Lift up and background color change
    },
    {
      icon: payment,
      title: "Flexible Payment",
      subTitle: "Enjoy the flexible payment through our app and get rewards on every payment.",
      hoverEffect: "hover:rotate-2 hover:bg-green-100", // Rotate effect and background color change
    },
    {
      icon: findthebest,
      title: "Find The Best Near You",
      subTitle: "Find the best hotels and places to visit near you in a single click.",
      hoverEffect: "hover:scale-105 hover:text-blue-500 hover:bg-yellow-100", // Scale, text color, and background color change
    },
  ];

  return (
    <section className="flex justify-between space-x-4 mt-8 px-4">
      {data.map((service, index) => (
        <div
          key={index}
          className={`flex flex-col items-start p-6 bg-blue-50 rounded-lg shadow-md max-w-sm transform transition duration-300 ${service.hoverEffect}`}
        >
          <img src={service.icon} alt={service.title} className="mb-4 w-12 h-12" />
          <h3 className="text-xl font-semibold text-black mb-2">{service.title}</h3>
          <p className="text-gray-600">{service.subTitle}</p>
        </div>
      ))}
    </section>
  );
};

export default Services;


