import React from 'react';
import './HeroSection.css';

const HeroSection = () => (
  <section id= "hero" className="hero">
    <video
      className="hero__video"
      autoPlay
      loop
      muted
      playsInline
    >
      <source src="/videos/hero-curry.mp4" type="video/mp4" />
      Your browser doesn’t support videos.
    </video>

    <div className="hero__content">
      <h1>Shruthi Curry Point</h1>
      <p>Hot, Homemade Meals Delivered to Your Hostel</p>
      <span className="hero__tagline">Everyday | 5 PM – 10 PM</span>
      <div className="hero__scroll">Scroll ↓</div>
    </div>
  </section>
);

export default HeroSection;
