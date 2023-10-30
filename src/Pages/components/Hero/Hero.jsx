import React from 'react';
import "./HeroSection.css"
function HeroSection() {

  return (
    <section className="hero">
    <div className="hero-content">
      <h1 className="hero-heading">Welcome to My Website</h1>
      <p className="hero-subtitle">Discover amazing content and more.</p>
      <a href="#learn-more" className="cta-button">Learn More</a>
    </div>
    <div className="hero-image">
      <img
        src="https://i.ibb.co/SRfNR2p/13914232-5397404.jpg"
        alt="Banner Image"
        className="hero-image-img"
      />
    </div>
  </section>
  );
}

export default HeroSection;