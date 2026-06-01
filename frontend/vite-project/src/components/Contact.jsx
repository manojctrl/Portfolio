import { useState } from 'react';
import './Contact.css';
import { Mail, Phone, MapPin, Send, Wifi } from 'lucide-react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="contact-hud-section">
      <span className="section-eyebrow">// TRANSMISSION_CONSOLE</span>
      <h2 className="section-title">Open a Channel</h2>

      <div className="contact-hud-grid">
        {/* LEFT: Signal Info Panels */}
        <div className="contact-info-col">
          <div className="signal-status-bar glass-panel">
            <div className="signal-dot"></div>
            <div className="signal-text">
              <span className="signal-title">NODE STATUS: ONLINE</span>
              <span className="signal-sub">Average response latency &lt; 24h</span>
            </div>
            <Wifi size={20} className="signal-wifi-icon" />
          </div>

          <div className="contact-methods-list">
            <a href="mailto:katwalmanoj67@gmail.com" className="contact-hud-method glass-panel">
              <div className="method-icon-wrapper">
                <Mail size={18} />
              </div>
              <div className="method-details">
                <span className="method-label">MAIL_ENDPOINT</span>
                <span className="method-value">katwalmanoj67@gmail.com</span>
              </div>
            </a>

            <a href="tel:+977-9804064003" className="contact-hud-method glass-panel">
              <div className="method-icon-wrapper method-phone">
                <Phone size={18} />
              </div>
              <div className="method-details">
                <span className="method-label">VOICE_CHANNEL</span>
                <span className="method-value">+977-9804064003</span>
              </div>
            </a>

            <div className="contact-hud-method glass-panel" style={{ cursor: 'default' }}>
              <div className="method-icon-wrapper method-location">
                <MapPin size={18} />
              </div>
              <div className="method-details">
                <span className="method-label">GEO_LOCATION</span>
                <span className="method-value">Dharan, Nepal 🇳🇵</span>
              </div>
            </div>
          </div>

          {/* Terminal log block */}
          <div className="contact-terminal-log glass-panel">
            <div className="hud-window-header">
              <div className="header-dots">
                <span className="dot dot-close"></span>
                <span className="dot dot-minimize"></span>
                <span className="dot dot-expand"></span>
              </div>
              <span className="hud-window-title">connection_log.sh</span>
            </div>
            <div className="terminal-log-body">
              <p className="tlog"><span className="text-success">[OK]</span> GATEWAY OPEN — awaiting transmission</p>
              <p className="tlog"><span className="text-info">[INFO]</span> Accepting: freelance, collab, fulltime</p>
              <p className="tlog"><span className="text-warning">[NOTE]</span> Currently in Dharan, Nepal. UTC+5:45</p>
              <p className="tlog"><span className="text-success">[READY]</span> Signal active. Response guaranteed.</p>
            </div>
          </div>
        </div>

        {/* RIGHT: Transmission Form */}
        <div className="contact-form-col">
          <div className="transmission-form-panel glass-panel">
            <div className="hud-window-header">
              <div className="header-dots">
                <span className="dot dot-close"></span>
                <span className="dot dot-minimize"></span>
                <span className="dot dot-expand"></span>
              </div>
              <span className="hud-window-title">new_transmission.sh</span>
              <span className="hud-window-telemetry">ENCRYPTED</span>
            </div>

            <form className="transmission-form" onSubmit={handleSubmit}>
              <div className="form-hud-row">
                <div className="form-hud-group">
                  <label className="form-hud-label">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="form-hud-input"
                    required
                  />
                </div>
                <div className="form-hud-group">
                  <label className="form-hud-group">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="form-hud-input"
                    required
                  />
                </div>
              </div>

              <div className="form-hud-group">
                <label className="form-hud-label">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  className="form-hud-input"
                  required
                />
              </div>

              <div className="form-hud-group">
                <label className="form-hud-label">Message Payload</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  rows="6"
                  className="form-hud-input form-hud-textarea"
                  required
                />
              </div>

              <button
                type="submit"
                className="btn-primary transmission-send-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="sending-dots">SENDING MESSAGE</span>
                    <span className="hud-caret">|</span>
                  </>
                ) : (
                  <>
                    <Send size={14} />
                    <span>SEND MESSAGE</span>
                  </>
                )}
              </button>

              {submitted && (
                <div className="transmission-success">
                  <span className="text-success">✓ MESSAGE_RECEIVED — I'll respond within 24h!</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
