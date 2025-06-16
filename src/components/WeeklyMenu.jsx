// components/WeeklyMenu.jsx
import React from 'react';
import './WeeklyMenu.css';

const weeklyData = [
  { day: 'Monday', special: 'Rajma Curry', type: 'veg', icon: '🍛' },
  { day: 'Tuesday', special: 'Aloo Gobi', type: 'veg', icon: '🥔' },
  { day: 'Wednesday', special: 'Chicken & Paneer', type: 'mixed', icon: '🍗🧀' },
  { day: 'Thursday', special: 'Baingan Fry', type: 'veg', icon: '🍆' },
  { day: 'Friday', special: 'Boiled Egg', type: 'egg', icon: '🥚' },
  { day: 'Saturday', special: 'Egg Curry', type: 'egg', icon: '🍳' },
  { day: 'Sunday', special: 'Chicken & Paneer', type: 'mixed', icon: '🍗🧀' },
];

const WeeklyMenu = () => {
  return (
    <section id= "weekly" className="weekly-section">
      <h2 className="weekly-heading">📅 Weekly Curry Preview</h2>

      <div className="weekly-grid">
        {weeklyData.map((item, index) => (
          <div key={index} className={`day-card ${item.type}`}>
            <p className="day-name">{item.day}</p>
            <p className="dish-icon">{item.icon}</p>
            <p className="special-name">{item.special}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WeeklyMenu;
