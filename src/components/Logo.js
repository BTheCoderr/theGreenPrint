import React from 'react';
import './Logo.css';

const Logo = ({ size = 'medium', variant = 'dark' }) => {
  const sizeClasses = {
    small: 'logo-small',
    medium: 'logo-medium', 
    large: 'logo-large'
  };

  return (
    <div className={`logo ${sizeClasses[size]} ${variant}`}>
      <div className="logo-icon">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Blueprint square with folded corner */}
          <rect x="5" y="5" width="90" height="90" stroke="currentColor" strokeWidth="3" fill="none" rx="2"/>
          <path d="M5 5 L25 5 L5 25 Z" fill="currentColor"/>
          <rect x="75" y="75" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" rx="1"/>
          
          {/* Plant with growth arrow */}
          <path d="M20 80 Q30 70 40 60 L50 50" stroke="currentColor" strokeWidth="3" fill="none"/>
          <path d="M50 50 L50 20" stroke="currentColor" strokeWidth="3"/>
          <path d="M50 20 L40 30" stroke="currentColor" strokeWidth="3"/>
          <path d="M50 20 L60 30" stroke="currentColor" strokeWidth="3"/>
          <path d="M50 20 L50 10" stroke="currentColor" strokeWidth="3"/>
          
          {/* Small leaves */}
          <circle cx="40" cy="30" r="3" fill="currentColor"/>
          <circle cx="60" cy="30" r="3" fill="currentColor"/>
          <circle cx="50" cy="15" r="3" fill="currentColor"/>
        </svg>
      </div>
      <span className="logo-text">GREENPRINT</span>
    </div>
  );
};

export default Logo;
