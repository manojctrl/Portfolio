import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log('Form submitted:', formData);
      setSubmitMessage('Thanks for reaching out! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => setSubmitMessage(''), 4000);
    } catch (error) {
      setSubmitMessage('Error sending message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-heading">
        <div>
          <p className="section-eyebrow">Get In Touch</p>
          <h2 className="section-title">Let's Create Together</h2>
        </div>
        <p className="section-copy">
          Open to freelance projects, collaborations, and product ideas that need thoughtful design and clean execution.
        </p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <h3>Let's Connect!</h3>
          <p className="contact-intro">
            Have an exciting idea or project you want to discuss? Feel free to reach out anytime. I am always open to new opportunities.
          </p>
          
          <div className="contact-availability">
            <span className="pulse-indicator"></span>
            <span>Replies in less than 24 hours</span>
          </div>

          <div className="contact-methods">
            <a href="mailto:katwalmanoj67@gmail.com" className="contact-method glass-panel">
              <span className="icon-wrapper">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </span>
              <div>
                <h4>Email</h4>
                <p>katwalmanoj67@gmail.com</p>
              </div>
            </a>

            <a href="tel:+977-9804064003" className="contact-method glass-panel">
              <span className="icon-wrapper">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </span>
              <div>
                <h4>Phone</h4>
                <p>+977-9804064003</p>
              </div>
            </a>

            <a href="#" className="contact-method glass-panel">
              <span className="icon-wrapper">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </span>
              <div>
                <h4>Location</h4>
                <p>Dharan, Nepal</p>
              </div>
            </a>
          </div>
        </div>

        <div className="contact-form-container glass-panel">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn-primary" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {submitMessage && (
              <div className="submit-message">
                {submitMessage}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
