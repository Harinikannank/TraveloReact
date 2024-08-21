import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';  // Ensure this matches the file name exactly
import Recommend from './components/Recommend';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Scrolltotop from './components/Scrolltotop';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services /> 
      <Recommend/> 
      <Testimonials/>
      <Footer/>
      <Scrolltotop/>
    </div>
  );
};

export default App;






