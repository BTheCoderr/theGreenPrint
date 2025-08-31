import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      category: "Business Foundations",
      icon: "🏗️",
      items: [
        {
          name: "Business Plan Development",
          description: "Clear, customized plans that outline your goals, strategy, and financial roadmap."
        },
        {
          name: "Business Model Design",
          description: "Identify revenue streams, cost structure, and the right model for growth."
        },
        {
          name: "Company Incorporation & Registration Support",
          description: "Guidance through legal paperwork and registration."
        },
        {
          name: "Financial Forecasting & Projections",
          description: "Data-driven forecasts to help you plan for sustainability."
        },
        {
          name: "Personal Finance for Entrepreneurs",
          description: "Practical tools to manage money while building your business."
        }
      ]
    },
    {
      category: "Technology & Digital Presence",
      icon: "💻",
      items: [
        {
          name: "Custom Website Design & Development",
          description: "Professional websites that fit your brand and convert visitors."
        },
        {
          name: "AI-Powered Business Tools",
          description: "Automatons and intelligent systems to save time and increase efficiency."
        },
        {
          name: "Brand-Centered Landing Pages",
          description: "High-impact pages to drive leads, sales, or sign-ups."
        },
        {
          name: "Website Maintenance & Security",
          description: "Keep your site safe, fast, and up to date."
        },
        {
          name: "Tech Consulting",
          description: "Personalized guidance on tools, integrations, and digital strategies."
        }
      ]
    },
    {
      category: "Branding & Marketing",
      icon: "🎨",
      items: [
        {
          name: "Brand Identity Creation",
          description: "Logos, colors, and design systems that make your business stand out."
        },
        {
          name: "Marketing Strategy Development",
          description: "Roadmaps tailored to reach your target audience."
        },
        {
          name: "Content Creation Strategy",
          description: "Plans for social media, blogs, and campaigns that drive engagement."
        },
        {
          name: "Pitch Decks & Investor Presentations",
          description: "Professional decks that tell your story and secure funding."
        },
        {
          name: "Community Engagement Campaigns",
          description: "Build local presence and connect authentically with customers."
        }
      ]
    },
    {
      category: "Growth & Long-Term Success",
      icon: "🚀",
      items: [
        {
          name: "Scaling Strategies",
          description: "Systems and tactics to grow without losing focus or quality."
        },
        {
          name: "Sponsorship & Partnership Strategy",
          description: "Find and secure win-win collaborations."
        },
        {
          name: "Grant & Accelerator Application Support",
          description: "Guidance and writing support to access funding and programs."
        },
        {
          name: "Financial Health Checkups",
          description: "Regular reviews to keep your business strong and resilient."
        }
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
                    <div className="service-item-content">
                      <div className="service-item-header">
                        <span className="service-bullet">•</span>
                        <span className="service-item-name">{item.name}</span>
                      </div>
                      <p className="service-item-description">{item.description}</p>
                    </div>
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
