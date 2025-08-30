import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">Why Choose Greenprint?</h2>
            <p className="about-description">
              We understand that every startup is unique. That's why we don't offer one-size-fits-all solutions. 
              Instead, we create customized roadmaps that align with your vision, goals, and resources.
            </p>
            
            <div className="about-features">
              <div className="feature">
                <div className="feature-icon">🎯</div>
                <div className="feature-content">
                  <h4>Tailored Approach</h4>
                  <p>Every solution is customized to your specific needs and industry requirements.</p>
                </div>
              </div>
              
              <div className="feature">
                <div className="feature-icon">⚡</div>
                <div className="feature-content">
                  <h4>Fast Execution</h4>
                  <p>We move quickly to get your startup up and running without unnecessary delays.</p>
                </div>
              </div>
              
              <div className="feature">
                <div className="feature-icon">🤝</div>
                <div className="feature-content">
                  <h4>Ongoing Support</h4>
                  <p>We're with you every step of the way, from concept to scaling and beyond.</p>
                </div>
              </div>
              
              <div className="feature">
                <div className="feature-icon">📈</div>
                <div className="feature-content">
                  <h4>Proven Results</h4>
                  <p>Our track record speaks for itself - we help startups achieve sustainable growth.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="about-visual">
            <div className="process-flow">
              <div className="process-step">
                <div className="step-circle">
                  <span>1</span>
                </div>
                <div className="step-content">
                  <h4>Discovery</h4>
                  <p>We learn about your vision, goals, and challenges</p>
                </div>
              </div>
              
              <div className="process-arrow">→</div>
              
              <div className="process-step">
                <div className="step-circle">
                  <span>2</span>
                </div>
                <div className="step-content">
                  <h4>Strategy</h4>
                  <p>We create a customized roadmap for your success</p>
                </div>
              </div>
              
              <div className="process-arrow">→</div>
              
              <div className="process-step">
                <div className="step-circle">
                  <span>3</span>
                </div>
                <div className="step-content">
                  <h4>Execution</h4>
                  <p>We implement solutions and track progress</p>
                </div>
              </div>
              
              <div className="process-arrow">→</div>
              
              <div className="process-step">
                <div className="step-circle">
                  <span>4</span>
                </div>
                <div className="step-content">
                  <h4>Growth</h4>
                  <p>We scale your success and ensure long-term sustainability</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
