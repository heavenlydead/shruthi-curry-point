// components/Topbar.jsx
import React, { useEffect, useState } from 'react';
import { FaUtensils, FaConciergeBell, FaListAlt, FaPhoneAlt } from 'react-icons/fa';
import './Topbar.css';

const Topbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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

  const smoothScroll = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`topbar ${isScrolled ? 'scrolled' : ''}`}>
      <a href="#hero" className="topbar__logo" onClick={(e) => smoothScroll(e, 'hero')}>
  <FaUtensils className="topbar__icon" />
  <span className="topbar__brand">
    <span className="logo-main">Shruthi </span>
    <span className="logo-sub">Curry Point</span>
  </span>
</a>

      <nav className="topbar__nav">
        <a href="#menu" onClick={(e) => smoothScroll(e, 'menu')}><FaConciergeBell /> Menu</a>
        <a href="#order" onClick={(e) => smoothScroll(e, 'order')}><FaListAlt /> Order</a>
        <a href="#weekly" onClick={(e) => smoothScroll(e, 'weekly')}><FaUtensils /> Weekly</a>
        <a href="#contact" onClick={(e) => smoothScroll(e, 'contact')}><FaPhoneAlt /> Contact</a>
      </nav>
    </header>
  );
};

export default Topbar;