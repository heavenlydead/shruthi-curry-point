import React from 'react';
import './TodaysMenu.css';

const TodaysMenu = () => {
  return (
    <section id="menu" className="menu-section">

      {/* Background Video */}
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

      {/* Top SVG curve */}
      <div className="menu-curve menu-curve-top">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path className="curve-path" d="M0,0 C480,100 960,0 1440,100 L1440,0 L0,0 Z" />
        </svg>
      </div>

      {/* Menu Content */}
      <h2 className="menu-heading">
        <span role="img" aria-label="plate">🍽️</span> Today's Menu
      </h2>

      <div className="menu-card glassmorph">
        <div className="corner-ribbon veg">🥗 Veg</div>
        <ul className="menu-list">
          <li>2 Chapatis</li>
          <li>Steamed Rice</li>
          <li>Dal Tadka</li>
          <li>Fresh Salad</li>
        </ul>
        <p className="menu-price">
          💰 ₹60 only
        </p>
      </div>

      <div className="menu-card glassmorph">
        <div className="corner-ribbon special">🍛 Special</div>
        <p className="menu-special-name">Egg Curry (Boiled Egg in Spicy Gravy)</p>
        <p className="menu-price">
          ✅ Included in meal
        </p>
      </div>

      <div className="menu-card glassmorph">
        <div className="corner-ribbon addons">➕ Add-ons</div>
        <ul className="menu-list">
          <li>Extra Chapati – ₹5</li>
          <li>Boiled Egg – ₹10</li>
          <li>Chicken Curry (1 portion) – ₹30</li>
        </ul>
      </div>

      <p className="menu-note">📌 Note: Menu updates daily by 10:30 AM. Bookmark this page!</p>

      {/* Bottom SVG curve */}
      <div className="menu-curve menu-curve-bottom">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path className="curve-path" d="M0,100 C480,0 960,100 1440,0 L1440,100 L0,100 Z" />
        </svg>
      </div>

    </section>
  );
};

export default TodaysMenu;
