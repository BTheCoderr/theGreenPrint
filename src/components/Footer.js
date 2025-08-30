import React from 'react';
import './Footer.css';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <Logo size="medium" variant="light" />
            <p className="footer-tagline">
              We lay the Greenprint for your success
            </p>
          </div>
          
          <div className="footer-links">
            <div className="footer-column">
              <h4>Services</h4>
              <ul>
                <li><a href="#services">Business Foundations</a></li>
                <li><a href="#services">Technology & Digital</a></li>
                <li><a href="#services">Branding & Marketing</a></li>
                <li><a href="#services">Growth & Success</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>Company</h4>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#contact">Consultation</a></li>
                <li><a href="#contact">Support</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>Connect</h4>
              <ul>
                <li><a href="mailto:hello@greenprintconsulting.com">Email</a></li>
                <li><a href="tel:+14012179799">Phone</a></li>
                <li><a href="#contact">Schedule Call</a></li>
                <li><a href="#contact">Get Started</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2024 Greenprint Start Up Consulting. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
