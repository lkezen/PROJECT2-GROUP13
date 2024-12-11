import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import TeamSection from './components/TeamSection';
import PortfolioSection from './components/PortfolioSection';
import FactSection from './components/FactSection';
import VideoSection from './components/VideoSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutSection />
      <FactSection />
      <VideoSection />
      <Footer />
    </div>
  );
}

export default App;
