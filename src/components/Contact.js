import React, { useState } from 'react';
import './Contact.css';
import { sendContactEmail } from '../utils/resend';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await sendContactEmail(formData);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="contact-header text-center mb-8">
          <h2 className="section-title">Ready to Get Started?</h2>
          <p className="section-subtitle">
            Let's discuss how we can help transform your startup vision into reality
          </p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <p>
              Ready to lay the foundation for your startup's success? We're here to help you 
              navigate every step of your entrepreneurial journey.
            </p>
            
            <div className="contact-methods">
              <div className="contact-method">
                <div className="method-icon">📧</div>
                <div className="method-content">
                  <h4>Email Us</h4>
                  <p>hello@greenprintconsulting.com</p>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="method-icon">📞</div>
                                  <div className="method-content">
                    <h4>Call Us</h4>
                    <p>+1 (401) 217-9799</p>
                  </div>
              </div>
              
              <div className="contact-method">
                <div className="method-icon">💬</div>
                <div className="method-content">
                  <h4>Schedule a Call</h4>
                  <p>Book a free consultation</p>
                </div>
              </div>
            </div>
            
            <div className="contact-cta">
              <h4>Why Choose Us?</h4>
              <ul>
                <li>✓ Free initial consultation</li>
                <li>✓ Customized solutions for your needs</li>
                <li>✓ Proven track record with startups</li>
                <li>✓ Ongoing support and guidance</li>
              </ul>
            </div>
          </div>
          
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="company">Company/Startup Name</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="service">Service Interest</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option value="">Select a service</option>
                  <option value="business-foundations">Business Foundations</option>
                  <option value="technology">Technology & Digital Presence</option>
                  <option value="branding">Branding & Marketing</option>
                  <option value="growth">Growth & Long-Term Success</option>
                  <option value="consultation">General Consultation</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Tell us about your project *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your startup, goals, and how we can help..."
                  required
                ></textarea>
              </div>
              
              {submitStatus === 'success' && (
                <div className="form-success">
                  ✅ Thank you for your message! We'll be in touch soon.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="form-error">
                  ❌ There was an error sending your message. Please try again or call us directly.
                </div>
              )}
              
              <button 
                type="submit" 
                className="btn btn-primary form-submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
