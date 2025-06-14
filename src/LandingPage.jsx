// LandingPage.jsx
import React from 'react';
import HeroSection from './components/HeroSection';
import Topbar from './components/Topbar';
import OrderInfo from './components/OrderInfo';
import WeeklyMenu from './components/WeeklyMenu';
import ContactSection from './components/ContactSection';
import TodaysMenu from './components/TodaysMenu';
import Footer from './components/Footer';
import SuggestionForm from './components/SuggestionForm';


const LandingPage = () => {
  return (
    <div>
      <Topbar />
      <HeroSection />
      <TodaysMenu />
      <SuggestionForm />

      <OrderInfo />
      <WeeklyMenu />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
