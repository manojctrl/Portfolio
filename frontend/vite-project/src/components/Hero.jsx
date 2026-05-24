import React, { useEffect, useState } from 'react';
import './Hero.css';

function Hero() {
  const [text, setText] = useState('');
  const [typingIndex, setTypingIndex] = useState(0);
  const fullText = 'Full‑Stack Developer | Creative Problem Solver';

  useEffect(() => {
    if (typingIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[typingIndex]);
        setTypingIndex((prev) => prev + 1);
      }, 60);
      return () => clearTimeout(timeout);
    }
  }, [typingIndex]);

  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-text-block">
          <div className="hero-badge glass-panel">
            <span className="availability-dot"></span>
            <span>Available for collaborations</span>
          </div>
          
          <h1 className="hero-title">
            नमस्ते 👋, I'm <br />
            <span className="highlight-text">Manoj Katuwal</span>
          </h1>

          <p className="hero-subtitle">{text}<span className="caret">|</span></p>

          <p className="hero-description">
            I craft visually stunning, highly interactive, and functionally outstanding full‑stack web experiences. 
            Blending elegant design with powerful clean backend logic.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn-primary">
              Explore Projects
            </a>
            <a href="#contact" className="btn-secondary">
              Let's Talk
            </a>
            <a
              href="/cv/manoj-katuwal-cv.pdf"
              download
              className="btn-secondary cv-button"
            >
              Download CV
            </a>
          </div>

          <div className="hero-socials">
            <a href="https://github.com/" target="_blank" rel="noreferrer" title="GitHub">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.234c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22v3.293c0 .319.22.694.825.576C20.565 21.795 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" title="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.435-.103.25-.129.599-.129.948v5.422h-3.554s.047-8.787 0-9.699h3.554v1.373c.43-.664 1.195-1.609 2.905-1.609 2.121 0 3.713 1.385 3.713 4.365v5.57zM5.337 9.432c-1.144 0-1.915-.762-1.915-1.715 0-.953.77-1.715 1.963-1.715 1.192 0 1.914.762 1.938 1.715 0 .953-.746 1.715-1.986 1.715zm-1.6 11.02h3.273V9.75H3.737v10.702zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="hero-visual-block">
          <div className="profile-glass-card glass-panel">
            <div className="visual-circle circle-one"></div>
            <div className="visual-circle circle-two"></div>
            <div className="visual-glass-content">
              <span className="visual-badge">React & Node</span>
              <div className="code-text-line">
                <span className="syntax-keyword">const</span> <span className="syntax-var">developer</span> = <span className="syntax-string">"Manoj Katuwal"</span>;
              </div>
              <div className="code-text-line">
                <span className="syntax-keyword">const</span> <span className="syntax-var">skills</span> = [<span className="syntax-string">"MERN"</span>, <span className="syntax-string">"MySQL"</span>];
              </div>
              <div className="code-text-line">
                <span className="syntax-keyword">const</span> <span className="syntax-var">passion</span> = <span className="syntax-string">"Innovative UX/UI"</span>;
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
