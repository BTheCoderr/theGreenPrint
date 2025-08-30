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
        <img 
          src="/greenprint-icon.svg" 
          alt="Greenprint Logo" 
          className="logo-image"
        />
      </div>
      <span className="logo-text">GREENPRINT</span>
    </div>
  );
};

export default Logo;
