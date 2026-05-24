import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <div className="about-text">
          <p className="section-eyebrow">About Me</p>
          <h2 className="section-title">About Me</h2>

          <p className="about-description">
            नमस्ते! I'm Manoj Katuwal, a passionate Full-Stack Developer from Nepal. 
            I specialize in building complete, high-performance web applications that bridge 
            creative design with outstanding functional logic.
          </p>

          <p className="about-description-sub">
            Constantly exploring emerging tech trends and sharing my knowledge, I build digital experiences 
            that solve real-world problems with clean, maintainable code.
          </p>

          <div className="about-highlights">
            <div className="highlight-item glass-panel">
              <span className="number">2+</span>
              <span className="label">Years Experience</span>
            </div>
            <div className="highlight-item glass-panel">
              <span className="number">15+</span>
              <span className="label">Projects Completed</span>
            </div>
            <div className="highlight-item glass-panel">
              <span className="number">50+</span>
              <span className="label">Happy Clients</span>
            </div>
          </div>

          <div className="about-actions">
            <a href="#projects" className="btn-primary">
              View Projects
            </a>
            <a href="#contact" className="btn-secondary">
              Get in Touch
            </a>
          </div>
        </div>

        <div className="about-image">
          <div className="image-container">
            <div className="image-box glass-panel">
              <div className="code-editor">
                <div className="editor-header">
                  <div className="dot red"></div>
                  <div className="dot yellow"></div>
                  <div className="dot green"></div>
                </div>
                <div className="editor-content">
                  <p>{'<Developer />'}</p>
                  <p className="comment">// Building dreams with code</p>
                  <p>{'<Passion>Creative</Passion>'}</p>
                  <p>{'<Innovation />'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
