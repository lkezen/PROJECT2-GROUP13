import React from 'react';
import Header from './Header';

const Home = () => {
  return (
    <div>
      <Header image="/assets/home-header.jpg" altText="Welcome to Our Home Page" />
      <section>
        <h2>Welcome to Our Website</h2>
        <p>Explore our work and get to know more about our team!</p>
      </section>
    </div>
  );
};

export default Home;
