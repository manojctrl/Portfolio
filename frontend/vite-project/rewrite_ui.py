from pathlib import Path

root = Path(__file__).parent
src = root / 'src'

def write(path, text):
    out = src / path
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(text, encoding='utf-8')

write('App.jsx', """import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Journey from './components/Journey';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
""")

write('App.css', """.app {
  min-height: 100vh;
  background: var(--color-bg);
}
""")

write('components/Hero.jsx', """import { motion } from 'framer-motion';
import { ArrowRight, Download, ChevronDown } from 'lucide-react';
import './Hero.css';

const container = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.16, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] },
  },
};

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-shell container">
        <motion.div className="hero-copy" variants={container} initial="hidden" animate="visible">
          <motion.span className="hero-badge" variants={item}>
            MERN Stack Developer
          </motion.span>
          <motion.h1 className="hero-title" variants={item}>
            I build clean, user-friendly web applications.
          </motion.h1>
          <motion.p className="hero-description" variants={item}>
            Modern apps with React, Node, Express, and MongoDB designed for clarity, speed, and a strong user experience.
          </motion.p>
          <motion.div className="hero-actions" variants={item}>
            <a href="#projects" className="btn btn-primary">
              View Projects
              <ArrowRight size={16} />
            </a>
            <a href="/cv/Manoj_Katuwal_CV.pdf" download className="btn btn-secondary">
              Download CV
              <Download size={16} />
            </a>
          </motion.div>
        </motion.div>
      </div>
      <motion.a href="#about" className="hero-scroll" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.55 }}>
        <span>Scroll to learn more</span>
        <ChevronDown size={18} />
      </motion.a>
    </section>
  );
}

export default Hero;
""")

write('components/Hero.css', """.hero {
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: clamp(80px, 12vw, 120px) 0 60px;
  background: linear-gradient(180deg, #08101b 0%, #050913 100%);
}

.hero-shell {
  width: min(100%, 820px);
  padding: 0 18px;
}

.hero-badge {
  display: inline-flex;
  padding: 10px 18px;
  border-radius: 999px;
  background: rgba(59, 130, 246, 0.14);
  color: var(--color-primary);
  font-family: var(--font-mono);
  font-size: 0.8rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  margin-bottom: 24px;
}

.hero-title {
  margin: 0;
  font-family: var(--font-display);
  font-size: clamp(2.8rem, 6vw, 4.2rem);
  color: #ffffff;
  line-height: 1.05;
}

.hero-description {
  margin: 24px auto 34px;
  max-width: 640px;
  color: var(--color-text-secondary);
  font-size: 1.05rem;
  line-height: 1.8;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 14px 24px;
  border-radius: 999px;
  font-weight: 700;
  font-size: 0.95rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
  text-decoration: none;
}

.btn-primary {
  background: var(--color-primary);
  color: #ffffff;
}

.btn-primary:hover {
  transform: translateY(-1px);
  box-shadow: 0 16px 28px rgba(59, 130, 246, 0.24);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.08);
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.12);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.12);
}

.hero-scroll {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-top: 40px;
  color: var(--color-text-secondary);
  text-decoration: none;
  font-size: 0.9rem;
}

.hero-scroll svg {
  animation: floatDown 1.6s ease-in-out infinite;
}

@keyframes floatDown {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(6px); }
}

@media (max-width: 768px) {
  .hero {
    padding-top: 90px;
    padding-bottom: 50px;
  }

  .hero-title {
    font-size: clamp(2.4rem, 10vw, 3.4rem);
  }

  .hero-description {
    font-size: 1rem;
  }
}
""")

write('components/Navbar.css', """.navbar {
  position: fixed;
  inset: 0 0 auto;
  z-index: 1000;
  background: rgba(5, 9, 18, 0.96);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(14px);
}

.navbar-inner {
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 14px var(--container-padding);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.navbar-logo {
  font-family: var(--font-display);
  font-size: 0.95rem;
  letter-spacing: 0.16em;
  color: #ffffff;
  cursor: pointer;
}

.navbar-links {
  display: flex;
  gap: 24px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.navbar-links a {
  color: var(--color-text-secondary);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
}

.navbar-links a:hover {
  color: #ffffff;
}

.navbar-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.navbar-cta {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 18px;
  border-radius: 999px;
  background: var(--color-primary);
  color: #ffffff;
  font-size: 0.85rem;
  font-weight: 700;
  text-decoration: none;
}

.navbar-hamburger {
  display: none;
  width: 42px;
  height: 42px;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.05);
  color: var(--color-text-secondary);
  cursor: pointer;
}

.navbar-hamburger:hover {
  background: rgba(255, 255, 255, 0.12);
}

.navbar-mobile-menu {
  position: fixed;
  inset: 0;
  background: rgba(5, 9, 18, 0.99);
  padding: 100px 24px 24px;
  z-index: 1001;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.navbar-mobile-link {
  color: #ffffff;
  text-decoration: none;
  font-size: 1.05rem;
  font-weight: 600;
  padding: 16px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.navbar-mobile-cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 14px 18px;
  border-radius: 999px;
  background: var(--color-primary);
  color: #ffffff;
  text-decoration: none;
  font-weight: 700;
}

@media (max-width: 768px) {
  .navbar-links,
  .navbar-cta {
    display: none;
  }

  .navbar-hamburger {
    display: inline-flex;
  }
}
""")

write('components/Projects.css', """.projects-hud-section {
  padding: var(--section-padding) 0;
}

.projects-hud-content {
  margin-top: 36px;
}

.modern-projects-grid {
  display: grid;
  gap: 22px;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}

.modern-project-card {
  display: flex;
  flex-direction: column;
  background: rgba(15, 23, 42, 0.95);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: var(--radius-xl);
  overflow: hidden;
  transition: transform 0.24s ease, border-color 0.24s ease, box-shadow 0.24s ease;
}

.modern-project-card:hover {
  transform: translateY(-4px);
  border-color: rgba(59, 130, 246, 0.28);
  box-shadow: 0 24px 48px rgba(0, 0, 0, 0.2);
}

.project-card-image {
  min-height: 180px;
  background: linear-gradient(180deg, rgba(14, 23, 40, 0.95), rgba(7, 11, 18, 1));
}

.proj-illustration {
  width: 100%;
  height: 100%;
  display: block;
}

.project-card-content {
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding: 24px;
}

.project-title {
  margin: 0;
  color: #ffffff;
  font-size: 1.08rem;
  font-weight: 700;
}

.project-status-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  border-radius: 999px;
  background: rgba(59, 130, 246, 0.14);
  color: #ffffff;
  font-size: 0.75rem;
  font-weight: 700;
}

.project-description {
  margin: 0;
  color: var(--color-text-secondary);
  line-height: 1.7;
  font-size: 0.95rem;
}

.project-tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.project-tech-tag {
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: var(--color-text-secondary);
  font-size: 0.8rem;
}

.project-complexity-bar {
  display: grid;
  gap: 8px;
}

.complexity-label {
  display: flex;
  justify-content: space-between;
  color: var(--color-text-muted);
  font-size: 0.78rem;
  font-family: var(--font-mono);
}

.complexity-fill {
  width: 100%;
  height: 8px;
  border-radius: 999px;
  background: linear-gradient(90deg, rgba(59, 130, 246, 0.9), rgba(6, 182, 212, 0.9));
}

.project-card-actions {
  display: flex;
  gap: 10px;
  margin-top: auto;
}

.project-action-btn {
  flex: 1;
  padding: 12px 14px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.04);
  color: var(--color-text-secondary);
  font-size: 0.82rem;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease;
}

.project-action-btn:hover {
  background: rgba(255, 255, 255, 0.08);
  color: #ffffff;
}

.projects-load-more {
  padding: 24px 0 8px;
  display: flex;
  justify-content: center;
}

.btn-load-more {
  padding: 12px 28px;
  border-radius: 999px;
  background: rgba(59, 130, 246, 0.15);
  border: 1px solid rgba(59, 130, 246, 0.28);
  color: #ffffff;
  font-size: 0.85rem;
  font-weight: 700;
}

@media (max-width: 820px) {
  .projects-hud-content {
    margin-top: 24px;
  }
}
""")

write('components/Skills.css', """.skills {
  padding: var(--section-padding) 0;
}

.skills-header {
  text-align: center;
  margin-bottom: 38px;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 22px;
}

.skill-category {
  background: rgba(15, 23, 42, 0.95);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: var(--radius-xl);
  padding: 26px;
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.skill-category:hover {
  transform: translateY(-3px);
  border-color: rgba(59, 130, 246, 0.26);
}

.category-icon {
  width: 52px;
  height: 52px;
  border-radius: 16px;
  display: grid;
  place-items: center;
  margin-bottom: 18px;
  background: rgba(59, 130, 246, 0.12);
  color: var(--color-primary);
}

.category-title {
  margin: 0 0 18px;
  color: #ffffff;
  font-family: var(--font-display);
  font-size: 1.1rem;
}

.tech-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.tech-badge {
  padding: 8px 14px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: var(--color-text-secondary);
  font-family: var(--font-mono);
  font-size: 0.82rem;
}

@media (max-width: 900px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }
}
""")

write('components/About.css', """.about {
  padding: var(--section-padding) 0;
}

.about-header {
  text-align: center;
  margin-bottom: 42px;
}

.about-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 32px;
  align-items: start;
}

.about-text {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.about-text p {
  color: var(--color-text-secondary);
  font-size: 1rem;
  line-height: 1.8;
}

.about-stats {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

.stat-card {
  background: rgba(15, 23, 42, 0.95);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: var(--radius-xl);
  padding: 24px;
  text-align: center;
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.stat-card:hover {
  transform: translateY(-3px);
  border-color: rgba(59, 130, 246, 0.26);
}

.stat-icon {
  width: 44px;
  height: 44px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  margin: 0 auto 14px;
  background: rgba(59, 130, 246, 0.12);
  color: var(--color-primary);
}

.stat-number {
  font-family: var(--font-display);
  font-size: 2rem;
  font-weight: 800;
  color: #ffffff;
}

.stat-label {
  font-size: 0.82rem;
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.about-qualities {
  margin-top: 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.qualities-heading {
  color: #ffffff;
  font-size: 1rem;
  font-weight: 700;
}

.qualities-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}

.quality-badge {
  padding: 10px 16px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.05);
  color: var(--color-text-secondary);
  font-size: 0.9rem;
}

@media (max-width: 900px) {
  .about-grid {
    grid-template-columns: 1fr;
  }
}
""")

write('components/Contact.css', """.contact-modern-section {
  padding: var(--section-padding) 0;
}

.contact-subtitle {
  color: var(--color-text-secondary);
  max-width: 640px;
  margin-top: 10px;
}

.contact-modern-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  margin-top: 38px;
}

.contact-info-panel,
.contact-form-wrapper,
.contact-social-links {
  background: rgba(15, 23, 42, 0.95);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: var(--radius-xl);
}

.contact-info-panel {
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.contact-info-panel > h3,
.contact-form-wrapper h3 {
  margin: 0;
  color: #ffffff;
  font-size: 1.35rem;
}

.contact-info-grid {
  display: grid;
  gap: 16px;
}

.contact-card {
  display: flex;
  gap: 16px;
  padding: 18px;
  border-radius: var(--radius-lg);
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s ease, border-color 0.2s ease;
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.contact-card:hover {
  transform: translateY(-2px);
  border-color: rgba(59, 130, 246, 0.24);
}

.contact-card-icon {
  width: 48px;
  height: 48px;
  display: grid;
  place-items: center;
  border-radius: 16px;
  background: rgba(59, 130, 246, 0.12);
  color: var(--color-primary);
}

.contact-card-content h4 {
  margin: 0;
  color: #ffffff;
  font-size: 0.95rem;
}

.contact-card-content p {
  margin: 0;
  color: var(--color-text-secondary);
  line-height: 1.7;
  font-size: 0.93rem;
}

.contact-social-links {
  padding: 22px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.social-icons {
  display: flex;
  gap: 12px;
}

.social-link {
  width: 44px;
  height: 44px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: var(--color-text-secondary);
}

.social-link:hover {
  background: rgba(59, 130, 246, 0.14);
  color: #ffffff;
}

.contact-form-wrapper {
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.contact-form {
  display: grid;
  gap: 20px;
}

.form-group {
  display: grid;
  gap: 10px;
}

.form-group label {
  color: #ffffff;
  font-weight: 600;
  font-size: 0.92rem;
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 14px 16px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.04);
  color: #ffffff;
  font-size: 0.95rem;
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: rgba(59, 130, 246, 0.4);
  background: rgba(255, 255, 255, 0.08);
}

.form-submit-btn {
  width: fit-content;
  padding: 14px 28px;
  border-radius: 999px;
  border: none;
  background: var(--color-primary);
  color: #ffffff;
  font-weight: 700;
  cursor: pointer;
}

.form-submit-btn:hover:not(:disabled) {
  background: #5d8cff;
}

.form-error,
.form-success {
  padding: 14px 18px;
  border-radius: 16px;
  font-size: 0.94rem;
}

.form-error {
  background: rgba(255, 59, 48, 0.1);
  border: 1px solid rgba(255, 59, 48, 0.28);
  color: #ff6b6b;
}

.form-success {
  background: rgba(34, 197, 94, 0.1);
  border: 1px solid rgba(34, 197, 94, 0.3);
  color: #86efac;
}

@media (max-width: 900px) {
  .contact-modern-container {
    grid-template-columns: 1fr;
  }
}
""")

write('components/Footer.css', """.footer-hud {
  padding: 40px 24px 24px;
  background: rgba(8, 12, 18, 0.98);
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.footer-content-grid {
  max-width: var(--container-max);
  margin: 0 auto 24px;
  display: grid;
  grid-template-columns: 1.4fr 0.8fr 0.8fr;
  gap: 28px;
}

.footer-brand-col,
.footer-nav-col,
.footer-sys-col {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.footer-logo {
  font-family: var(--font-display);
  color: #ffffff;
  font-size: 1rem;
  letter-spacing: 0.18em;
}

.footer-tagline {
  color: var(--color-text-secondary);
  line-height: 1.75;
}

.footer-socials {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.footer-social-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.04);
  color: var(--color-text-secondary);
  text-decoration: none;
  font-size: 0.78rem;
}

.footer-social-link:hover {
  color: #ffffff;
  border-color: rgba(59, 130, 246, 0.28);
}

.footer-col-title {
  color: var(--color-primary);
  text-transform: uppercase;
  font-size: 0.75rem;
  letter-spacing: 0.18em;
}

.footer-nav-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 10px;
}

.footer-nav-link {
  color: var(--color-text-secondary);
  text-decoration: none;
  font-size: 0.9rem;
}

.footer-nav-link:hover {
  color: #ffffff;
}

.footer-sys-list {
  display: grid;
  gap: 10px;
}

.sys-row {
  display: flex;
  justify-content: space-between;
  color: var(--color-text-secondary);
  font-size: 0.84rem;
}

.footer-bottom-bar {
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding-top: 18px;
}

.footer-bottom-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 12px;
  color: var(--color-text-secondary);
  font-size: 0.84rem;
}

@media (max-width: 900px) {
  .footer-content-grid {
    grid-template-columns: 1fr;
  }
}
""")

write('components/Journey.css', """.journey-hud-section {
  padding: var(--section-padding) 0;
}

.journey-interactive-layout {
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 28px;
  align-items: start;
  margin-top: 36px;
}

.journey-hud-menu {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.year-hud-btn {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  padding: 18px 20px;
  border-radius: var(--radius-xl);
  background: rgba(15, 23, 42, 0.95);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: var(--color-text-secondary);
  cursor: pointer;
  transition: transform 0.2s ease, border-color 0.2s ease, background 0.2s ease;
}

.year-hud-btn:hover {
  transform: translateX(4px);
  border-color: rgba(59, 130, 246, 0.22);
}

.year-hud-btn.active {
  background: rgba(59, 130, 246, 0.12);
  border-color: var(--color-primary);
  color: #ffffff;
}

.btn-year-text {
  font-family: var(--font-display);
  font-size: 1.8rem;
  font-weight: 800;
}

.btn-icon-wrapper {
  width: 40px;
  height: 40px;
  border-radius: 16px;
  display: grid;
  place-items: center;
  background: rgba(255, 255, 255, 0.05);
  color: var(--color-text-muted);
}

.telemetry-milestone-panel {
  display: flex;
}

.telemetry-card {
  width: 100%;
  background: rgba(15, 23, 42, 0.95);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: var(--radius-xl);
  padding: 30px;
}

.milestone-detail-header {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 18px;
  align-items: center;
}

.milestone-badge-glow {
  width: 56px;
  height: 56px;
  border-radius: 18px;
  display: grid;
  place-items: center;
  background: rgba(59, 130, 246, 0.12);
  color: var(--color-primary);
}

.milestone-title-block h3 {
  margin: 0;
  color: #ffffff;
  font-size: 1.35rem;
}

.milestone-title-block h4 {
  margin: 0;
  color: var(--color-text-secondary);
  font-size: 0.92rem;
  font-weight: 500;
}

.milestone-year-subtitle {
  color: var(--color-text-muted);
  font-family: var(--font-mono);
  font-size: 0.75rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.milestone-desc-content {
  margin: 18px 0 0;
  color: var(--color-text-secondary);
  line-height: 1.75;
}

.milestone-metrics-grid {
  display: grid;
  gap: 12px;
  margin-top: 24px;
}

.metric-row {
  display: flex;
  justify-content: space-between;
  color: var(--color-text-secondary);
  font-family: var(--font-mono);
  font-size: 0.85rem;
}

.metric-key {
  color: var(--color-text-muted);
}

.metric-val {
  color: #ffffff;
  font-weight: 700;
}

.milestone-tech-pillbox {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 24px;
}

.milestone-tag {
  padding: 8px 14px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: var(--color-text-secondary);
  font-size: 0.8rem;
  font-family: var(--font-mono);
}

@media (max-width: 900px) {
  .journey-interactive-layout {
    grid-template-columns: 1fr;
  }

  .telemetry-card {
    padding: 24px;
  }
}
""")

print('updated files')
