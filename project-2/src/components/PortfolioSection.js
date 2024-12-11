import React from 'react';

function PortfolioSection() {
  return (
    <section className="portfolio-section">
      <div className="team-content">
        <h2>Some of Our Past Projects</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        
        <img src="../assets/portfolio-image-1.jpg" className="portfolio-image" alt="Portfolio 1" />
        <img src="../assets/portfolio-image-2.png" className="portfolio-image" alt="Portfolio 2" />
        <img src="../assets/portfolio-image-3.png" className="portfolio-image" alt="Portfolio 3" />
      </div>
    </section>
  );
}

export default PortfolioSection;
