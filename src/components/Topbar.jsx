// components/Topbar.jsx
import React, { useEffect, useState } from 'react';
import { FaUtensils, FaConciergeBell, FaListAlt, FaPhoneAlt, FaBars } from 'react-icons/fa';
import './Topbar.css';

const Topbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  useEffect(() => {
  const handleScroll = () => {
    const sections = ['menu', 'order', 'weekly', 'contact'];
    const scrollY = window.scrollY + 100;

    sections.forEach(id => {
      const section = document.getElementById(id);
      const link = document.querySelector(`a[href="#${id}"]`);

      if (section && link) {
        if (
          scrollY >= section.offsetTop &&
          scrollY < section.offsetTop + section.offsetHeight
        ) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      }
    });
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`topbar ${isScrolled ? 'scrolled' : ''}`}>
      <a href="#hero" className="topbar__logo">
        <FaUtensils className="topbar__icon" />
        <span className="topbar__brand">Shruthi <span>Curry Point</span></span>
      </a>

      <div
  className={`topbar__hamburger ${isMenuOpen ? 'open' : ''}`}
  onClick={toggleMenu}
>
  <div></div>
</div>


      <nav className={`topbar__nav ${isMenuOpen ? 'active' : ''}`}>
        <a href="#menu" onClick={() => setIsMenuOpen(false)}><FaConciergeBell /> Menu</a>
        <a href="#order" onClick={() => setIsMenuOpen(false)}><FaListAlt /> Order</a>
        <a href="#weekly" onClick={() => setIsMenuOpen(false)}><FaUtensils /> Weekly</a>
        <a href="#contact" onClick={() => setIsMenuOpen(false)}><FaPhoneAlt /> Contact</a>
      </nav>
    </header>
  );
};

export default Topbar;
