import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <div className="about-text">
          <p className="section-eyebrow">About Me</p>
          <h2 className="section-title">About Me</h2>

          <p>
            नमस्ते! I'm Manoj Katuwal, a passionate full-stack developer from Nepal with a love for creating
            beautiful and functional web applications. I combine creativity with technical excellence to build
            solutions that make a difference.
          </p>

          <p>
            My journey in web development started with a curiosity about how things work online. Over time,
            I've developed a deep expertise in both frontend and backend technologies, allowing me to build
            complete solutions from scratch.
          </p>

          <p>
            When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects,
            or helping others learn programming. I believe in continuous learning and sharing knowledge with the community.
          </p>

          <div className="about-actions">
            <a href="#projects" className="btn-primary">
              View Projects
            </a>
            <a href="#contact" className="btn-secondary">
              Get in Touch
            </a>
          </div>

          <div className="about-highlights">
            <div className="highlight-item">
              <span className="number">2+</span>
              <span className="label">Years Experience</span>
            </div>
            <div className="highlight-item">
              <span className="number">15+</span>
              <span className="label">Projects Completed</span>
            </div>
            <div className="highlight-item">
              <span className="number">50+</span>
              <span className="label">Happy Clients</span>
            </div>
          </div>
        </div>

        <div className="about-image">
          <div className="image-container">
            <div className="image-box">
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
