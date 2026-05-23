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
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // You can connect this to your backend if needed
      console.log('Form submitted:', formData);
      setSubmitMessage('Thanks for reaching out! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => setSubmitMessage(''), 3000);
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
          <h2 className="section-title">Get In Touch</h2>
        </div>
        <p className="section-copy">
          Open to freelance projects, collaborations, and product ideas that need thoughtful design and clean execution.
        </p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <h3>Let's Connect!</h3>
          <p className="contact-intro">I'm always open to new opportunities and collaborations. Feel free to reach out anytime.</p>
          <div className="contact-availability">
            <span>⏱️ Usually replies within 24 hours</span>
          </div>

          <div className="contact-methods">
            <a href="mailto:manoj@example.com" className="contact-method">
              <span className="icon">✉️</span>
              <div>
                <h4>Email</h4>
                <p>manoj@example.com</p>
              </div>
            </a>

            <a href="tel:+977-9800000000" className="contact-method">
              <span className="icon">📱</span>
              <div>
                <h4>Phone</h4>
                <p>+977-9800000000</p>
              </div>
            </a>

            <a href="#" className="contact-method">
              <span className="icon">📍</span>
              <div>
                <h4>Location</h4>
                <p>Kathmandu, Nepal</p>
              </div>
            </a>
          </div>
        </div>

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
    </section>
  );
}

export default Contact;
