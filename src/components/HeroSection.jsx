import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <video
        className="hero__video"
        autoPlay
        loop
        muted
        playsInline
        poster="/images/hero-fallback.png"
      >
        <source src="/videos/hero-curry.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="hero__overlay" />

      <div className="hero__content">
        <h1 className="hero__title">Shruthi <span>Curry Point</span></h1>

        <p className="hero__quote">
          "Where homemade flavors meet hostel hunger!"
        </p>

        <div className="hero__timings">
          <p>🕒 12:30 PM – 2:00 PM</p>
          <p>🌙 6:00 PM – 10:00 PM</p>
        </div>

        <a href="#menu" className="hero__scroll-btn">
          ↓
          <span className="click-text">Scroll down</span>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
