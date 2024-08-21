import React, { useState, useEffect } from 'react';
import travelreact from "../assets/travelreact.jpeg"; 

const ScrollToTop = () => {
  const [scrollState, setScrollState] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollState(window.pageYOffset > 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      {scrollState && (
        <button
          onClick={toTop}
          className="fixed bottom-10 right-10 p-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
        >
          <img src={travelreact} alt="Scroll to Top" className="h-8 w-8" />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
