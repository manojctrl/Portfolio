import React, { useEffect, useState } from 'react';
import './Hero.css';

function Hero() {
  const [text, setText] = useState('');
  const fullText = 'Full-Stack Developer | Creative Problem Solver';
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText(text + fullText[index]);
        setIndex(index + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [index, text]);

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-meta">
            <span className="status-pill">Available for freelance & collaborations</span>
            <span className="meta-badge">React • Node.js • MySQL</span>
          </div>
          <h1 className="hero-title">
            नमस्ते 👋, I'm <span className="highlight">Manoj Katuwal</span>
          </h1>
          <p className="hero-subtitle">{text}</p>
          <p className="hero-description">
            I create stunning web experiences that blend creativity with functionality. Let's build something amazing together.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn-primary">Explore Projects</a>
            <a href="#contact" className="btn-secondary">Start a Conversation</a>
          </div>

          <div className="social-links">
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="social-icon" title="GitHub">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="social-icon" title="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.435-.103.25-.129.599-.129.948v5.422h-3.554s.047-8.787 0-9.699h3.554v1.373c.43-.664 1.195-1.609 2.905-1.609 2.121 0 3.713 1.385 3.713 4.365v5.57zM5.337 9.432c-1.144 0-1.915-.762-1.915-1.715 0-.953.77-1.715 1.963-1.715 1.192 0 1.914.762 1.938 1.715 0 .953-.746 1.715-1.986 1.715zm-1.6 11.02h3.273V9.75H3.737v10.702zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="https://x.com/" target="_blank" rel="noreferrer" className="social-icon" title="Twitter">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.953 4.57a10 10 0 002.856-10.986c-1.475.595-3.084 1.017-4.753 1.2 1.71-1.025 3.025-2.645 3.643-4.573-.806.479-1.696.893-2.647 1.095-1.761-1.875-4.505-2.16-6.758-.588-2.252 1.572-2.956 4.669-1.666 7.138-5.853-.576-11.326-3.957-14.955-9.817a9.998 9.998 0 001.231 12.697c-1.432-.036-2.845-.331-4.135-.842.03 2.052 1.272 3.969 3.189 5.029-1.226.184-2.502.08-3.688-.492.648 2.048 2.328 3.595 4.366 3.834-2.177 1.707-5.006 2.51-7.858 2.247 2.189 1.404 4.768 2.159 7.428 2.159 8.988 0 13.89-7.797 13.89-14.561 0-.222-.005-.443-.016-.663 1.328-.998 2.541-2.372 3.476-3.88z"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="floating-card card-1">
            <div className="card-icon">💻</div>
            <span>Web Dev</span>
          </div>
          <div className="floating-card card-2">
            <div className="card-icon">🎨</div>
            <span>Design</span>
          </div>
          <div className="floating-card card-3">
            <div className="card-icon">🚀</div>
            <span>Innovation</span>
          </div>
          <div className="animated-background"></div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse"></div>
      </div>
    </section>
  );
}

export default Hero;
