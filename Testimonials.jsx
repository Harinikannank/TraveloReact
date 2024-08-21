import React from 'react';
import avatar1 from "../assets/avatar1.png";
import avatar2 from "../assets/avatar2.jpg";
import avatar3 from "../assets/avatar3.png";

const  Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 bg-gray-100">
    <div className="container mx-auto px-6">
      <div className="title text-center mb-12">
        <h2 className="text-3xl font-semibold">Happy Customers</h2>
      </div>
      <div className="testimonials grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="testimonial bg-white p-6 rounded-lg shadow-lg">
          <p className="text-gray-600 mb-4">
            It is a great pleasure to let you know that the above tour you organized was a huge success for our group in every possible way we could imagine. So on behalf of everyone in that tour group, let me thank you...
          </p>
          <div className="info flex items-center">
            <img src={avatar1} alt="Varun" className="w-12 h-12 rounded-full" />
            <div className="details ml-4">
              <h4 className="font-semibold">Varun</h4>
              <span className="text-sm text-gray-500">Software Engineer</span>
            </div>
          </div>
        </div>
        <div className="testimonial bg-white p-6 rounded-lg shadow-lg">
          <p className="text-gray-600 mb-4">
            I must say I was delighted with the service you provided - it was just what I wanted. This is the second time I have used your services, and both times you provided a faultless experience. I will definitely...
          </p>
          <div className="info flex items-center">
            <img src={avatar2} alt="Muhammed Irfan" className="w-12 h-12 rounded-full" />
            <div className="details ml-4">
              <h4 className="font-semibold">Muhammed Irfan</h4>
              <span className="text-sm text-gray-500">Technical Lead, ABC Solutions</span>
            </div>
          </div>
        </div>
        <div className="testimonial bg-white p-6 rounded-lg shadow-lg">
          <p className="text-gray-600 mb-4">
            We are finally back home from our trip and I would like to thank you for organizing our trip for us throughout. We had a wonderful time at every destination and the hotels that you chose were very nice indeed...
          </p>
          <div className="info flex items-center">
            <img src={avatar3} alt="Jennifer" className="w-12 h-12 rounded-full" />
            <div className="details ml-4">
              <h4 className="font-semibold">Jennifer</h4>
              <span className="text-sm text-gray-500">Entrepreneur</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
}

export default Testimonials;