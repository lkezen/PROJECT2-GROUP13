import React from 'react';

function HeroSection() {
  return (
    <section className="hero-section home-hero">
      <div className="hero-content">
        <img src="../assets/home-header.jpg" alt="Hero Image" className="hero-image" />
        <div className="hero-text">
          <h1>We Design Your <span className="highlight">Homey Space</span> for Happy Living</h1>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
