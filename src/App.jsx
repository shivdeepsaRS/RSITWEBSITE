import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import CoreValues from './components/CoreValues';
import Achievements from './components/Achievements';
import Internship from './components/Internship';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Toaster } from 'react-hot-toast';

function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });

    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="App">
      <Toaster position="top-center" reverseOrder={false} />
      <Navbar />
      <main>
        <Hero />
        <About />
        <CoreValues />
        <Achievements />
        <Internship />
        <Contact />
      </main>
      <Footer />
      
      <button 
        id="backToTop" 
        className={`btn btn-success btn-lg back-to-top ${showBackToTop ? 'show' : ''}`}
        onClick={scrollToTop}
      >
        <i className="fas fa-chevron-up"></i>
      </button>
    </div>
  );
}

export default App;
