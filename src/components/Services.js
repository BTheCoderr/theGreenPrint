import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      category: "Business Foundations",
      icon: "🏗️",
      items: [
        "Business Plan Development",
        "Business Model Design", 
        "Company Incorporation & Registration Support",
        "Financial Forecasting & Projections",
        "Personal Finance for Entrepreneurs"
      ]
    },
    {
      category: "Technology & Digital Presence",
      icon: "💻",
      items: [
        "Custom Website Design & Development",
        "AI-Powered Business Tools",
        "Brand-Centered Landing Pages", 
        "Website Maintenance & Security",
        "Tech Consulting"
      ]
    },
    {
      category: "Branding & Marketing",
      icon: "🎨",
      items: [
        "Brand Identity Creation",
        "Marketing Strategy Development",
        "Content Creation Strategy",
        "Pitch Decks & Investor Presentations",
        "Community Engagement Campaigns"
      ]
    },
    {
      category: "Growth & Long-Term Success",
      icon: "🚀",
      items: [
        "Scaling Strategies",
        "Sponsorship & Partnership Strategy", 
        "Grant & Accelerator Application Support",
        "Financial Health Checkups"
      ]
    }
  ];

  return (
    <section id="services" className="services section">
      <div className="container">
        <div className="services-header text-center mb-8">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive solutions to transform your startup from concept to success
          </p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-header">
                <div className="service-icon">{service.icon}</div>
                <div className="service-title-section">
                  <h3 className="service-title">{service.category}</h3>
                  {service.subtitle && (
                    <span className="service-subtitle">{service.subtitle}</span>
                  )}
                </div>
              </div>
              
              <ul className="service-list">
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="service-item">
                    <span className="service-bullet">•</span>
                    {item}
                  </li>
                ))}
              </ul>
              
              <div className="service-footer">
                <a href="#contact" className="service-cta">
                  Learn More →
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="services-cta text-center">
          <h3>Ready to get started?</h3>
          <p>Let's discuss how we can help your startup succeed</p>
          <a href="#contact" className="btn btn-primary">Schedule Consultation</a>
        </div>
      </div>
    </section>
  );
};

export default Services;
