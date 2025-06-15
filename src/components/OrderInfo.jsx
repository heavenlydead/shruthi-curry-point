// components/OrderInfo.jsx
import React from 'react';
import './OrderInfo.css';

const OrderInfo = () => {
  return (
    <section id="order" className="order-section">
      {/* Top Decorative SVG */}
      <div className="order-curve-top">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path className="order-curve-path" d="M0,0 C480,100 960,0 1440,100 L1440,0 L0,0 Z" />
        </svg>
      </div>

      <h2 className="order-heading">⏰ Serving Hours & Ordering</h2>

      {/* Emotional Quote */}
      <blockquote className="order-quote">
        "Skip the mess, grab your parcel of goodness!"
      </blockquote>

      <div className="order-details">
        <div className="timing-block">
          <span className="timing-label">🍽️ Lunch:</span>
          <span className="timing-time">12:30 PM – 2:00 PM</span>
        </div>
        <div className="timing-block">
          <span className="timing-label">🌙 Dinner:</span>
          <span className="timing-time">5:30 PM – 10:00 PM</span>
        </div>
        <p className="timing-note">📦 Only Parcel Available – No Delivery or Dine-in</p>
      </div>

      <div className="why-choose">
        ✅ Hygienic & Home-style cooking<br />
        ⏱️ Timely serving – no wait hassles<br />
        💸 Affordable & filling meals
      </div>

      <div className="order-actions">
         

        <a
          href="https://whatsapp.com/channel/join-link-here"
          target="_blank"
          rel="noopener noreferrer"
          className="order-button join-channel"
        >
          📢 Join WhatsApp Channel
        </a>
      </div>

      <p className="payment-note">
        💰 Payment Options: <strong>Cash</strong> | <strong>UPI</strong>
      </p>

      {/* Bottom Decorative SVG */}
      <div className="order-curve-bottom">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path className="order-curve-path" d="M0,100 C480,0 960,100 1440,0 L1440,100 L0,100 Z" />
        </svg>
      </div>
    </section>
  );
};

export default OrderInfo;
