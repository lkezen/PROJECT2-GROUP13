import React from 'react';

function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-left">
        <h2>About Us<div className="title-line"></div></h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam imperdiet, purus sed pellentesque egestas, odio ligula efficitur magna.</p>
        <p>Sed nibh ex, luctus at risus a, semper dignissim lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <blockquote>“We prioritize design with the concept of needs and comfort”</blockquote>
        <div className="ceo-line"></div>
        <p className="ceo">CEO of Dekorior</p>
      </div>
      <div className="about-right">
        <div className="about-feature">
          <img src="../assets/icon1.svg" alt="Icon 1" />
          <h4>Personalized Services</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget tristique ligula, sit amet euismod ligula.</p>
        </div>
        <div className="about-feature">
          <img src="../assets/icon2.svg" alt="Icon 2" />
          <h4>Ongoing Assistance</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget tristique ligula, sit amet euismod ligula.</p>
        </div>
        <div className="about-feature">
          <img src="../assets/icon3.svg" alt="Icon 3" />
          <h4>Keeping Up</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget tristique ligula, sit amet euismod ligula.</p>
        </div>
        <div className="about-feature">
          <img src="../assets/icon4.svg" alt="Icon 4" />
          <h4>Promotion & Sale</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget tristique ligula, sit amet euismod ligula.</p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
