import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              We lay the <span className="highlight">Greenprint</span> for your success
            </h1>
            <p className="hero-subtitle">
              Transform your startup vision into reality with our comprehensive consulting services. 
              From business foundations to digital presence, we provide the roadmap for sustainable growth.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary">Get Started Today</a>
              <a href="#services" className="btn btn-secondary">Explore Services</a>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">50+</span>
                <span className="stat-label">Startups Helped</span>
              </div>
              <div className="stat">
                <span className="stat-number">95%</span>
                <span className="stat-label">Success Rate</span>
              </div>
              <div className="stat">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Support</span>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-logo-section">
              <img 
                src="/greenprintlogo.png" 
                alt="Greenprint Logo" 
                className="hero-logo"
              />
            </div>
            <div className="blueprint-card">
              <div className="blueprint-header">
                <div className="blueprint-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="blueprint-title">Growth Blueprint</div>
              </div>
              <div className="blueprint-content">
                <div className="blueprint-step">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h4>Foundation</h4>
                    <p>Business plan & model design</p>
                  </div>
                </div>
                <div className="blueprint-step">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h4>Digital Presence</h4>
                    <p>Website & AI-powered tools</p>
                  </div>
                </div>
                <div className="blueprint-step">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h4>Brand & Marketing</h4>
                    <p>Identity & strategy development</p>
                  </div>
                </div>
                <div className="blueprint-step">
                  <div className="step-number">4</div>
                  <div className="step-content">
                    <h4>Growth</h4>
                    <p>Scaling & long-term success</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
