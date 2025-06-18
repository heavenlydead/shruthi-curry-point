// components/ContactSection.jsx
import React from 'react';
import './ContactSection.css';
import { FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-heading">
        <FaMapMarkerAlt className="contact-icon" />
        Visit Us
      </h2>

      <blockquote className="contact-quote fade-in">
        "Good food, good mood—come taste the comfort of home-cooked curries!"
      </blockquote>

      <div className="contact-container fade-in-up">
        <div className="contact-details">
          <p>
  <FaMapMarkerAlt /> <strong>Address:</strong><br />
  Backside of Spicy Hub, Road No. 4,<br />
  Near Margadarshi Colony Park,<br />
  Beside Kothapet Vegetable Market,<br />
  Kothapet, Hyderabad – 500035
</p>


          <p>
            <FaClock /> <strong>Timings:</strong><br />
            12:30 PM – 2:00 PM (Lunch)<br />
            6:00 PM – 10:00 PM (Dinner)
          </p>
        </div>

        <div className="map-container">
          <iframe
            title="Shruthi Curry Point Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d951.9896961258302!2d78.54381065943053!3d17.36571615866291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb990011515e6f%3A0x83510ee2089c835b!2sShruthi%20Curry%20point!5e0!3m2!1sen!2sin!4v1749872928552!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
